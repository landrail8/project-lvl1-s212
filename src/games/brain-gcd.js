#!/usr/bin/env node
import readlineSync from 'readline-sync';

const f = () => {
  const NOD = (n, m) => {
    if (m > 0) {
      const k = n % m;
      return NOD(m, k);
    }
    return Math.abs(n);
  };

  const countQuestions = 3;

  console.log('\n');
  console.log('___Find the greatest common divisor of given numbers.___\n');

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  let haveFault = false;

  const min = 1;
  const max = 100;

  let i = 0;
  while (i <= countQuestions) {
    const currentFirstNumber = Math.floor(Math.random() * (max - min));
    const currentSecondNumber = Math.floor(Math.random() * (max - min));

    console.log(`Question: ${currentFirstNumber}  ${currentSecondNumber}`);

    //  const arr = [currentFirstNumber, currentSecondNumber];
    const rightNumber = NOD(currentFirstNumber, currentSecondNumber);//  arr);
    // console.log(rightNumber);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === rightNumber) {
      console.log('Correct!\n');
    } else {
      haveFault = true;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightNumber}.`);
      break;
    }
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
