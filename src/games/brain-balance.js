#!/usr/bin/env node
import startGame from '../bin/index';

const gameTitle = 'Brain Balance \n Balance the given number.';
const arrQuest = [];

const countQuestions = 3;

let i = 1;

const min = 101;
const max = 999;

while (i <= countQuestions) {
  const currentNumber = Math.floor(Math.random() * (max - min));

  const arr = currentNumber.toString().split('').map(x => Number(x));
  let minElemArray = arr.reduce((acc, cur) => Math.min(acc, cur));
  let maxElemArray = arr.reduce((acc, cur) => Math.max(acc, cur));

  while ((maxElemArray - minElemArray) > 1) {
    let YetPlusMin = false;
    let YetMinusMax = false;

    let index = 0;
    for (index = 0; index < arr.length; index += 1) {
      if ((arr[index] === minElemArray) && (!YetPlusMin)) {
        arr[index] += 1;
        YetPlusMin = true;
      }
      if ((arr[index] === maxElemArray) && (!YetMinusMax)) {
        arr[index] -= 1;
        YetMinusMax = true;
      }

      minElemArray = arr.reduce((acc, cur) => Math.min(acc, cur));
      maxElemArray = arr.reduce((acc, cur) => Math.max(acc, cur));
    }
  }

  const rightNumber = arr.sort().join('');
  arrQuest.push({ question: `Question: ${currentNumber}`, rightAnswer: rightNumber });

  i += 1;
}

startGame(gameTitle, arrQuest);
