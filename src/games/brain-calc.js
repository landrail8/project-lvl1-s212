#!/usr/bin/env node
import startGame from '../bin/index';

const gameTitle = 'Brain Calc \n What is the result of the expression?';
const arrQuest = [];

const countQuestions = 3;

// array of operations:
const arrOperations = ['+', '-', '*'];

let i = 1;

const min = 1;
const max = 100;

while (i <= countQuestions) {
  const currentOperation = Math.floor(Math.random() * 2);
  const currentFirstNumber = Math.floor(Math.random() * (max - min));
  const currentSecondNumber = Math.floor(Math.random() * (max - min));

  let rightNumber = 0;
  switch (currentOperation) {
    case '0': {
      rightNumber = currentFirstNumber + currentSecondNumber;
      break; }
    case '1': {
      rightNumber = currentFirstNumber - currentSecondNumber;
      break; }
    case '2': {
      rightNumber = currentFirstNumber * currentSecondNumber;
      break; }
    default: {
      rightNumber = currentFirstNumber + currentSecondNumber; }
  }

  arrQuest.push({ question: `Question: ${currentFirstNumber}${arrOperations[currentOperation]}${currentSecondNumber}`, rightAnswer: rightNumber.toString() });

  i += 1;
}

startGame(gameTitle, arrQuest);
