function mudarcor(color) {
    document.body.style.backgroundColor = color;
}

const red = document.getElementById("red").addEventListener("click", function(){mudarcor("red")})
const yellow = document.getElementById("yellow").addEventListener("click", function(){mudarcor("yellow")})
const green = document.getElementById("green").addEventListener("click", function(){mudarcor("green")})