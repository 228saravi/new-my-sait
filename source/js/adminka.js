var clickli = (function () {
    var panels = $('.menu_panel');
    var _blocks = $('.block').toArray();
   
  
    var setPercents = function (event) {
      var _panels=panels.toArray();
      var blockNumber= _panels.indexOf(event.target);
      _blocks.forEach(function (elem,i) {
      
        i === blockNumber ? $(elem).css('display', 'block')
                          : $(elem).css('display', 'none')
        
      });
      _panels.forEach(function (elem,i) {
      
        $(elem).css('background','#455a64');
        $(elem).css('border','none');
        
      });
      console.log();
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
        
  
        loadImages(panels);
      }
    }
}());


  $(function () {
    clickli.init();
  });