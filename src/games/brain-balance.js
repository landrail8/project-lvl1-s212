#!/usr/bin/env node
import readlineSync from 'readline-sync';

const f = () => {
  const countQuestions = 3;

  console.log('\n');
  console.log('___Balance the given number___\n');

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  let i = 1;
  let haveFault = false;

  const min = 101;
  const max = 999;

  while (i <= countQuestions) {
    const currentNumber = Math.floor(Math.random() * (max - min));

    console.log(`Question: ${currentNumber}`);

    //  lets find right number
    const arr = currentNumber.toString().split('');
    let minElemArray = arr.reduce((acc, cur) => Math.min(acc, cur));
    let maxElemArray = arr.reduce((acc, cur) => Math.max(acc, cur));

    while ((maxElemArray - minElemArray) > 1) {
      arr.reduce((acc, cur) => {
        if (cur === minElemArray) {
          cur += 1;
        }
        if (cur === maxElemArray) {
          cur -= 1;
        }
        minElemArray = arr.reduce((acc, cur) => Math.min(acc, cur));
        maxElemArray = arr.reduce((acc, cur) => Math.max(acc, cur));
      })
    }

    };


    let str = 123;
let arr = str.toString().split('');
console.log(arr);
arr.reduce((accum, current, index, array) => {
  let max = Math.max(...array);
  //console.log(max);
  if (current === max) {
    console.log(arr[index]);
    arr[index] -= 1;
  };
});
   console.log(arr.toString());


   

    arr.sort();
    console.log(arr.toString());

    // console.log(maxElemArray);
    // console.log(minElemArray);

    const rightNumber = 0;

  //   const answer = Number(readlineSync.question('Your answer: '));
  //   if (answer !== rightNumber) {
  //     console.log(`${answer} is wrong answer ;(. Correct answer was ${rightNumber}.`);
  //     haveFault = true;
  //     break;
  //   }
  //   console.log('Correct!');
  //   console.log('\n');
  //   i += 1;
  // }
  //
  // if (haveFault) {
  //   console.log('\n');
  //   console.log(`Let's try again, ${actualname}`);
  // } else {
  //   console.log(`Congratulations, ${actualname}`);
  // }
};
export default f;
