movetoplay.service('dataSrv', function() {
	var dataSrv = this;

	dataSrv.init = function(title, imgUrl, instruction, buttonState) {
	    title = "Trouvez l'image mystère autour de vous";
	    imgUrl = "img/logo.png";
	    instruction = "Cliquez sur l'image pour commencer le jeu";
	    buttonState = "false";
	};
    });