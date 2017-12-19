
import startGame from '../bin/index';

const constrQuestion = () => {
  const min = 1;
  const max = 100;

  const firstNumber = Math.floor(Math.random() * (max - min));
  const step = 1 + Math.floor(Math.random() * 10);
  const counterSteps = 10;
  const missedPosition = Math.floor(Math.random() * counterSteps);
  let curQuestion = '';
  let curAnswer = '';

  let i = 1;
  while (i < counterSteps) {
    const curNumber = firstNumber + (step * (i - 1));
    if (i === missedPosition) {
      curQuestion = `${curQuestion} ..`;
      curAnswer = curNumber.toString();
    } else {
      curQuestion = `${curQuestion} ${curNumber}`;
    }
    i += 1;
  }

  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain Progression';
  const gameRules = 'Find missed number';
  startGame(gameTitle, gameRules, constrQuestion);
};
