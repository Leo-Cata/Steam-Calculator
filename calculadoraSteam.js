let prov = document.getElementById("prov");
let provImp;
prov.addEventListener("change", function () { // get prov option value
    provImp = parseFloat(prov.value)
})

let gameValue = document.getElementById("gameValue");
let precio;
gameValue.addEventListener("change", function () { // get value input 
    precio = parseFloat(gameValue.value)
})

let gameTax = document.getElementById("taxValue");
let taxValue;
gameTax.addEventListener("change", function () { // get tax value
    taxValue = parseFloat(gameTax.value)
})

let gameName = document.getElementById("gameName")
let nombreGame;
gameName.addEventListener("change", function () { // get name 
    nombreGame = gameName.value;
})

let calcularSubmit = document.getElementById("btn__calcular");
let resultado = document.getElementById("resultado");
calcularSubmit.addEventListener("click", function calcular(e) {
    // on click, get the price of game + incl regional and national taxes, round value 
    e.preventDefault();
    let finalPrice = precio + (precio * (taxValue + provImp)) / 100; // round and show only 2 decimals
    resultado.innerHTML = `<p class="title">Precio Final A Pagar Por ${nombreGame} Es: ${finalPrice.toFixed(2)}`; // insert <p> with the result

    // on click, store the value of the tax in localStorage
    localStorage.setItem("impuestos", gameTax.value)

    //on click, save index and value in localStorage
    localStorage.setItem("provinciaIndex", prov.selectedIndex);
    localStorage.setItem("provinciaValue", prov.value);
})

// on load, if there is a previous tax value that is not 0, set it as default value in the input
let localStrTax = localStorage.getItem("impuestos")
if (localStrTax != "0") {
    document.getElementById("taxValue").value = localStrTax;
    taxValue = parseFloat(localStrTax);
}
// on load, if the previous prov is not null, set it as selected and set stored provImp value
let localStrProvIndex = localStorage.getItem("provinciaIndex")
let localStrProvValue = localStorage.getItem("provinciaValue")
if (localStrProvIndex != null) {
    document.getElementById("prov").selectedIndex = localStrProvIndex;
    provImp = parseFloat(localStrProvValue);
}