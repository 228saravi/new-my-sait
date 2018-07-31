

  
var blur = (function () {
	return {
		set: function () {
			var imgWidth = $('.auth').width();
      console.log(imgWidth);
	    $('.blur').css('background-size', imgWidth+'px');
		}
	}
}());


window.onresize = function () {
	blur.set();
};
window.onload = function () {
	blur.set();
};