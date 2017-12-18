#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default (gameTitle, arrQuest) => {
  console.log(gameTitle);

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  const sumFaults = arrQuest.reduce((countFaults, currentValue) => {
    let thisFault = 0;

    if (countFaults === 0) {
      console.log(currentValue.question);

      const answer = readlineSync.question('Your answer: ');
      if (answer !== currentValue.rightAnswer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${currentValue.rightAnswer}.`);
        thisFault = 1;
      } else {
        console.log('Correct!');
      }
    } else {
      thisFault = 1;
    }
    return thisFault;
  }, 0);

  if (sumFaults === 0) {
    console.log(`Congratulations, ${actualname}`);
  } else {
    console.log(`Let's try again, ${actualname}`);
  }
};
