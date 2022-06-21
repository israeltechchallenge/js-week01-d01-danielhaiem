const outputEl = document.getElementById("output");

function getRandomInt(max) {
  //your code
  let randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
}

console.log(getRandomInt());

function moduloEx7() {
  //your code
  let number = getRandomInt();
  let comparer = getRandomInt();
  console.log(number);
  console.log(comparer);

  let result = number % comparer;
  let answer = "";
  if (number > comparer && result != 0) {
    answer = `The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${result}`;
  } else if (number > comparer && result === 0) {
    answer = `The number ${number} is bigger than ${comparer}`;
  } else if (number === comparer) {
    answer = `The number ${number} is equal to ${comparer}`;
  } else {
    answer = `The number ${number} is less than ${comparer}`;
  }
  outputEl.innerText = answer;
}

moduloEx7();
