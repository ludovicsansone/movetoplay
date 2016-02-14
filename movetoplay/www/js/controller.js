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

	var createBeacon = function() {

	    var uuid = "19841986-1992-1995-2016-423323332442"; // mandatory
	    var identifier = 'Move To Play'; // mandatory
	    var minor = 1; // optional, defaults to wildcard if left empty
	    var major = 8128; // optional, defaults to wildcard if left empty

	    // throws an error if the parameters are not valid
	    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
	    return beaconRegion;   
	}

	$scope.scanBeacons = function() {
		var region = createBeacon();
		for (item in region)
			alert(item);
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
