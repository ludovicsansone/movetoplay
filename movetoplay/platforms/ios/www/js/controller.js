movetoplay.controller('ctrl', ['$scope', 'dataSrv', function($scope, dataSrv) {
	    // Données de jeu
	    var id = 1;
	    var imgUrl = "img/logo.png";
	    var qrValue = "ludo";

	    // Données de joueur
	    var level = 1;

	    // Données de session
	    var nbParti = 0;
	    $scope.title = "";
	    $scope.imgUrl = "";
	    $scope.instruction = "";
	    $scope.buttonState = "";


	    // Initialisation des variables du scope
	    dataSrv.init($scope.title, $scope.imgUrl, $scope.instruction, $scope.buttonState);

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
