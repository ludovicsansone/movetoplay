movetoplay.controller('ctrl', ['$scope', '$interval', 'dataSrv', function($scope, $interval, dataSrv) {
	    // Données de jeu
	    var nbLoop = 4;
	    var isClickable = 1;
	    var isVictory = 0;
	    var index = 1;
	    var timer;

	   	// Initialisation des variables du scope
	 	$scope.params={};

	    var id = 1;
	    var qrValue = "ludo";
   		
   		$scope.params = dataSrv.init();

	    // Données de session
	    var nbParti = 0;

	    // Début de partie
	    $scope.startGame = function() {
	    	if (isClickable == 1)
	    	{
		    	$scope.params.imgUrl = "img/logo.png";
		    	$scope.params.scanIsActive = true;
		    	$scope.params.imgDisplay = 100 / nbLoop;
		    	var index = 0;
		    	$scope.params.title = "Trouvez l'image mystère autour de vous";
				$scope.params.instruction = "Déplacez-vous et scanner le QR-Code pour savoir si vous avez gagné";
				isClickable = 0;
				index += 1;
		    	timer = $interval(function() {	
		    		if (index == nbLoop - 1)
		    		{
		    			$scope.params.title = "Merci d'avoir participé!";
		    			$scope.params.instruction = "Pour réessayer cliquez sur l’image.";
		    			$scope.params.scanIsActive = false;
		    			isClickable = 1;
		    		}
		    		else
		    		{
		    			$scope.params.title = "Allez, on vous aide!";
		    			$scope.params.instruction = "Vous avez trouvé ? Scannez le QR-Code pour savoir si vous avez gagné";
		    		}
		    		$scope.params.imgDisplay += (100 / nbLoop);
		    		index++;
		    	}, 5000, nbLoop - 1);
	    	}
	    };

	    // Scan du QR-Code
	    $scope.scanner = function() {
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
					else 
					{
						$interval.cancel(timer);
				    	$scope.params.title = "Désolé, ce n'est pas la bonne image. Perdu!";
				    	$scope.params.instruction = "Pour réessayer cliquez sur l’image.";
		    			$scope.params.imgDisplay = 100;
		    			$scope.params.scanIsActive = false;
		    			isClickable = 1;
					}
				}
				else
				    alert("Oups, QR-Code non reconnu. Veuillez rééssayer");
			    }, function(res) {
				alert("Erreur");
			});
	    };
	}]);
