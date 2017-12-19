
import readlineSync from 'readline-sync';

export default (gameTitle, gameRules, constrQuestion) => {
  const countQuestions = 3;
  console.log(gameTitle);
  console.log(gameRules);

  const actualname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualname}`);

  let i = 1;
  let countFaults = 0;
  while (i <= countQuestions) {
    const answerQuestion = constrQuestion();

    if (countFaults === 0) {
      console.log(`Question: ${answerQuestion.question}`);

      const answer = readlineSync.question('Your answer: ');
      if (answer !== answerQuestion.answer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${answerQuestion.answer}.`);
        countFaults += 1;
        break;
      } else {
        console.log('Correct!');
      }
    }
    i += 1;
  }

  if (countFaults === 0) {
    console.log(`Congratulations, ${actualname}`);
  } else {
    console.log(`Let's try again, ${actualname}`);
  }
};
