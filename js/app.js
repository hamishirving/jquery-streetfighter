$(document).ready(function() {
	$(".intro").hide(0).delay(1000).fadeIn(1000);
	$(".keys").hide(0).delay(7000).fadeIn(1000);
	$(".ryu-ready").hide();
	doIntro();
	playGame();
});

var tatsumaki = false;
function doTatsumaki () {
	tatsumaki = !tatsumaki;
	if (tatsumaki) {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.tatsumaki').show();
		$('.tatsumaki').finsih.hide();
	}
}

var hadoukenSound = false;
function playHadouken () {
	hadoukenSound = !hadoukenSound;
	if (hadoukenSound) {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
}

var tatsumakiSound = false;
function playTatsumaki () {
	tatsumakiSound = !tatsumakiSound;
	if (tatsumakiSound) {
	  $('#tatsumaki-sound')[0].volume = 0.5;
	  $('#tatsumaki-sound')[0].load();
	  $('#tatsumaki-sound')[0].play();
	}
}

function playGame() {

		$(".ryu").mouseenter(function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		})

		$(".ryu").mouseleave(function() {
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
		})

		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
			.animate(
			{'left':'1400px'},
			1000,
			function() {
				$(this).hide();
				$(this).css('left', '455px');
				}
			);
		})

		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		});

		$(document).keydown(function (xpressed) {
			var keyCode = xpressed.which;
			if(keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			}
		})

		.keyup(function (xpressed) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		});

		$(document).bind('keydown', function (xpressed) {
			$(document).bind('keydown', function (uppressed) {
				if (xpressed.which == 88 && uppressed.which == 38) {
					playTatsumaki();
					doTatsumaki();
				}
			})
		})

		$(document).bind('keyup', function (xup) {
			$(document).bind('keyup', function (upup) {
				if (xup.which == 88 && upup.which == 38) {
					$('.ryu-still').hide();
					$('.tatsumaki').finish().hide();
				}
			})
		})
}

function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.intro').fadeIn(function() {
    $(this).delay(5000).fadeOut(1000, function() {
    })
  })
  $('.keys').fadeIn(function() {
    $(this).delay(7000, function() {
    })
  });
}


