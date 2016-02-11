movetoplay.service('dataSrv', function() {
	var dataSrv = this;

	dataSrv.init = function() {
	    var params = {};
	    params.title = "Trouvez l'image mystère autour de vous";
	    params.imgUrl = "img/default.png";
	    params.imgDisplay = 100;
	    params.instruction = "Cliquez sur l'image pour commencer le jeu";
	    params.scanIsActive = false;
	    return params;
	};
});

/* tant que le compteur n'atteint pas le nombre de loops
	Si c'est le premier loop, afficher le bon titre et la bonne instruction
	Si c'est un loop entre le deuxiè */
