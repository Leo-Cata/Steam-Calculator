// default tax value
const taxValue = 75;


let prov = document.getElementById("prov");
let provImp;
prov.addEventListener("change", function () { // get prov option value, on change, save index and value in localStorage
    provImp = parseFloat(prov.value);
    localStorage.setItem("provinciaIndex", prov.selectedIndex);
    localStorage.setItem("provinciaValue", prov.value);
})


let gameValue = document.getElementById("gameValue");
let precio;
gameValue.addEventListener("change", function () { // get value input 
    precio = parseFloat(gameValue.value);
})


let gameName = document.getElementById("gameName");
let nombreGame = "El Juego"


gameName.addEventListener("change", function () { // get name 
    nombreGame == undefined ? nombreGame = "El Juego" : nombreGame = gameName.value;

})


let calcularSubmit = document.getElementById("btn__calcular");
let resultado = document.getElementById("resultado");
let calculatedPrice = [];
let calculatedName = [];
// on click, get the price of game + incl regional and national taxes, round value 
calcularSubmit.addEventListener("click", function calcular(e) {
    e.preventDefault();
    let finalPrice = precio + (precio * (taxValue + provImp)) / 100; // round and show only 2 decimals
    if (finalPrice <= 0 || isNaN(finalPrice)) {
        showError();
    } else {
        resultado.innerHTML = `<p class="title">Precio Final A Pagar Por ${nombreGame} Es: ${finalPrice.toFixed(2)}`;
        calculatedPrice.push(finalPrice.toFixed(2));
        calculatedName.push(nombreGame);
        console.log(calculatedPrice);
        console.log(calculatedName);
    }
}) // insert <p> with the result


// on load, if the previous prov is not null, set it as selected and set stored provImp value
let localStrProvIndex = localStorage.getItem("provinciaIndex");
let localStrProvValue = localStorage.getItem("provinciaValue");
if (localStrProvIndex != null) {
    document.getElementById("prov").selectedIndex = localStrProvIndex;
    provImp = parseFloat(localStrProvValue);
}


//if final price is nan show a pop up error
function showError() {
    Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Asegúrate De Haber Ingresado Valores Válidos Y Sin Separador De Mil.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#292E3D',
        customClass: 'sweetError',
    })
};


const calculatedArray = document.getElementById("lista");
const buttonArray = document.getElementById("history");
let i = 0;


//on click create a div for each element in arrays then clean arrays
buttonArray.addEventListener("click", () => {
    for (let element of calculatedName) {
        let createdDiv = document.createElement("div");
        createdDiv.innerHTML = `<div class="history__text container-fluid">El Precio Final A Pagar Por ${element} Es: ${calculatedPrice[i]} </div>`
        calculatedArray.appendChild(createdDiv);
        i++;
    }
    //reset arrays so it doesnt duplicate & reset i
    calculatedName = [];
    calculatedPrice = [];
    i = 0;
})