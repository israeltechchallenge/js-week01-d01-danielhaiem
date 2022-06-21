function moduloEx5(num1, num2) {
  //your code
  let result = num1 % num2;
  let answer = "";
  if (num1 > num2 && result != 0) {
    answer = `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${result}`;
  } else if (num1 > num2 && result === 0) {
    answer = `The number ${num1} is bigger than ${num2}`;
  } else if (num1 === num2) {
    answer = `The number ${num1} is equal to ${num2}`;
  } else {
    answer = `The number ${num1} is less than ${num2}`;
  }
  console.log(answer);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
