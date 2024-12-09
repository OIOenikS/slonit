
function getRandomSecretNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const secretNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  return secretNumber;
}

function  getRandomCurrentNumber (min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const currentNumber = Math.ceil((maxFloored - minCeiled)/2);
  return currentNumber;
}

function startGameSecretNumber (min, max) {
  const secretNumber = getRandomSecretNumber(min, max);
  console.log(secretNumber);
  let currentMin = min;
  let currentMax = max;
  let currentNumber;
  while (true) {
    currentNumber = getRandomCurrentNumber(currentMin, currentMax);
    console.log(`Компьютер 2: Пробую число ${currentNumber}.`);
    if (secretNumber === currentNumber) break;
    if (secretNumber > currentNumber) {
      currentMin = -currentNumber;
      console.log(`Компьютер 1: Больше.`);
    };
    if (secretNumber < currentNumber) {
      currentMax = currentNumber;
      console.log(`Компьютер 1: Меньше.`);
    };
  }
  console.log(`Компьютер 1: Угадал!`);
}

startGameSecretNumber(1, 100);