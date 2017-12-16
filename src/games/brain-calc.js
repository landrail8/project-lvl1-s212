#!/usr/bin/env node
import readlineSync from 'readline-sync';

const f = () => {
  const countQuestions = 3;

  console.log('\n');
  console.log('___What is the result of the expression?___\n');

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  // array of operations:
  const arrOperations = ['+', '-', '*'];

  let i = 1;
  let haveFault = false;

  const min = 1;
  const max = 100;

  while (i <= countQuestions) {
    const currentOperation = Math.floor(Math.random() * 2);
    const currentFirstNumber = Math.floor(Math.random() * (max - min));
    const currentSecondNumber = Math.floor(Math.random() * (max - min));

    //  console.log(currentFirstNumber);
    //  console.log(arrOperations[currentOperation]);
    //  console.log(currentSecondNumber);

    console.log(`Question: ${currentFirstNumber}${arrOperations[currentOperation]}${currentSecondNumber}`);

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

    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== rightNumber) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightNumber}.`);
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
