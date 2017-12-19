
import startGame from '../bin/index';

const GSD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return GSD(m, k);
  }
  return Math.abs(n);
};

const constrQuestion = () => {
  const min = 1;
  const max = 100;

  const currentFirstNumber = Math.floor(Math.random() * (max - min));
  const currentSecondNumber = Math.floor(Math.random() * (max - min));

  const curQuestion = `${currentFirstNumber}  ${currentSecondNumber}`;
  const curAnswer = GSD(currentFirstNumber, currentSecondNumber).toString();


  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain GSD';
  const gameRules = 'Find the greatest common divisor of given numbers.';
  startGame(gameTitle, gameRules, constrQuestion);
};
