
import startGame from '../bin/index';

const constrQuestion = () => {
  const min = 1;
  const max = 100;

  const current = Math.floor(Math.random() * (max - min));
  const curQuestion = `${current}`;

  let curAnswer = '';
  if (current % 2 === 1) {
    curAnswer = 'no';
  }
  if (current % 2 === 0) {
    curAnswer = 'yes';
  }

  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain Even';
  const gameRules = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameTitle, gameRules, constrQuestion);
};
