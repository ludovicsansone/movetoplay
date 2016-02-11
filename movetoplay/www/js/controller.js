movetoplay.controller('ctrl', ['$scope', '$interval', 'dataSrv', function($scope, $interval, dataSrv) {
	    // Données de jeu
	    var nbLoop = 4;
	    var isClickable = 0;
	    var isVictory = 0;

	   	// Initialisation des variables du scope
	 	$scope.params={};

	    var id = 1;
	    var qrValue = "ludo";
   		
   		$scope.params = dataSrv.init();

	    // Données de session
	    var nbParti = 0;

	    // Début de partie
	    $scope.startGame = function() {
	    	if (isClickable == 0)
	    	{
	    		isClickable = 1;
	    		var index = 1;
	    		isVictory = 0;
	    		$scope.scanIsActive = true;
		    	$scope.params.imgUrl = "img/logo.png";
		    	$scope.params.title = "Trouvez l'image mystère autour de vous";
				$scope.params.instruction = "Déplacez-vous et scannez le QR code pour savoir si vous avez gagné";
				$scope.params.imgDisplay = 100 / nbLoop;
					$interval(function() {
						$scope.params.imgDisplay += 100 / nbLoop;
						index += 1;
						if (isVictory == 1)
						{
							$interval.cancel();
						}
						if (index > 1 && index < nbLoop)
						{
							$scope.params.title = "Allez, on vous aide, l'image mystère se dévoile un peu";
							$scope.params.instruction = "Vous avez trouvé ? Scannez le QR-Code pour savoir si vous avez gagné"
						}
						if (index == nbLoop)
						{
							$scope.params.title = "Merci d'avoir participé. Voulez-vous rejouer?";
							$scope.params.instruction = "Pour rééssayer, cliquez sur l'image";
							$scope.scanIsActive = false;
							isClickable = 0;
						}
					}, 100000 / nbLoop, 100 / nbLoop); // 300000 pour 5 minutes
	    	}
	    };

	    // Scan du QR-Code
	    $scope.scanner = function() {
			cordova.plugins.barcodeScanner.scan(function(res) {
				if (res.text)
				{
					if (res.text == qrValue) 
					{
						$scope.params.title = "Félicitations! Vous avez gagné!";
						$scope.params.instruction = "Vous pouvez aller chercher votre cadeau ! Pour rejouer cliquez sur l’image";
						$scope.params.imgDisplay = 100;
						isVictory = 1;
						isClickable = 0;
						if (nbLoop < 8)
							nbLoop += 2;
					}
					else
				    	alert("Désolé, ce n'est pas la bonne image. Perdu!");
				}
				else
				    alert("Oups, QR-Code non reconnu. Veuillez rééssayer");
			    }, function(res) {
				alert("Erreur");
			});
	    };
	}]);
