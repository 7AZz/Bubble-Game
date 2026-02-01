var timer = 60;
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

runTimer();
makeBubble();