let start = document.getElementById("start");
let reset = document.getElementById("reset");
let timer = document.getElementById("counter");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

start.addEventListener('click', pad => {
    var sec = 0;
    function pad(val) {return val>9 ? val : "0" + val;}
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
});

reset.addEventListener('click', event => {
    document.location.reload(event);
});

