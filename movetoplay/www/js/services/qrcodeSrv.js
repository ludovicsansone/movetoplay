movetoplay.service('qrcodeSrv', function($interval, dataSrv) {

	var qrcodeSrv = this;

	qrcodeSrv.scan = function(qrValue) {
		cordova.plugins.barcodeScanner.scan(function(res) {
			if (res.text)
			{
				if (res.text == qrValue)
				{
					$interval.cancel(timer);
					$scope.params.title = "Bravo, vous avez gagné!";
					$scope.params.instruction = "Vous pouvez aller chercher votre cadeau ! Pour rejouer cliquez sur l’image";
					$scope.params.scanIsActive = false;
	    			$scope.params.imgDisplay = 100;
	    			isClickable = 1;
	    			if (nbLoop < 8)
	    				nbLoop += 2;
				}
			}
		})
	}
});