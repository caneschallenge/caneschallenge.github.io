// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz();
});



//TIMER-Countdown


var seconds = 21;

function secondPassed() {
    var remainingSeconds = seconds % 21;
    if (remainingSeconds < 1) {
        remainingSeconds = "0" + remainingSeconds;
    var countdownTimer = setInterval('secondPassed()', 1000);
    }
    document.getElementById('countdown').innerHTML = ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        disableButtons();
        timesUp();
    } else {
        seconds--;
    }
    //document.getElementById('countdown').innerHTML = ":" + remainingSeconds;
    //setTimeout('timesUp()', 22000);
}


function timesUp() {
  var message = document.getElementById('countdown');
  message.textContent = "Time's Up";
  //document.getElementById('countdown').textContent = "Time's Up!";
}


//setInterval('disableButtons()', 5000);

function disableButtons() {
  var buttons = document.getElementsByName('question0');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}


//Stop Timer after Submit is clicked

document.getElementById('submitAnswer').click = stopTimer;

function stopTimer() {
  seconds = 0;
  //document.getElementById('countdown').textContent = "Hellloooooo";
  message.textContent = "omggg";
}


//Run Timer after clicking Next Button
//document.getElementById('nextButton').onclick = resetSecondpassed;

function resetSecondpassed() {
  seconds = 21;
  secondPassed();
}






//OLD CODE for Timer

//function secondPassed() {
    //var remainingSeconds = seconds % 21;
    //if (remainingSeconds < 1) {
        //remainingSeconds = "0" + remainingSeconds;
    //var countdownTimer = setInterval('secondPassed()', 1000);
    //}

    //document.getElementById('countdown').innerHTML = ":" + remainingSeconds;
    //if (seconds == 0) {
        //clearInterval(countdownTimer);
        //document.getElementById('countdown').innerHTML = "Time's Up!";
    //} else {
        //seconds--;
    //}

//}
