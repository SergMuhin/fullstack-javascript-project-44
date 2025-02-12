import getRandomNumber from '../utils/index.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();

  return {
    question: `${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => playGame({
  generateRound,
  gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
});
