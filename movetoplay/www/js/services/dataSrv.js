movetoplay.service('dataSrv', function() {
	var dataSrv = this;

	dataSrv.init = function() {
	    var params = {};
	    params.title = "Trouvez l'image mystère autour de vous";
	    params.imgUrl = "img/logo.png";
	    params.instruction = "Cliquez sur l'image pour commencer le jeu";
	    params.buttonState = "false";
	    return params;
	};
});
