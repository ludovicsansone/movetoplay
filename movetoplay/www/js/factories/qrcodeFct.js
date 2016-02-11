movetoplay.factory('qrcodeFct', function($interval, gameFct, dataFct) {
	return {
		'scanner': function() {
			// alert("ok for scan");
			cordova.plugins.barcodeScanner.scan(function(res) {
				if (res.text)
				{
					if (res.text == dataFct.qrValue)
					{
						$interval.cancel(gameFct.timer);
						dataFct.title = "Bravo, vous avez gagné!";
						dataFct.instruction = "Vous pouvez aller chercher votre cadeau ! Pour rejouer cliquez sur l’image";
						dataFct.scanIsActive = false;
						dataFct.imgDisplay = 100;
						dataFct.isClickable = 1;
						if (gameFct.nbLoop < 8)
							gameFct.nbLoop += 2;
					}
					else
					{
						$interval.cancel(gameFct.timer);
						dataFct.title = "Désolé, ce n'est pas la bonne image. Perdu!";
						dataFct.instruction = "Pour réessayer cliquez sur l’image.";
						dataFct.imgDisplay = 100;
						dataFct.scanIsActive = false;
						dataFct.isClickable = 1;
					}
				}
				else
					alert("QR-Code non reconnu. Veuillez réessayer");
			}, function(res) {
				alert("Erreur");
			});
		}
	}
});