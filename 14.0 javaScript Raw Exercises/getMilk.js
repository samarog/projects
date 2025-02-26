// Vanilla function
// Função per se. Não pede input, executa apenas o código que está lá dentro.

function getMilk() {
  console.log("Leave house.")
  console.log("Go to store.")
  console.log("Buy bottles of milk.")
  console.log("Get back to house.")
  console.log("Give milk.")
}

getMilk()

// Chocolate function
// Usar um nome como argumento [usar como argumento é o input que está dentro dos parênteses em getMilk()] dentro de uma função define automaticamente a variável.
// Neste caso, não é necessário definir a variável bottles. Ela define-se sozinha.

function getMilk(bottles) {
  console.log("Leave house.")
  console.log("Go to store.")
  console.log("Buy " + bottles + " bottles of milk.") // Expected outcome: "Buy 2 bottles of milk."
  console.log("Get back to house.")
  console.log("Give milk.")
}

getMilk(2)

// Mas se quisermos complexificar, aí sim temos de definir as regras da variável.
// Por exemplo, se quiséssemos saber o preço.

function getMilk(bottles) {
  var cost = bottles * 1.5
    
    console.log("Leave house.")
    console.log("Go to store.")
    console.log("Buy " + bottles + " bottles of milk.") // Expected outcome: "Buy 2 bottles of milk."
    console.log("The clerk says: You owe me $" + cost + ", you wanker!" ) // Expected outcome: "The clerk says: You owe me $3, you wanker!"
    console.log("Get back to house.")
    console.log("Give milk.")
  }

  getMilk(2)

  
// Agora supunhamos que queremos saber 'com quantos paus se faz a canoa', ou seja, quantas garrafas de leite se compram com x dinheiro?

function getMilk(money) {
  var bottles = Math.floor(money / 1.5)
  var change = money - (bottles * 1.5)

    console.log("Leave house.")
    console.log("Go to store.")
    console.log("Buy " + bottles + " bottles of milk.") // Expected outcome: "Buy 2 bottles of milk."
    console.log("Here's your $" + change + "change, ye wanker!")
    console.log("Get back to house.")
    console.log("Give milk.")
  }

  getMilk(2)

  // Strawberry. Agora com modulo.

  
function getMilk(money) {
  var bottles = Math.floor(money / 1.5)
  var change = money % 1.5

    console.log("Leave house.")
    console.log("Go to store.")
    console.log("Buy " + bottles + " bottles of milk.") // Expected outcome: "Buy 2 bottles of milk."
    console.log("Here's your $" + change + " change, ye wanker!")
    console.log("Get back to house.")
    console.log("Give milk.")

    return change
  }

  getMilk(2) 

  // OR

  function getMilk(money) {
    var bottles = Math.floor(money / 1.5)
  
      console.log("Leave house.")
      console.log("Go to store.")
      console.log("Buy " + bottles + " bottles of milk.") 
      console.log("Here's your $" +  money % 1.5 + " change, ye wanker!")
      console.log("Get back to house.")
      console.log("Give milk.")
  
    return money % 1.5
    }
  
   var change = getMilk(4);
   console.log(change);

   // OR com uma function dentro de uma função. Isto é um bom exemplo de uso dos returns. E limpa bastante o código da função.

   function getMilk(money) {
    console.log("Leave house.")
    console.log("Go to store.")
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk.") // Os argumentos 'money' e 1.5' substituem o 'startingMoney' e 'costPerBottle' por atribuição. Ou seja, o money passar a ser o valor do argumento startingMoney e o 1.5 passa aser o valor do argumento costPerBottle.
    console.log("Here's your $" + calcChange(money, 1.5) + " change, ye wanker!") // Os argumentos 'money' e 1.5' substituem o 'startingMoney' e 'costPerBottle' por atribuição.
    console.log("Get back to house.")
    console.log("Give milk.")
    console.log("Hello master, here's your $" + calcChange(money, 1.5) + " of change.")

    return calcChange(money, 1.5) // Se quisermos que o return desta função exista e seja o troco.
  }

  getMilk(4); 

function calcBottles (startingMoney, costPerBottle) {
  let numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles
}

function calcChange (startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle
  return change
}

// Super Strawberry version:

function getMilk(money, pvp) {
  console.log("Leave house.")
  console.log("Go to store.")
  console.log("Buy " + calcBottles(money, pvp) + " bottles of milk.") // Os argumentos 'money' e 1.5' substituem o 'startingMoney' e 'costPerBottle' por atribuição. Ou seja, o money passar a ser o valor do argumento startingMoney e o 1.5 passa aser o valor do argumento costPerBottle.
  console.log("Here's your $" + calcChange(money, pvp) + " change, ye wanker!") // Os argumentos 'money' e 1.5' substituem o 'startingMoney' e 'costPerBottle' por atribuição.
  console.log("Get back to house.")
  console.log("Give milk.")

  return calcChange(money, pvp) // Se quisermos que o return desta função exista e seja o troco.
}

function calcBottles (startingMoney, costPerBottle) {
let numberOfBottles = Math.floor(startingMoney / costPerBottle);
return numberOfBottles
}

function calcChange (startingAmount, costPerBottle) {
var change = startingAmount % costPerBottle
return change
}

  console.log("Hello master, here's your $" + getMilk(13, 4.50) + " of change.")

// Acrescentei o argumento pvp e assim escuso de mudar sempre o preço por bottle dentro da função.