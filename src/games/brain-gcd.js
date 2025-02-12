import getRandomNumber from '../utils/index.js';
import playGame from '../index.js';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  return {
    question: `${num1} ${num2}`,
    correctAnswer: String(getGCD(num1, num2)),
  };
};

export default () => playGame({
  generateRound,
  gameRule: 'Find the greatest common divisor of given numbers.',
});
