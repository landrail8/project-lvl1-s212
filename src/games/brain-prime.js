
import startGame from '../bin/index';

const isPrime = (input) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(input); i += 1) {
    if (input % i === 0) {
      prime = false;
      break;
    }
  }
  return prime && (input > 1);
};

const constrQuestion = () => {
  const min = 1;
  const max = 100;

  const currentNumber = 3 + Math.floor(Math.random() * (max - min));

  const curQuestion = `Is this number prime? ${currentNumber}`;
  let curAnswer = '';
  if (isPrime(currentNumber)) {
    curAnswer = 'yes';
  } else {
    curAnswer = 'no';
  }

  return { question: curQuestion, answer: curAnswer };
};

export default () => {
  const gameTitle = 'Brain Prime';
  const gameRules = 'Answer "yes" if number is prime otherwise answer "no".';
  startGame(gameTitle, gameRules, constrQuestion);
};
