movetoplay.controller('ctrl', ['$scope', '$interval', 'qrcodeFct', 'gameFct', 'dataFct', 'audioFct', function($scope, $interval, qrcodeFct, gameFct, dataFct, audioFct) {
	   
	    //Instanciation des factories
	    $scope.qrcodeFct = qrcodeFct;
	    $scope.gameFct = gameFct;
	    $scope.dataFct = dataFct;
	    $scope.audioFct = audioFct;

	    // Déroulement du jeu
	    $scope.startGame = function() {
	    	$scope.gameFct.startGame();
	    };
	   
	   	// Scan et vérification du QR-Code
		$scope.scanner = function() {
			$scope.qrcodeFct.scanner();
		};

		$scope.audioFct.loadSound('claps', 'audio/claps.mp3');
		$scope.audioFct.loadSound('defaite_temps', 'audio/defaite_temps.mp3');
		$scope.audioFct.loadSound('defaite_qrcode', 'audio/defaite_qrcode.mp3');
		$scope.audioFct.loadSound('change', 'audio/change.mp3');
}]);
