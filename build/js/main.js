'use strict';

var blur = function () {
	return {
		set: function set() {
			var imgWidth = $('.auth').width();
			console.log(imgWidth);
			$('.blur').css('background-size', imgWidth + 'px');
		}
	};
}();

window.onresize = function () {
	blur.set();
};
window.onload = function () {
	blur.set();
};
//# sourceMappingURL=main.js.map
