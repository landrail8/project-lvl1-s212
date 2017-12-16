#!/usr/bin/env node
import readlineSync from 'readline-sync';

const f = () => {
  console.log('\n');
  console.log('___Answer "yes" if number even otherwise answer "no".___\n');

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  const countQuestions = 3;
  let i = 1;
  let haveFault = false;

  const min = 1;
  const max = 100;

  while (i <= countQuestions) {
    const current = Math.floor(Math.random() * (max - min));
    const answer = readlineSync.question(`Question: ${current}\n`);

    if ((current % 2 === 1) && (answer !== 'no')) {
      console.log(`${answer} is wrong answer ;(. Correct answer was "no".`);
      haveFault = true;
      break;
    }
    if ((current % 2 === 0) && (answer !== 'yes')) {
      console.log(`${answer} is wrong answer ;(. Correct answer was "yes".`);
      haveFault = true;
      break;
    }
    console.log('Correct!');
    console.log('\n');
    i += 1;
  }

  if (haveFault) {
    console.log('\n');
    console.log(`Let's try again, ${actualname}`);
  } else {
    console.log(`Congratulations, ${actualname}`);
  }
};

export default f;