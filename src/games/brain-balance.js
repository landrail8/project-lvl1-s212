#!/usr/bin/env node
import startGame from '../bin/index';

const constrQuestion = () => {
  const min = 101;
  const max = 999;

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

  const curAnswer = arr.sort().join('');
  const curQuestion = `Question: ${currentNumber}`;

  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain Balance \n Balance the given number.';
  startGame(gameTitle, constrQuestion);
};
