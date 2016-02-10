movetoplay.controller('ctrl', ['$scope', 'dataSrv', function($scope, dataSrv) {
	    // Données de jeu
	    var id = 1;
	    var imgUrl = "img/logo.png";
	    var qrValue = "ludo";

	    // Données de joueur
	    var level = 1;

	    // Données de session
	    var nbParti = 0;

	    // Initialisation des variables du scope
	    $scope.title = "Trouvez l'image mystère";
	    $scope.imgUrl = "img/logo.png";
	    $scope.instruction = "Cliquez sur l'image pour commencer à jouer";

	    // Début de partie
	    $scope.startGame = function() {
		$scope.instruction = "Déplacez-vous et scannez le QR code pour savoir si vous avez gagné";
		$scope.imgDisplay = 25;
	    };

	    // Scan du QR-Code
	    $scope.scanner = function() {
		cordova.plugins.barcodeScanner.scan(function(res) {
			if (res.text == qrValue)
			    alert("Bravo, un café offert chez Ludo");
			else
			    alert("Désolé, ce QR-Code n'est pas le bon");
		    }, function(res) {
			alert("Error");
		    });
	    };
	}]);
