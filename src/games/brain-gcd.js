#!/usr/bin/env node
import startGame from '../bin/index';

const GSD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return GSD(m, k);
  }
  return Math.abs(n);
};

const gameTitle = 'Brain GSD \n Find the greatest common divisor of given numbers.';
const arrQuest = [];

const countQuestions = 3;

const min = 1;
const max = 100;

let i = 1;
while (i <= countQuestions) {
  const currentFirstNumber = Math.floor(Math.random() * (max - min));
  const currentSecondNumber = Math.floor(Math.random() * (max - min));
  const rightNumber = GSD(currentFirstNumber, currentSecondNumber);

  arrQuest.push({ question: `Question: ${currentFirstNumber}  ${currentSecondNumber}`, rightAnswer: rightNumber.toString() });

  i += 1;
}

startGame(gameTitle, arrQuest);
