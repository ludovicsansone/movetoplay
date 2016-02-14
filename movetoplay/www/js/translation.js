movetoplay.config(["$translateProvider", function($translateProvider) {
    $translateProvider.translations("fr-FR", {
  		"MTP_SCAN_QRCODE_BUTTON": "Scanner le QR Code",
    	'MTP_LOGO_ALT': 'Logo boutique',
  		"MTP_TITLE_INITIAL": "Trouvez l\'image mystère autour de vous!",
  		"MTP_INSTRUCTION_INITIAL": "Cliquez sur le point d\'interrogation pour commencer le jeu",
  		"MTP_TITLE_THROUGH": "Allez, on vous aide",
  		"MTP_INSTRUCTION_THROUGH": "Déplacez-vous et scannez le QR-Code pour savoir si vous avez gagné",
  		"MTP_INSTRUCTION_THROUGH_BIS": "Vous avez trouvé ? Scannez le QR-Code pour savoir si vous avez gagné",
  		"MTP_TITLE_WIN": "Bravo, vous avez gagné!",
  		"MTP_INSTRUCTION_WIN": "Vous pouvez aller chercher votre cadeau ! Pour rejouer cliquez sur l\’image",
  		"MTP_TITLE_LOSE_TIMEOUT": "Merci d'avoir participé!",
  		"MTP_INSTRUCTION_LOSE_TIMEOUT": "Pour réessayer cliquez sur l\’image.",
  		"MTP_TITLE_LOSE_BADQRC": "Désolé, ce n'est pas la bonne image. Perdu!",
  		"MTP_INSTRUCTION_LOSE_BADQRC": "Pour réessayer cliquez sur l\’image.",
  		"MTP_ALERT_INVALIDQRC": "QR-Code non reconnu. Veuillez réessayer."
    });
    $translateProvider.translations("en", {
    	"MTP_SCAN_QRCODE_BUTTON": "Scan QR-Code",
    	'MTP_LOGO_ALT': 'Brand logo',
    	"MTP_TITLE_INITIAL": "Find the mystery picture around you!",
    	"MTP_INSTRUCTION_INITIAL": "Click on the question mark to start the game!",
    	"MTP_TITLE_THROUGH": "OK then, we give you a little help",
    	"MTP_INSTRUCTION_THROUGH": "Move and scan QR Code to know if you have won",
    	"MTP_INSTRUCTION_THROUGH_BIS": "Did you find it? Scan QR-Code to know if you have won",
    	"MTP_TITLE_WIN": "Congratulations ! You won!",
    	"MTP_INSTRUCTION_WIN": "You can get your present! Click on picture to play again",
    	"MTP_TITLE_LOSE_TIMEOUT": "Thanks for playing!",
    	"MTP_INSTRUCTION_LOSE_TIMEOUT": "Click on the picture to retry",
    	"MTP_TITLE_LOSE_BADQRC": "Sorry, this is not the expected picture. You lost!",
    	"MTP_INSTRUCTION_LOSE_BADQRC": "Click on picture to retry",
    	"MTP_ALERT_INVALIDQRC": "Invalid QR Code. Please try again."
    });
    $translateProvider
    .uniformLanguageTag("bcp47")
    .determinePreferredLanguage();
    $translateProvider.fallbackLanguage("en");
}]);
