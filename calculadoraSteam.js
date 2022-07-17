let prov = document.getElementById("prov");
let provImp;
prov.addEventListener("change", function () {// get prov option value
    provImp = parseFloat(prov.value)
})

let gameValue = document.getElementById("gameValue");
let precio;
gameValue.addEventListener("change", function () {// get value input 
    precio = parseFloat(gameValue.value)
})

let gameTax = document.getElementById("taxValue");
let tax;
gameTax.addEventListener("change", function () {// get tax value
    tax = parseInt(gameTax.value)
})

let gameName = document.getElementById("gameName")
let nombreGame;
gameName.addEventListener("change",function(){// get name 
    nombreGame = gameName.value;
})

let calcularSubmit = document.getElementById("btn__calcular");
let resultado = document.getElementById("resultado");
calcularSubmit.addEventListener("click",function calcular(e) {// on click, get the price of game + incl regional and national taxes, round value 
    e.preventDefault();
    let finalPrice = precio + Math.round((precio * (tax + provImp) / 100) * 100) / 100;// round and show only 2 decimals
    resultado.innerHTML = `<p class="title">Precio Final A Pagar Por ${nombreGame} Es: ${finalPrice}`;// insert <p> with the result
})




// calculate()