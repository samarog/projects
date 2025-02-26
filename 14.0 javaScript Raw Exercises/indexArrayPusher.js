// Exercício de indexadores: 

 // 0 - Criar um novo array (array é um objeto) a partir de outro, selecionando só 5 indexes, mas sem contar com o primeiro (lembrar que os arrays começam sempre no zero). Daí o for loop: i = 1; i <= 5

 // 1 - Criar um array vazio: let carsUpdated = [] (os parênteses retos definem que é array, senão era variável normal)
 // 2 - Quero fazer copiar os items do cars para o carsUpdated, por isso uso o método carsUpdated.push() (push é um método para array): carsUpdated.push(cars[i]). Para selecionar os index que quero uso o 'cars[i]' em que cars[] é o array de origem e 'i' é a posição no index (começa no 0 e vai até ao número total de elementos no array). É como uma etiqueta para cada item e uma forma de ir procurar a posição pretendida. Por exemplo, se quisesse um Lexus, seria cars[2].
 // 3 - cada carsUpdated.push(cars[i]) acrescenta um valor a um novo index, mas para facilitar faço um loop até i = 5
 // Nota final: index e elementos são coisas diferentes: neste caso por exemplo, o array cars tem 6 elementos, ou seja cars.length = 6, mas o index de Porsche é 5.


const cars = ["AUDI","BMW","LEXUS","VOLKSWAGEN","FERRARI","PORSCHE"]

let carsUpdated = [];
for (let i = 1; i <= 5; i++) {
  carsUpdated.push(cars[i]);
}

console.log(carsUpdated);
console.log(carsUpdated[2]);