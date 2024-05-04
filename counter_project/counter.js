const decbut = document.getElementById("decrease");
const incbut = document.getElementById("increase");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("counterlabel");

let count = 0;

incbut.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decbut.onclick = function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}