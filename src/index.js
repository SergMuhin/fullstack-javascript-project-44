import readlineSync from 'readline-sync';
import { REQUIRED_CORRENT_ANSWERS } from './constants.js';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const playGame = ({ generateRound, gameRule }) => {
  const userName = getUserName();

  console.log(`Hello, ${userName}`);

  console.log(gameRule);

  let correctAnswers = 0;

  while (correctAnswers < REQUIRED_CORRENT_ANSWERS) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
