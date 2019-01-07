function generateMathQuestion() {
  const maxNumber = 20;
  const signs = ['+', '-', "*", "/"];

  const signKey = getRandomInt(signs.length -1);

  let numberOne = getRandomInt(maxNumber);
  let numberTwo = getRandomInt(maxNumber);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let answer;
  let question;
  switch(signs[signKey]) {
    case "+":
    question = numberOne + " + " + numberTwo;
    answer = numberOne + numberTwo;
    break;
    case "-":
    if (numberOne < numberTwo) {
      question = numberTwo + ' - ' + numberOne;
      answer = numberTwo - numberOne;
    } else {
      question = numberOne + " - " + numberTwo;
      answer = numberOne - numberTwo;
    }
    break;
    case "*":
    numberOne = numberOne % 10 + 1;
    numberTwo = numberTwo % 10 + 1;
    question = numberOne + " * " + numberTwo;
    answer = numberOne * numberTwo;
    break;
    case "/":
    question = numberOne*numberTwo + " / " + numberTwo;
    answer = numberOne;
    break;
  }
  return {question, answer}
}
  
export default generateMathQuestion