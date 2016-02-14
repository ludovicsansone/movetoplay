movetoplay.controller('ctrl', ['$scope', '$interval', '$translate', 'qrcodeFct', 'gameFct', 'dataFct', 'audioFct', function($scope, $interval, $translate, qrcodeFct, gameFct, dataFct, audioFct) {
	   
	    //Instanciation des factories
	    $scope.qrcodeFct = qrcodeFct;
	    $scope.gameFct = gameFct;
	    $scope.dataFct = dataFct;
	    $scope.audioFct = audioFct;


	   	// Déroulement du jeu
	    $scope.startGame = function() {
	    	$scope.gameFct.startGame();
	    };



	    $scope.scanBeacons = function() {
		    var proximityUUID= "19841986-1992-1995-2016-423323332442";
	    	var identifier = "Move To Play";
	    	var minor = 1;
	    	var major = 8128;			   
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
