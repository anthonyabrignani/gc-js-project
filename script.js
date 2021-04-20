let start = document.getElementById("start");
console.log(start);

let reset = document.getElementById("reset");
console.log(reset);

reset.addEventListener('click', event => {
    document.location.reload(event);
});