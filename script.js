var timer = 60;
var score = 0;



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    var rn = Math.floor((Math.random()*10));
    document.querySelector("#hitvar").textContent = rn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1;  i< 169; i++){
    var rn = Math.floor(Math.random()* 10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--; 
            document.querySelector("#timerval").innerText = timer; 
        }
        else{
            clearInterval(timerint);
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click")

runTimer();
makeBubble();
getNewHit();