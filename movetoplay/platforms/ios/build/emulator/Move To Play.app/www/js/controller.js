movetoplay.controller('ctrl', ['$scope', function($scope) {
	    // Données provisoire
	    var idGame = 1;
	    var path = "img/logo.png";
	    var qrValue = "ludo";

	    // Scanne du QR-Code
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
