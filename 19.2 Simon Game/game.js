// preconfig
let hiscore = 0;
const savedScore = localStorage.getItem('hiscore');

if (savedScore && savedScore !== "undefined") {
  try {
    hiscore = JSON.parse(savedScore);
  } catch (e) {
    console.warn("Erro ao ler hiscore:", e);
    localStorage.removeItem('hiscore');
  }
}

$(document).ready(function() {
  console.log('hello!');
  $(".btn").prop("disabled", true);
  $(".hiscore").text(`Press S to Start Game`);
});

// variáveis de controlo globais
const colors = ['green', 'red', 'yellow', 'blue'];
let level = 0;
let started = false; // flag para impedir múltiplos inícios
let sequenceCPU = [];
let sequencePlayer = []

// const de som do gameover isolado, devido a bug
const sfxGameOver = new Audio('./sounds/game-over.mp3');
sfxGameOver.volume = 0.5;

// mecânica do jogo
$(document).keypress(function(event) {

if (!started && (event.key === 's' || event.key === 'S')) { // exemplo de uma variável de controlo
  started = true;
  $('body').removeClass('game-over');
  document.querySelector('.container').classList.add('rotate')
  $(".hiscore").text(`Hi-Score: ${hiscore}`);
  new Audio('./sounds/game-start.mp3').play();
  setTimeout(() => {
    $('#level-title').text('Game on!')}, 100);
  setTimeout(() => {
     $('#level-title').text('Level:' + level)
  }, 1000);

  // turno da máquina

  nextSequence();
  CPUMove();
  
 } 


// turno do jogador
  
$('.btn').on('click', function () {
  const corClicada = this.classList[1];       // ex: 'green'
  playerMove(corClicada)

  // 3) caso acerte mas ainda não esteja no fim do nível,
  //    simplesmente espera o próximo clique sem fazer nada
});


//jogar com keyboard

document.addEventListener('keydown', function(event) {
  if (!started) return; // guard clause - ISTO É IMPORTANTÍSSIMO!!! A USAR MAIS VEZES
  // Se chegou aqui, então o jogo já começou!
  console.log(event.key); // ou outras ações do jogo
  keyboardGame(event.key)
});

});
   
  // funções

  // função de reset game

  function resetGame() {
      sequenceCPU = [];
      sequencePlayer = [];
      level = 0;
      started = false
  }

  // lógica do gameover

function gameOver() {
  document.querySelector('.container').classList.add('rotate-gameover')
  document.querySelectorAll('.btn').forEach((i) => {
    i.classList.add('rotate-more')
  })
  sfxGameOver.play();
  sfxGameOver.currentTime = 0;
  $('#level-title').text('Game over!');
  $('body').addClass('game-over');
  $(".btn").prop("disabled", true);
  resetGame();
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

  // função de preparação da seq seguinte: CPU

  function nextSequence() {
    level++;
    $('#level-title').text('Level:' + level);
    score(level);
    sequencePlayer = [];
  }

  // função de turno: CPU
  
  
function CPUMove() {
  // 1. Bloqueia cliques do jogador
  $(".btn").prop("disabled", true);

  // 2. Define o intervalo entre cada cor
  const interval = 1000;

  let cor = sortearCor();
  // 3. Percorre toda a sequência de cores
  sequenceCPU.forEach((cor, idx) => {
    setTimeout(() => {
      animatePad(cor);
    }, (idx + 1) * interval);
  });

  // 4. Após terminar, reabilita os botões
  setTimeout(() => {
    $(".btn").prop("disabled", false);
  }, (sequenceCPU.length + 1) * interval);
}

  // função turno do jogador
function playerMove(corClicada) {
    sequencePlayer.push(corClicada);            // adiciona à array que regista o histórico do jogador
    clickedButton(document.getElementById(corClicada)); // animação do click
  
    const lastIndex = sequencePlayer.length - 1;
  
    // 1) checagem parcial: se errou, game over imediato
    if (sequencePlayer[lastIndex] !== sequenceCPU[lastIndex]) {
      gameOver();
      return;  
    }
  
    // 2) se acertou e já completou o nível, toca 'tada' e avança
    if (sequencePlayer.length === sequenceCPU.length) {
      new Audio('./sounds/tada.mp3').play();
  
      // dá um respiro antes de iniciar próxima rodada
      setTimeout(() => {
        nextSequence();  // incrementa level e limpa sequencePlayer
        CPUMove();       // toca sequência atualizada
      }, 1000);
    }
}

 // função de sortear número

  function sortearCor () {
   let numIndex = Math.floor(Math.random()*4)
   let corEscolhida = colors[numIndex]
   sequenceCPU.push(corEscolhida)
   return corEscolhida
  }

  // comparador de arrays-resposta - acabou por sair
  
  // function arrCompare (arr1, arr2) {
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) {
  //       return false
  //     }
  //   }
  //   return true
  // }

  // função de jogar com teclado

  function keyboardGame(key) {
    switch (key) {
      case 'ArrowUp':
          playerMove('green')
        break;
      case 'ArrowRight':
          playerMove('red')
        break;
      case 'ArrowDown':
          playerMove('blue')
        break;
      case 'ArrowLeft':
          playerMove('yellow')
        break;
      default:
        return
}

}
  
   //função de animação

function clickedButton(btn) {
        $(btn).addClass('pressed');
        setTimeout(() => {
           $(btn).removeClass('pressed');
        }, 200)
}

  function animatePad(cor) {
    // animate green
    if ($('#green').hasClass(cor)) {
      $('#green').addClass('pressed');
      setTimeout(() => {
         $('#green').removeClass('pressed');
      }, 200)
      const sfxGreen = new Audio('./sounds/green.mp3')
      sfxGreen.currentTime = 0
      sfxGreen.play()
      console.log('green!')
    }
  
    // animate red
    if ($('#red').hasClass(cor)) {
      $('#red').addClass('pressed');
      setTimeout(() => {
         $('#red').removeClass('pressed');
      }, 200)
      const sfxRed = new Audio('./sounds/red.mp3')
      sfxRed.play()
      console.log('red!')
    }
  
    if ($('#yellow').hasClass(cor)) {
      $('#yellow').addClass('pressed');
      setTimeout(() => {
         $('#yellow').removeClass('pressed');
      }, 200)
      const sfxYellow = new Audio('./sounds/yellow.mp3')
      sfxYellow.play()
      console.log('yellow!')
    }
  
    if ($('#blue').hasClass(cor)) {
      $('#blue').addClass('pressed');
      setTimeout(() => {
         $('#blue').removeClass('pressed');
      }, 200)
      const sfxBlue = new Audio('./sounds/blue.mp3')
      sfxBlue.play()
      console.log('blue!')
    }
  }



function score(level) {
  if (level > hiscore) {
    hiscore = level
    localStorage.setItem('hiscore', JSON.stringify(hiscore));
    $('.hiscore').text(`Hi-Score: ${hiscore}`);
  }
}

