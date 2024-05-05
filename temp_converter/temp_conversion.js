const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result")
let temp;

function convert(){
    if(tofar.checked){
        temp = Number(textbox.value);
        temp = Math.round(temp * 9/5 + 32);
        result.textContent = temp + "°F";
    }
    else if(tocel.checked){
        temp = Number(textbox.value);
        temp = Math.round(5/9 * (temp - 32));
        result.textContent = temp + "°C";
    }
    else{

    }
}