movetoplay.factory('qrcodeFct', function($interval, $ionicPlatform, gameFct, dataFct) {
	return {
		'scanner': function() {
			// alert("ok for scan");
			cordova.plugins.barcodeScanner.scan(function(res) {
				if (res.text)
				{
					if (res.text == dataFct.qrValue)
					{
						// $ionicPlatform.ready(function() {
							// $interval.cancel(gameFct.timer);
							dataFct.title = "Bravo, vous avez gagné!";
							dataFct.instruction = "Vous pouvez aller chercher votre cadeau ! Pour rejouer cliquez sur l’image";
							dataFct.scanIsActive = false;
							dataFct.imgDisplay = 100;
							dataFct.imgUrl = "img/Yes.png";
							dataFct.isClickable = 1;
							if (gameFct.nbLoop < 8)
								gameFct.nbLoop += 2;
								// window.plugins.NativeAudio.preloadSimple('sound', 'audio/victoire.mp3');
								// setTimeout(function() {
								// window.plugins.NativeAudio.play('sound');
								//     }, 100);
						// });
					}
					else
					{
						// $interval.cancel(gameFct.timer);
						dataFct.title = "Désolé, ce n'est pas la bonne image. Perdu!";
						dataFct.instruction = "Pour réessayer cliquez sur l’image.";
						dataFct.imgDisplay = 100;
						dataFct.scanIsActive = false;
						dataFct.imgUrl = "img/No.png";
						dataFct.isClickable = 1;
					}
				}
				else
					alert("QR-Code non reconnu. Veuillez réessayer");
				alert(res.cancelled);
			}, function(res) {
				alert("Erreur");
			});
		}
	}
});