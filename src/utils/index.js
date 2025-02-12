import { MIN_NUM, MAX_NUM } from '../constants.js';

export default ({
  min = MIN_NUM,
  max = MAX_NUM,
} = { MIN_NUM, MAX_NUM }) => Math.floor(Math.random() * (max - min + 1)) + min;
