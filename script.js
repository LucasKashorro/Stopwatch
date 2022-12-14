let secondsOutput = document.getElementById('seconds');
let minutesOutput = document.getElementById('minutes');
let hoursOutput = document.getElementById('hours');

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

let playButtonActivated = false;

function playButton() {
    if(!playButtonActivated){interval = setInterval(function() {    
        playButtonActivated = true

        seconds++;

        if(seconds < 10) {
            secondsOutput.innerHTML = '0'+seconds;
        } else {
            secondsOutput.innerHTML = seconds;
        }

        if(minutes < 10) {
            minutesOutput.innerHTML = '0'+minutes;
        } else {
            minutesOutput.innerHTML = minutes;
        }

        if(hours < 10) {
            hoursOutput.innerHTML = '0'+hours;
        } else {
            hoursOutput.innerHTML = hours;
        }

        if(seconds === 60) {
            seconds = -1;
            minutes++;
            console.log('oi');
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        } 
        
    }, 1000);}
    
}

function stopButton() {
    clearInterval(interval);
    playButtonActivated = false
}

function resetButton() {
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsOutput.innerHTML = '00'
    minutesOutput.innerHTML = '00'
    hoursOutput.innerHTML = '00'
    clearInterval(interval);
    playButtonActivated = false
}