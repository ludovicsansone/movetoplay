movetoplay.factory('gameFct', function(dataFct, $interval, $translate, audioFct) {
	return {
		'nbLoop': 4,
		'timer': {},
		'startGame': function() {
			if (dataFct.isClickable == 1)
			{
				var index = 0;
				dataFct.imgUrl = "img/logo.png";
				dataFct.scanIsActive = true;
				dataFct.imgDisplay = 100 / this.nbLoop;
				dataFct.title ='MTP_TITLE_THROUGH';
				dataFct.instruction = 'MTP_INSTRUCTION_THROUGH';
				dataFct.isClickable = 0;
				index += 1;
				var nbLoop = this.nbLoop;
				dataFct.isLost = 0;
				this.timer = $interval(function() {
					audioFct.playSound('change');
					if (index == nbLoop - 1)
					{
					    audioFct.playSound('defaite_temps');
					    dataFct.isLost = 1;
						dataFct.title = "MTP_TITLE_LOSE_TIMEOUT";
						dataFct.instruction = "MTP_INSTRUCTION_LOSE_TIMEOUT";
						dataFct.scanIsActive = false;
						dataFct.imgDisplay = 100;
						dataFct.imgUrl="img/smiley-triste.png";
						dataFct.isClickable = 1;
					}
					else
					{
						dataFct.title = 'MTP_TITLE_THROUGH_BIS';
						dataFct.instruction = 'MTP_INSTRUCTION_THROUGH_BIS';
						dataFct.imgDisplay += (100 / nbLoop);
						index += 1;
					}
				}, 30000, nbLoop - 1);
				dataFct.isClickable = isClickable;
			}
		}
	};
});