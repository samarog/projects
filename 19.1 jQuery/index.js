$('h1').css('display', 'none')
$('h1').fadeIn().css('display', 'flex')
$(document).ready(function () {
  setTimeout(() => {
    $('h3.subtitle').fadeIn().css('display', 'flex')
  }, 250);
  setTimeout(() => {
    $('img').fadeIn().css('display', 'block')
  }, 600);
  setTimeout(() => {
    $('.start').fadeIn().css('display', 'flex')
  }, 1000);
})
$('h1.title').css('font-size', "3rem")
$('h1.title').addClass('big-title')
console.log($('h1.title').hasClass('big-title'))
$('h1').html('<span class="boxtitle"> Hello <br> Worlds! </span>')
$('img').attr('src', './hello.png') // o primeiro param seleciona a key, o segundo input define o value dessa key
$('button').css({
    'display': 'inline',
    'opacity': '0',
    'transform': 'translateX(-35px)',
    'transition': 'opacity 2s ease, transform 1s ease-in-out',
})
$('img').before("<button class='toggle'></button>")

// aqui ficam os eventListeners:
$('button').click(function(){
  let currentColor = $('h1').css('color')
  if (currentColor === 'rgb(248, 224, 224)') {
    currentColor = $('h1').css('color', 'rgb(231, 230, 127)')
  } else {
    currentColor = $('h1').css('color', 'rgb(248, 224, 224)')
  }
})

$('img').click(function () {
  $('button').not('.toggle').css({ // .not('.toggle'), para isentar um elemento específico do comportamento
    'display': 'inline',
    'opacity': '1',
    'transform': 'translateX(0px)',
    'transition': 'opacity 2s ease, transform 1s ease-in-out',
  })
  $('img').css({
    'opacity': '0.5',
    'transition': 'opacity 0.5s ease',
    'filter': 'blur(5px)'
  })
  $('img:hover').css('cursor', 'auto')
})

$('.toggle').click(function(){
  let bg = $('body').css('background-image');
  if (bg.includes('dark.png')) {
    $('body').css('background-image', 'url(./light.png)');
    $('h3').css('color', 'hsl(191, 27%, 24%)');
if ($('img').attr('src').includes('darkhello.png')) {
      $('img').attr('src', './hello.png').css('border', '0')
}
    $('button').not('.toggle').css({
      'color': 'rgb(38, 56, 8)',
      'border': '1px solid rgb(38, 56, 8)'
    });
    $('footer').css('color', 'black');
    $('h2').css('color', 'black');

    $('button').not('.toggle').off('mouseenter mouseleave').hover(
      function() {
        $(this).css('background-color', 'aquamarine');
      },
      function() {
        $(this).css('background-color', '');
      }
    );
  } else {
    $('body').css('background-image', 'url(./dark.png)');
    $('h3').css('color', 'wheat');
   if ($('img').attr('src').includes('hello.png')) {
     $('img').attr('src', './darkhello.png').css('border', '1px solid azure')
   } 
    $('button').not('.toggle').css({
      'color': 'azure',
      'border': '1px solid azure'
    });
    $('footer').css('color', 'wheat');
    $('h2').css('color', 'tan');

    $('button').not('.toggle').off('mouseenter mouseleave').hover(
      function() {
        $(this).css('background-color', 'brown');
      },
      function() {
        $(this).css('background-color', '');
      }
    );
  }
});

// rain button
$('.rain').click(function() {
  $('img').css({
    'opacity': '1',
    'transform': 'rotateX(20deg) rotateY(200deg)',
    'transition': 'opacity 2s ease, transform 1s ease-in-out',
    'filter': 'blur(0px)'
  })
  $('img').attr('src', './rain.png')
  $('img').addClass('resized')
  $('h2').text('Rain Forest').css('font-family', 'Amarante').css('color', 'forestgreen')
})
// neno button
$('.neon').click(function() {
    $('img').css({
    'opacity': '1',
    'transform': 'translateX(80px) translateX(0px) rotateX(10deg) rotateY(-1deg) rotateZ(1deg)',
    'transition': 'opacity 2s ease, transform 1s ease-in-out',
    'filter': 'blur(0px)'
  })
  $('img').css('opacity', '1')
  $('img').attr('src', './neon.png')
  $('img').addClass('resized')
  $('h2').text('Orbitron District').css('font-family', 'Orbitron').css('color', 'purple')
})
// zarx button
$('.zarx').click(function() {
      $('img').css({
    'opacity': '1',
    'transform': 'rotateX(180deg) rotateY(-720deg) rotateZ(180deg)',
    'transition': 'opacity 2s ease, transform 3s ease-in-out',
    'filter': 'blur(0px)'
  })
  $('img').css('opacity', '1')
  $('img').attr('src', './zarx.png')
  $('img').addClass('resized')
  $('h2').text('ZORG').css('font-family', "Codystar").css('color', 'blue')
})
// west button
$('.west').click(function() {
      $('img').css({
    'opacity': '1',
    'transform': 'translateX(0px)',
    'transition': 'opacity 2s ease, transform 5s ease-in-out',
    'filter': 'blur(0px)'
  })
  $('img').css('opacity', '1')
  $('img').attr('src', './west.png')
  $('img').addClass('resized')
  $('h2').text('Yellowcreek').css('font-family', 'Savate').css('color', 'darkgoldenrod')
})
// punk button
$('.punk').click(function() {
      $('img').css({
    'opacity': '1',
    'transform': 'rotateX(20deg) rotateY(20deg)',
    'transition': 'opacity 2s ease, transform 1s ease-in-out',
    'filter': 'blur(0px)'
  })
  $('img').css('opacity', '1')
  $('img').attr('src', './punk.png')
  $('img').addClass('resized')
  $('h2').text('B l a c k f i r e F o r g e').css("font-family", 'Cherish').css('color', 'black')
})

// $(document).keydown(function(event) {
//   $('h1').text(event.key)
// })

$('.boxtitle').on('mouseover', function () {
  $('.boxtitle').css('color', 'brown').css({
    'cursor': 'crosshair',
    'text-shadow': '5px 5px #558abb'
  });
  
})

$('.boxtitle').on('mouseout', function() {
  $('.boxtitle').css('color', 'azure');
})


// métodos que alteram o conteúdo do HTML
//before()
//after()
//prepend()
//append()