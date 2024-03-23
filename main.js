const showHelloWorld = () => {
  alert('Hello World');
};

const calculate = ({ numberOne, numberTwo, formula, text }) => {
  const result = formula(numberOne, numberTwo);

  console.log(
    `O resultado da ${text} de ${numberOne} e ${numberTwo} é: ${result}.`
  );
};

const checkValue = ({ condition, text }) => {
  const result = condition ? `É um ${text}.` : `Não é um ${text}.`;

  console.log(result);
};

const main = () => {
  showHelloWorld();
  calculate({
    numberOne: 15,
    numberTwo: 27,
    formula: (a, b) => a + b,
    text: 'soma',
  });
  checkValue({ condition: typeof '10' === 'number', text: 'número' });
  checkValue({ condition: typeof 10 === 'number', text: 'número' });
  checkValue({ condition: typeof true === 'string', text: 'string' });
  checkValue({ condition: typeof 'hi' === 'string', text: 'string' });
  checkValue({ condition: typeof 'true' === 'boolean', text: 'booleano' });
  checkValue({ condition: typeof true === 'boolean', text: 'booleano' });
  calculate({
    numberOne: 15,
    numberTwo: 27,
    formula: (a, b) => a - b,
    text: 'subtração',
  });
  calculate({
    numberOne: 15,
    numberTwo: 27,
    formula: (a, b) => a * b,
    text: 'multiplicação',
  });
  calculate({
    numberOne: 15,
    numberTwo: 27,
    formula: (a, b) => a / b,
    text: 'divisão',
  });
  checkValue({ condition: 11 % 2 === 0, text: 'número par' });
  checkValue({ condition: 10 % 2 === 0, text: 'número par' });
  checkValue({ condition: 10 % 2 === 1, text: 'número ímpar' });
  checkValue({ condition: 11 % 2 === 1, text: 'número ímpar' });
};

main();
