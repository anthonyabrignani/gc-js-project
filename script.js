let start = document.getElementById("start");
let reset = document.getElementById("reset");
let timer = document.getElementById("counter");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let cards = document.querySelectorAll(".cards");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

console.log(cards);

// function to shuffle each card randomly
(function  shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

console.log(cards);

// start button to initiate the game
start.addEventListener('click', pad => {
    // timer
    var sec = 0;
    function pad(val) {return val>9 ? val : "0" + val;}
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));   
            if (cards === null) {
                alert(`It took you ${sec} total seconds to win!`);
    }
    }, 1000);

// function to flip cards over
function flipCards () {
    // if board is unlocked, run this function to flip cards
    if (lockBoard) return;
    // if current clicked card is equal to the firstCard, return positive
    if (this === firstCard) return;
    // adds class flip to what we are clicking on so "this" ="cards"
    this.classList.add("flip");
    // selects the first card to be flipped
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard =this;
        return;
    }

    secondCard = this;

    checkforMatch();
}

// function to see if cards are a match
function checkforMatch () {
    if (firstCard.dataset.match === secondCard.dataset.match) {
        disableCards();
        return;
    }

// if cards are not a match, unflip cards
    unflipCards();
}

// function to remove event listener if a match
function disableCards() {
    firstCard.removeEventListener('click', flipCards);
    secondCard.removeEventListener('click', flipCards);
    setTimeout(() => {
        removeMatch();
        resetBoard();
    }, 2000);
}

function removeMatch () {
        firstCard.remove('div');
        secondCard.remove('div');
}


// if not a match, remove the class flip to flip cards back over
function unflipCards() {
// when board is locked, flip the cards back over when not a match
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
// after cards are flipped over, the board is set to unlocked
       resetBoard();
// 2000 refers to milliseconds between flip (2 seconds)
    }, 2000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// event listener for when clicked, card will flip
cards.forEach(card => card.addEventListener("click", flipCards));

// when reset button is clicked, refresh page
reset.addEventListener('click', event => {
    document.location.reload(event);
});

});


