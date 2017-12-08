var questionsArray = [
	{
	question: "Which of the following are considered one single unit in physics?",
	answer: ["Light and Heat", " Quarks and Atoms", " Gravity and Fusion", " Time and Space"],
	correctAnswer : 3
	},

	{question: "What number is greater?",
	answer: ["4", "5", "6", "7"],
	correctAnswer: 0}
]

$(document).ready(function(){
	var timeRemaining = 120;
	var correctAnswers = "";
	var incorrectAnswers = "";
	var unanswered = "";
	function hiddingStuff() {
   		$('#hidden').removeClass('hidden');
   	}
	//Start the game
	$("#start").on("click", function(){
		$('#hidden').removeClass('hidden');
		//var interval = timeRemaining.setInterval(count, 1000);
		runGame();
		$("#start").on("click", stopwatch.start);
	})
	var runGame = function(){
		$('#hidden').removeClass('hidden');
		$(".container").html("<div class='row'><div class='col-lg-4'><div class='panel panel-default'><div class='panel-heading'><p>Questions</p></div><div class='panel-body'><p id='Questions'></p></div> </div></div><div class='col-lg-6'> <div class='panel panel-default'><div id= 'answers'></div></div></div>")
		for(i=0; i<questionsArray.length; i++) {
			$("#Questions").html("<div>" + questionsArray[i].question + "</div>")
			$("#answers").html("<div>" + questionsArray[i].answer.toString() + "</div>")
		}
	}
	var stopwatch = {
		start: function() {
	        intervalId = setInterval(stopwatch.count, 1000);
		},
	    count: function() {
		    timeRemaining--;
	    	$(".time").text(timeRemaining);
		  },
		timeConverter: function(t) {

		    var minutes = Math.floor(t / 60);
		    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }
		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    return minutes + ":" + seconds;
		}
	}
})

