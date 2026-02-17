/*import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export function initQuizz(questions) {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
    
  currentQuestion = 0;
  score = 0;

  showQuestion();
}
  
async function showQuestion() {
  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  const question = quizzData[currentQuestion];
  questionElement.innerText = question.label
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  let chosedProposal = [];
  for (let i = 0; i < proposals.length; i++) {
      
    if (selectedButton.innerText === proposals[i].label) {
      chosedProposal.push(proposals[i]);
    }
  }

  let point = await evaluate(chosedProposal);

  score = score + point;
  
  currentQuestion++;
  
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  quiz.innerHTML = `
    <h1>Quizz Fini!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;
}*/

import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData = []; // Initialisation vide
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz() { // Ajout async
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
  
  currentQuestion = 0;
  score = 0;

  // Modification : On charge les questions UNE SEULE FOIS au début
  quizzData = await getQuestionsApi();

  showQuestion();
}
  
async function showQuestion() {
  // Suppression du re-fetch global et de la boucle "N+1" ici
  
  const question = quizzData[currentQuestion];

  // Modification : Lazy loading. On ne charge les propositions que si on ne les a pas déjà.
  if (!question.proposals) {
      question.proposals = await getProposalApi(question.id);
  }

  questionElement.innerText = question.label
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach(proposal => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  let chosedProposal = [];
  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      chosedProposal.push(proposals[i]);
    }
  }

  let point = await evaluate(chosedProposal);

  score = score + point;
  
  currentQuestion++;
  
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
    const quizElement = document.getElementById("quiz"); // Correction selecteur
    quizElement.innerHTML = `
    <h1>Quizz Fini!</h1>
    <p>Ton score: ${score}/${quizzData.length}</p>
  `;
}