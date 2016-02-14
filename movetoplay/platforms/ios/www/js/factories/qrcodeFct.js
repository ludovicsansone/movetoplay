movetoplay.factory('qrcodeFct', function($interval, $translate, gameFct, dataFct, audioFct) {
	return {
		'scanner': function() {
			cordova.plugins.barcodeScanner.scan(function(res) {
				if (res.text)
				{
					if (res.text == dataFct.qrValue)
					{
						$interval.cancel(gameFct.timer);
						if (dataFct.isLost == 0)
						audioFct.playSound('claps');
						dataFct.title = "MTP_TITLE_WIN";
						dataFct.instruction = "MTP_INSTRUCTION_WIN";
						dataFct.scanIsActive = false;
						dataFct.imgDisplay = 100;
						dataFct.imgUrl="img/Yes.png";
						dataFct.isClickable = 1;
						if (gameFct.nbLoop < 8)
							gameFct.nbLoop += 2;
					}
					else
					{
						$interval.cancel(gameFct.timer);
						if (dataFct.isLost == 0)
						audioFct.playSound('defaite_qrcode');
						dataFct.title = "MTP_TITLE_LOSE_BADQRC";
						dataFct.instruction = "MTP_INSTRUCTION_LOSE_BADQRC";
						dataFct.imgDisplay = 100;
						dataFct.scanIsActive = false;
						dataFct.imgUrl="img/No.png";
						dataFct.isClickable = 1;
					}
				}
				else
				{ 
					$translate('MTP_ALERT_INVALIDQRC').then(function(res) {
			    		alert(res);
			    	})
				}
			}, function(res) {
				alert("Erreur");
			});
		}
	}
});