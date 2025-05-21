// Código que deteta button press

let pads = document.querySelectorAll('.pad')


for (let i = 0; i < pads.length; i++) { // Usei for loop para ser mais rápido passar o addEventListener a todos os 16 pads, sem estar a acrescentar um a um. O i < pads.length também podia ser i <= 16. Mas é preferível .length porque estou a trabalhar com indexes.

pads[i].addEventListener('click', function () {
  console.log(this) // é como escrever console.log(pads[2]) ou console.log(pads[7]). O 'this' aqui é o próprio elemento do DOM que foi clicado, que depois é representado pelo índice i. O 'this' representa o elemento HTML do .pad que foi clicado.
  handleClick(this)
})

}

// função para lidar com os cliques do rato

function handleClick(button) {

    if (button.style.color !== 'rgb(236, 88, 0)') {
      button.style.color = 'rgb(236, 88, 0)'
    } else if (button.style.color === 'rgb(236, 88, 0)') {
      button.style.color = ''
    }

    let clickedButtonKey = button.textContent;

    console.log(clickedButtonKey)

    makeSound(clickedButtonKey)

};


// Detetar keyboard press

document.addEventListener('keydown', function (event) { // o event aqui é um argemtno necessário (podia ter outro nove, não tem que ser event) necessário porque tem a ver como funciona o kwyboard no browser. o event.key é um dos parâmetros do objeto que defines a mecânica de funcionamento do teclado
  const key = event.key.toUpperCase()
  makeSound(key)
  animatePad(key)
})

// mapa de som
const soundMap = {
  '1': new Audio('./sounds/kick.wav'),
  '2': new Audio('./sounds/snare.mp3'),
  '3': new Audio('./sounds/tom.mp3'),
  '4': new Audio('./sounds/crash.mp3'),
  'Q': new Audio('./sounds/lighta.wav'),
  'W': new Audio('./sounds/holdup.wav'),
  'E': new Audio('./sounds/pushup.wav'),
  'R': new Audio('./sounds/funky.wav'),
  'A': new Audio('./sounds/dragon1.wav'),
  'S': new Audio('./sounds/dragon2.wav'),
  'D': new Audio('./sounds/dragon3.wav'),
  'F': new Audio('./sounds/dragon4.wav'),
  'Z': new Audio('./sounds/baby1.wav'),
  'X': new Audio('./sounds/baby2.wav'),
  'C': new Audio('./sounds/baby3.wav'),
  'V': new Audio('./sounds/baby4.wav')
};

// função que atribui o som aos cliques/teclas
  function makeSound(input) {

  const soundFile = soundMap[input]; // Ignora se for maiúscula ou minúscula para funcionar sempre

  if (soundFile) {
    soundFile.currentTime = 0;
    soundFile.play();
  } else {
    console.log("Tecla não reconhecida:", input);
  }
}

// função animação teclas

function animatePad (key) {
  const pad = [...pads].find((i) => i.textContent.toUpperCase() === key)

  if (pad) {
    pad.classList.add('pressed');
    setTimeout(() => {
       pad.classList.remove('pressed');
    }, 100)
  }
}

// EXEMPLO DE COMO SERIA UMA ESTRUTURA DE CONTROLO FEITA COM SWITCH:

// switch (input) {
//   case "1":
//       const kick = new Audio('./sounds/kick-bass.mp3');
//       kick.play();

      // Como funciona o construtor Audio? Podemos adivinhar olhando para a estrutura do construtor:

      // Então temos -> new Audio('./sounds/kick-bass.mp3') ou seja o 'new' é para iniciar o construtor, o nome do constutor 'Audio' e entre (...) o parâmetro que o construtor pede, que neste caso é o URL para o ficheiro de som.

      // Algo do género (atenção que a primeira letra tem de estar capitalizada para ser construtor):
      // function Audio(soundURL) {
      // this.URL = soundURL (a localização do ficheiro de som)
      // this.play = function () {
      // - aqui deve ir à procura do ficheiro e carrega play
      // }
      // }
    
//     break;
  
//   case '2':
//       const snare = new Audio('./sounds/snare.mp3');
//       snare.play();

//     break; 

//   default:

// }