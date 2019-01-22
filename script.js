$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.project-image', {
      duration   : 1500,
      distance   : '30px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.project-text', {
      duration   : 500,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();