let start = document.getElementById("start");
let reset = document.getElementById("reset");
let timer = document.getElementById("counter");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let cards = document.querySelectorAll(".cards");
let hasFlippedCard = false;
let firstCard, secondCard;

console.log(cards);

start.addEventListener('click', pad => {
    var sec = 0;
    function pad(val) {return val>9 ? val : "0" + val;}
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
});

function flipCards () {
    //find "cards" 
    //adds class flip to what we are clicking on so "this" ="cards"
    this.classList.add("flip");
    if (!hasFlipped) {
        hasFlippedCard = true;
        firstCard =this;
    }
}

cards.forEach(card => card.addEventListener("click", flipCards));

reset.addEventListener('click', event => {
    document.location.reload(event);
});



