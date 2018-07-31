var clickli = (function () {
    var panel = $('.menu_panel');
  
   
  
    var setPercents = function (current) {
      panel.toArray().forEach(function (elem,i) {
        $(elem).css('background','#455a64');
        $(elem).css('border','none');
        console.log(i);
      });

      $(event.target).css('background','#3b4c54');
      $(event.target).css('border-left','3px solid #ff5252');
    }
  
    var loadImages = function (panels) {
  
     
  
      panels.on('click', function () {
        console.log(event);
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