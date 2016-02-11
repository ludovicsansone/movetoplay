movetoplay.controller('ctrl', ['$scope', '$interval', 'qrcodeFct', 'gameFct', 'dataFct', function($scope, $interval, qrcodeFct, gameFct, dataFct) {
	   
	    //Instanciation des factories
	    $scope.qrcodeFct = qrcodeFct;
	    $scope.gameFct = gameFct;
	    $scope.dataFct = dataFct;

	    // Déroulement du jeu
	    $scope.startGame = function() {
	    	$scope.gameFct.startGame();
	    };
	   
	   	// Scan et vérification du QR-Code
		$scope.scanner = function() {
			$scope.qrcodeFct.scanner();
		};
}]);
