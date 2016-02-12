movetoplay.controller('ctrl', ['$scope', '$interval', 'qrcodeFct', 'gameFct', 'dataFct', '$ionicPlatform', function($scope, $interval, qrcodeFct, gameFct, dataFct, $ionicPlatform) {
	   

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


		$ionicPlatform.ready(function() {
			window.plugins.NativeAudio.preloadSimple('sound', 'audio/pignon.mp3', function(msg) {
				alert("cool");
			    }, function(msg) {
				alert(msg);
			    });
			setTimeout(function() {
			window.plugins.NativeAudio.play('sound', function() {
				alert("Lecture");
			    }, function(msg) {
				alert(msg);
			    });
			    }, 2000);
		    });

	}]);
