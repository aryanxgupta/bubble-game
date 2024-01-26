var timer = 60 ;
var scoreVal = 0 ;
var score = document.querySelector("#score-val") ; 
var panelBottom = document.querySelector(".pbtm") ;
var hitVal = document.querySelector("#hit-val") ;
var time = document.querySelector("#timer-value") ;
var val ;

function increaseScore(){
    scoreVal ++ ;
    score.innerHTML = scoreVal ;  
}

function getNewHit(){
    val = Math.floor(Math.random()*10) ;
    hitVal.innerHTML = val;
}

function makeBubble(){
    var clutter = ""
    for(var i=1 ; i<=152 ; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    panelBottom.innerHTML = clutter 
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer-- ; 
            time.innerHTML = timer
        }else{
            panelBottom.innerHTML = `<h1>GAME OVER</h1>`
            hitVal.innerHTML = "-"
            clearInterval(timerint)
        }
    },1000)
}

panelBottom.addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.innerHTML)
    if(clickedNumber === val){
        increaseScore() ;
        makeBubble() ;
        getNewHit() ;
    }
})

runTimer() 
makeBubble() ;
getNewHit()



