export const generateRandomPrice = () => {
  return Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
};
