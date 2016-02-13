movetoplay.factory('audioFct', function($ionicPlatform) {
	return {
	    'loadSound': function(id, path) {
		setTimeout(function() {
		    $ionicPlatform.ready(function() {
			    window.plugins.NativeAudio.preloadSimple(id, path, function() {
				}, function(msg) {
				    alert(msg);
				});
			}); // Fin de $ionicPlatform.ready
		    }, 500); // Fin de setTimeout
	    }, // fin de preloadSound
		'playSound': function(id) {
		setTimeout(function() {
			$ionicPlatform.ready(function() {
			window.plugins.NativeAudio.play(id);
			    }); // fin de $ionicPlatform.ready
		    }, 200); // fin de setTimeout
	    } // Fin de playSound
	} // fin d'objet
    });
