var clickli = (function () {
    var panel = $('.menu_panel');
  
   
  
    var setPercents = function (current) {
      panel.toArray().forEach(function (elem) {
        $(elem).css('background','#455a64');
        $(elem).css('border','none');
      });

      $(event.target).css('background','#3b4c54');
      $(event.target).css('border-left','3px solid #ff5252');
    }
  
    var loadImages = function (panels) {
  
     
  
      panels.on('click', function () {
        setPercents(event);
      });
    }
  
    return {
      init: function () {
        
  
        loadImages(panel);
      }
    }
  }());
  $(function () {
    clickli.init();
  });