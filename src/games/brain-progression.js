import getRandomNumber from '../utils/index.js';
import playGame from '../index.js';

import { MIN_NUM } from '../constants.js';

const STEP_MIN = 2;
const STEP_MAX = 10;

const LENGTH_MIN = 5;
const LENGTH_MAX = 10;

const START_MAX = 50;
const HIDDEN_INDEX_MIN = 0;

const generateProgression = ({
  start,
  step,
  length,
}) => Array.from({ length }, (_, index) => start + index * step);

const generateRound = () => {
  const length = getRandomNumber({ min: LENGTH_MIN, max: LENGTH_MAX });
  const start = getRandomNumber({ min: MIN_NUM, max: START_MAX });
  const step = getRandomNumber({ min: STEP_MIN, max: STEP_MAX });

  const progression = generateProgression({ start, step, length });

  const hiddenIndex = getRandomNumber({ min: HIDDEN_INDEX_MIN, max: length - 1 });

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

export default () => playGame({
  generateRound,
  gameRule: 'What number is missing in the progression?',
});
