// Starting point
// DOM objects

const numbers = document.querySelectorAll('.num')
const display = document.querySelector('[name=display]')
const operators = document.querySelectorAll('.opr')
const result = document.querySelector('.equal')

// Valor de abertura da calculadora

display.value = "0"

// constantes e variáveis

let n1 = ''
let n2 = ''
let operatorSymb = null
let operatorFunc = null


  // forma mais limpa de aceder aos operadores

const operations = { 
      '+': add, 
      '-': subtract, 
      '*': multiply, 
      '/': divide 
  }

console.log(Object.keys(operations))


// flags

let n1exists = false

// Event Listeners

numbers.forEach((i) => {
  i.addEventListener('click', handleClickNumbers)
})

operators.forEach((i) => {
  i.addEventListener('click', handleClickOperators)
})

result.addEventListener('click', handleClickEqual)

document.addEventListener('keydown', handleKeyPress)

// functions

function handleKeyPress(event) {
  const k = event.key;

  if (k === 'Delete') {
    display.value = '0';
    return;
  }

  if (k === 'Backspace') {
    display.value = display.value.slice(0, -1);
    if (display.value.length < 1) display.value = '0';
    return;
  }

  if (k === '.' && !display.value.includes('.')) {
    display.value += '.';
    return;
  }

  if (!isNaN(k)) {
    // é número
    if (n1exists) {
      display.value = k;
      n1exists = false;
    } else {
      display.value === '0' ? display.value = k : display.value += k;
    }
  } else if (Object.keys(operations).includes(k)) {
    // é operador
    operators.forEach(i => i.style.color = 'aliceblue');
    let buttonValue = k === '*' ? 'x' : k;
    let activeOp = Array.from(operators).find(i => i.value === buttonValue);
    if (activeOp) activeOp.style.color = 'orange';

    operatorSymb = k;
    operatorFunc = operations[operatorSymb];
    n1 = parseFloat(display.value);
    n1exists = true;
  } else if (k === 'Enter' || k === '=') {
    handleClickEqual();
  }

  // overflow check
  if (display.value.length > 9) {
    alert("Hey, I'm just a standard calculator. I don't do billions, mate.");
    display.value = display.value.slice(0, 9);
  }
}


function handleClickNumbers() {
  operators.forEach(i => i.style.color = 'aliceblue')
  if (n1exists === true) { // ou seja, n1exists é o mesmo que perguntar se já há um n1 em cache
    display.value = this.value // começa a registar o n2 a partir do início sem concatenar com o n1
    n1exists = false // killswitch da flag. só assim permite concatenar o segundo número
  } else {
    display.value === "0" ? display.value = this.value : // <--- só = se quiseres que só apareça um número
                            display.value += this.value // <--- += se quiseres que haja concatenação, pois adiciona o valor que já lá estava
  // console.log(display.value)
  }

  // overflow check
  if (display.value.length > 9) {
    alert("Hey, I'm just a standard calculator. I don't do billions, mate.")
    display.value = display.value.slice(0,9)
  }
}

function handleClickOperators() {
  // feedback visual dos operadores
  operators.forEach(i => i.style.color = 'aliceblue') // faz reset sempre que se escolhe um operador
  this.style.color = 'orange' // determina o operador ativo

  operatorSymb = this.value === 'x' ? '*' : this.value

  // operatorFunc = operatorSymb === '+' ? add :
  //                operatorSymb === '-' ? subtract :
  //                operatorSymb === '*' ? multiply : divide

  operatorFunc = operations[operatorSymb]

  n1 = parseFloat(display.value) // e não parseInt porque senão só retornava integrais
  n1exists = true
}

function handleClickEqual() {
    // faze reset às cores dos operadores
  operators.forEach(i => i.style.color = 'aliceblue')
    // edge case
  if (operatorFunc === null) {
    alert("Dude, please select an operator first!")
    return
  }

  // coemça aqui

  n2 = parseFloat(display.value)
  let resultado = operatorFunc(n1, n2)
  resultado = parseFloat(resultado.toFixed(5))
  display.value = resultado

  // preparar próx cálculo
  n1 = resultado
  n2 = ''
  operatorSymb = null
  operatorFunc = null
  n1exists = true
}

// Math functions
function add(n1, n2) {
  return n1 + n2
}

function subtract(n1, n2) {
  return n1 - n2
}

function multiply(n1, n2) {
  return n1 * n2
}

function divide(n1, n2) {
  if (n2 === 0) {
    alert("Can't divide by zero! That's how black holes are born.")
    return 0
  }
  return n1 / n2
}
