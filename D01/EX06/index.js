const outputEl = document.getElementById("output");

function moduloEx6(number, comparer) {
  //your code
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

moduloEx6(8, 3);
