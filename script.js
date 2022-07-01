let min = 0;
let sec = 0;

let displaySec = document.getElementById('sec-display');
let displayMin = document.getElementById('min-display');
let playBtn = document.getElementById('play-btn');

let buttonVerify = true

let startInterval



function button(type) {
    
    if(type === 'play'){
        if(buttonVerify === true) {
            
            buttonVerify = false
            
            startInterval = setInterval(
            function(){
                sec++
                
                if(sec < 10) {
                    displaySec.innerHTML = '0'+sec
                } else {displaySec.innerHTML = sec}
                
                if(min < 10){
                    displayMin.innerHTML = '0' + min;
                } else {displayMin = min}
                
                if(sec === 60) {
                    sec = 0;
                    min++
                }

            }, 1000
            )
            
        } else {
            
            playBtn.disable = true
            
        }
        
    } else {
        buttonVerify = true
        playBtn.disable = false
        clearInterval(startInterval) 
    }
}
