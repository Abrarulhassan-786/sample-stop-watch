var min = 0;
var second = 0;
var milisecond = 0;
var setintervalfunc; 
function start(){
   setintervalfunc =  setInterval(function(){
        milisecond =milisecond+1;
        document.getElementById("milisecond").innerHTML = milisecond;
    
        if(milisecond >= 100){
            second = second+1;
            document.getElementById("second").innerHTML = second;
            milisecond = 0;
        }
        else if (second >= 5) {
            min = min+1;
            document.getElementById("mint").innerHTML = min;
            second = 0;
        }
    },10)
}

function pasue(){
    clearInterval(setintervalfunc)
}
function Reset(){
    pasue();
    document.getElementById("mint").innerHTML = 0;
    document.getElementById("second").innerHTML = 0;
    document.getElementById("milisecond").innerHTML = 0;
}

// setTimeout(function(){
//     clearInterval(setintervalfunc);
// },1000)