// ==============================
// Preconfiguração de Hi-Score
// ==============================
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

// ==============================
// Variáveis globais de jogo
// ==============================
const colors = ['green', 'red', 'yellow', 'blue'];
let level = 0;
let started = false;
let sequenceCPU = [];
let sequencePlayer = [];

const sfxGameOver = new Audio('./sounds/game-over.mp3');
sfxGameOver.volume = 0.5;

// ==============================
// DOM Ready: inicia eventos
// ==============================
$(document).ready(function () {
  console.log('hello!');
  $(".btn").prop("disabled", true);
  $(".hiscore").text(`Press S to Start Game`);

  // Início do jogo ao pressionar "S"
  $(document).keypress(function (event) {
    if (!started && (event.key === 's' || event.key === 'S')) {
      started = true;
      $('body').removeClass('game-over');
      document.querySelector('.container').classList.add('rotate');
      $(".hiscore").text(`Hi-Score: ${hiscore}`);
      new Audio('./sounds/game-start.mp3').play();

      setTimeout(() => {
        $('#level-title').text('Game on!');
      }, 100);

      setTimeout(() => {
        $('#level-title').text('Level:' + level);
      }, 1000);

      nextSequence();
      CPUMove();
    }
  });

  // Click do jogador em botão
  $('.btn').on('click', function () {
    const corClicada = this.classList[1];
    playerMove(corClicada);
  });
});

// ==============================
// Suporte a teclado (setas)
// ==============================
document.addEventListener('keydown', function (event) {
  if (!started) return;
  keyboardGame(event.key);
});

function keyboardGame(key) {
  switch (key) {
    case 'ArrowUp':
      playerMove('green');
      break;
    case 'ArrowRight':
      playerMove('red');
      break;
    case 'ArrowDown':
      playerMove('blue');
      break;
    case 'ArrowLeft':
      playerMove('yellow');
      break;
    default:
      return;
  }
}

// ==============================
// Funções do jogo
// ==============================

function playerMove(corClicada) {
  sequencePlayer.push(corClicada);
  clickedButton(document.getElementById(corClicada));

  const lastIndex = sequencePlayer.length - 1;

  if (sequencePlayer[lastIndex] !== sequenceCPU[lastIndex]) {
    gameOver();
    return;
  }

  if (sequencePlayer.length === sequenceCPU.length) {
    new Audio('./sounds/tada.mp3').play();
    setTimeout(() => {
      nextSequence();
      CPUMove();
    }, 1000);
  }
}

function resetGame() {
  sequenceCPU = [];
  sequencePlayer = [];
  level = 0;
  started = false;
}

function gameOver() {
  document.querySelector('.container').classList.add('rotate-gameover');
  document.querySelectorAll('.btn').forEach((i) => {
    i.classList.add('rotate-more');
  });
  sfxGameOver.currentTime = 0;
  sfxGameOver.play();
  $('#level-title').text('Game over!');
  $('body').addClass('game-over');
  $(".btn").prop("disabled", true);
  resetGame();
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function nextSequence() {
  level++;
  $('#level-title').text('Level:' + level);
  score(level);
  sequencePlayer = [];
}

function CPUMove() {
  $(".btn").prop("disabled", true);
  const interval = 1000;
  sortearCor();
  sequenceCPU.forEach((cor, idx) => {
    setTimeout(() => {
      animatePad(cor);
    }, (idx + 1) * interval);
  });
  setTimeout(() => {
    $(".btn").prop("disabled", false);
  }, (sequenceCPU.length + 1) * interval);
}

function sortearCor() {
  const numIndex = Math.floor(Math.random() * 4);
  const corEscolhida = colors[numIndex];
  sequenceCPU.push(corEscolhida);
  return corEscolhida;
}

function clickedButton(btn) {
  $(btn).addClass('pressed');
  setTimeout(() => {
    $(btn).removeClass('pressed');
  }, 200);
}

function animatePad(cor) {
  const btn = document.getElementById(cor);
  $(btn).addClass('pressed');
  setTimeout(() => {
    $(btn).removeClass('pressed');
  }, 200);

  const sfx = new Audio(`./sounds/${cor}.mp3`);
  sfx.currentTime = 0;
  sfx.play();
  console.log(cor + '!');
}

function score(level) {
  if (level > hiscore) {
    hiscore = level;
    localStorage.setItem('hiscore', JSON.stringify(hiscore));
    $('.hiscore').text(`Hi-Score: ${hiscore}`);
  }
}
