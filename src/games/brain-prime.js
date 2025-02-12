import getRandomNumber from '../utils/index.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber();

  return {
    question: `${number}`,
    correctAnswer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => playGame({
  generateRound,
  gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
});
