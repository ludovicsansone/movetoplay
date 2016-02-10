movetoplay.service('dataSrv', function() {
	var dataSrv = this;

	dataSrv.init = function(title, imgUrl, instruction, buttonState) {
	    setTimeout(function() {
	    alert("Coucou");
		}, 2000);

	    title = "Trouvez l'image mystère autour de vous";
	    imgUrl = "img/logo.png";
	    instruction = "Cliquez sur l'image pour commencer le jeu";
	    buttonState = "false";
	};
    });
