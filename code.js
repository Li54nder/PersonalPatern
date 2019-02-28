
$(document).ready(function () {

  var viewportHeight = $('body').outerHeight();
  $('.box').css({ height: viewportHeight * 0.80 });

  $('.btnL').css({ height: viewportHeight * 0.10 });
  $('.btnR').css({ height: viewportHeight * 0.10 });

  // Sets viewScroller with sample events
  $('.mainbag').viewScroller({
    useScrollbar: false,
  });

  // // Sets start params for MENU
  // $('.mainbag').css({
  //     'left': '140px'
  // });

  // Sets viewScroller
  $('.mainbag').viewScroller({
    animSpeedMainView: 1200,
    animEffectMainViewCss3: 'cubic-bezier(.29,.01,.17,1.25)',
    useScrollbar: false,
    changeWhenAnim: false,
    viewsHeight: [2000, 2000, 2000],
  });

  //hide load screen
  function loading() {
    $('.load').fadeOut(800);
  }

  setTimeout(loading, 3500);

  setInterval(function () {
    if ($('.view-2').offset().top < 0) {
      $('.arrow').fadeOut('fast');
    } else {
      $('.arrow').fadeIn('slow');
    }
  }, 1000);

});
