import { greetUser, getUserName } from './index.js';

export default () => {
  greetUser();
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};
