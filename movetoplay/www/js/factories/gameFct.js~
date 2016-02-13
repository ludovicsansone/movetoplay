movetoplay.factory('gameFct', function(dataFct, $interval) {
	return {
		'nbLoop': 4,
		'timer': {},
		'startGame': function() {
			if (dataFct.isClickable == 1)
			{
				var index = 0;
				dataFct.imgUrl = "img/logo.png";
				dataFct.scanIsActive = true;
				dataFct.imgDisplay = 100 / this.nbLoop;
				dataFct.title = "Trouvez l'image mystère autour de vous";
				dataFct.instruction = "Déplacez-vous et scanner le QR-Code pour savoir si vous avez gagné";
				dataFct.isClickable = 0;
				index += 1;
				var nbLoop = this.nbLoop;

				this.timer = $interval(function() {
					if (index == nbLoop - 1)
					{
						dataFct.title = "Merci d'avoir participé!";
						dataFct.instruction = "Pour réessayer cliquez sur l’image.";
						dataFct.scanIsActive = false;
						dataFct.imgDisplay = 100;
						dataFct.imgUrl="img/No.png";
						dataFct.isClickable = 1;
					}
					else
					{
						dataFct.title = "Allez, on vous aide!";
						dataFct.instruction = "Vous avez trouvé ? Scannez le QR-Code pour savoir si vous avez gagné";
						dataFct.imgDisplay += (100 / nbLoop);
						index += 1;
					}
				}, 3000, nbLoop - 1);
				dataFct.isClickable = isClickable;
			}
		}
	};
});