/*----------------------------------------
    Avoid `console` errors in browsers that lack a console.
------------------------------------------*/
(function () {
    var method;
    var noop = function noop() {};
    var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var length = methods.length;
    var console = window.console = window.console || {};
    while (length--) {
        method = methods[length];
        if (!console[method]) console[method] = noop
    }
})();

$(document).ready(function () {

    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
          viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
          document.body.addEventListener('gesturestart', function () {
              viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
          }, false);
      }
  }

  //Check Mobile Devices
  var checkMobile = function(){
    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);
    //Check Device //All Touch Devices
    if ( isTouch ) {
        $('html').addClass('touch');
    }
    else {
        $('html').addClass('no-touch');
    };
  };
  //Execute Check
  checkMobile();

    /*----------------------------------------
        Placeholder
    ------------------------------------------*/

    $('input').focusin(function() {
        input = $(this);
        input.data('place-holder-text', input.attr('placeholder'))
        input.attr('placeholder', '');
    });

    $('input').focusout(function() {
        input = $(this);
        input.attr('placeholder', input.data('place-holder-text'));
    });

    // call links
    $(".no-touch .fnc-tel").click(function(){
        return false;
    });

    /*----------------------------------------
        Scrollers
    ------------------------------------------*/
    $('.btn-scroll').click(function(event) {
        event.preventDefault();
        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#' + trgt).offset(),
            target_top = target_offset.top;
        $('html, body').animate({
            scrollTop: target_top
        }, 800);
    });

     jQuery('.blog .right-off-canvas-toggle').click(function() {
      jQuery('.blog .off-canvas-wrap').addClass('move-left');
      return false;
    });

    jQuery('.blog .exit-off-canvas').click(function() {
      jQuery('.blog .off-canvas-wrap').removeClass('move-left');
      return false;
    });

    $("iframe").each(function(){
      $(this).parent('p').addClass('videoHolder');
    });

});

$(window).load(function(){
  $('.blog .tab-bar').css('display','block');
});