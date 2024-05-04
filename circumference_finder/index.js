const pi = 3.14159;
let radius;
let circumference;
let username

radius = Number(radius);
circumference = 2*pi*radius;

console.log(circumference)


document.getElementById("but").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2*pi*radius;
    document.getElementById("result").textContent = `the final circumference of the circle for the given radius ${radius} is ${circumference}`
}