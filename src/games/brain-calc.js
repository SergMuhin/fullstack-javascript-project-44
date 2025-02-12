import playGame from '../index.js';
import getRandomNumber from '../utils/index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculateAnswer = ({ num1, num2, operator }) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const operator = getRandomOperator();

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(calculateAnswer({ num1, num2, operator })),
  };
};

export default () => playGame({ generateRound, gameRule: 'What is the result of the expression?' });
