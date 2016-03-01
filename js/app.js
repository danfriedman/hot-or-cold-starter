
$(document).ready(function(){
	
	var answer;
	var guessNumber = 0;
	newGame();

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	
	$('.new').on('click', function() {
		newGame();
	});

	function newGame() {
		answer = Math.floor(Math.random() * 100+ 1);
		guessNumber = -1;
		guessCounter;
		$('#feedback').html("Let's play. Make your Guess!");
		$('.text').val('');
		$('#guessList').empty();
	}

	function guessCounter() {
		guessNumber++;
		$('#count').html(guessNumber);
	}

	function listGuesses(guess) {
		$('#guessList').append("<li>"+guess+"</li>");
	}

	function validateInput(guess) {
		guess = parseInt(guess, 10);
		console.log(guess);
		if (guess%1===0 && guess<101 && guess>0) {
			return true;
			console.log("true");
		} else {
			$('#feedback').html("Please enter an integer between 1 and 100");
		}
	}

	$('#guessButton').on('click', function(event) {
		event.preventDefault();
		var guess = $('.text').val();
		if (validateInput(guess)) {
			guessCounter();
			listGuesses(guess);

			if (guess<answer) {
				$('#feedback').html("Too low");
			} else if (guess>answer) {
				$('#feedback').html("Too high");
			} else {
				$('#feedback').html("You got it!");
			}
		}
	});  	
});


