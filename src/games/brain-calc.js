#!/usr/bin/env node
import startGame from '../bin/index';

const constrQuestion = () => {
  // array of operations:
  const arrOperations = ['+', '-', '*'];

  const min = 1;
  const max = 100;

  const currentOperation = Math.floor(Math.random() * 2).toString();
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
    default:
      rightNumber = currentFirstNumber + currentSecondNumber;
  }

  const curQuestion = `Question: ${currentFirstNumber}${arrOperations[currentOperation]}${currentSecondNumber}`;
  const curAnswer = rightNumber.toString();
  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain Calc \n What is the result of the expression?';
  startGame(gameTitle, constrQuestion);
};
