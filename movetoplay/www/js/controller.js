movetoplay.controller('ctrl', ['$scope', '$interval', 'dataSrv', function($scope, $interval, dataSrv) {
	    // Données de jeu

	   	// Initialisation des variables du scope
	 	$scope.params={};

	    var id = 1;
	    // $scope.params.imgUrl = "img/default.png";
	    var qrValue = "ludo";
   		
   		$scope.params = dataSrv.init();

	    // Données de joueur
	    var level = 1;

	    // Données de session
	    var nbParti = 0;

	    // Début de partie
	    $scope.startGame = function() {
	    	$scope.scanIsActive = true;
	    	$scope.params.imgUrl = "img/logo.png";
			$scope.params.instruction = "Déplacez-vous et scannez le QR code pour savoir si vous avez gagné";
				$scope.params.imgDisplay = 25;
				$interval(function() {
					if ($scope.params.imgDisplay == 100)
					{
						alert("Merci d'avoir participé! Désirez-vous rejouer?")
					}
					else
						$scope.params.imgDisplay += 1;
				}, 300000 / 75, 76);
	  	};

	    // Scan du QR-Code
	    $scope.scanner = function() {
			cordova.plugins.barcodeScanner.scan(function(res) {
				if (res.text)
				{
					if (res.text == qrValue)
						alert("Félicitations! Vous avez gagné!");
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
