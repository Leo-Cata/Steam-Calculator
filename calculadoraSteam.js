let resultado = document.getElementById("resultado");

function calculate() {
    let calculate = prompt("Calcular Precio Con Impuesto? si/no");
    let gameIndex = ["Forza Horizon 5", "Raft", "Elden Ring", "Project Zomboid"]
    while (calculate == "si") {
        let gameName = prompt("Ingrese nombre del juego");
        if (!gameIndex.includes(gameName)) {
            gameIndex.push(gameName);
        }
        console.log(gameIndex);
        let gamePrice = parseFloat(prompt("Ingrese El Precio En Pesos"));
        let gameTax = parseFloat(prompt("Ingrese El Valor De Los Impuestos En Numeros. (Generalmente 65%)"));
        let finalPrice = gamePrice + (gamePrice * gameTax / 100);

        // console.log("Precio Final A Pagar Por", gameName, "Es: ", finalPrice);
        resultado.innerHTML = `<p>Precio Final A Pagar Por ${gameName} Es: ${finalPrice}`; //console log trasladado a que crea un p por fuera del form

        let recalculate = prompt("Calcular Precio Con Impuesto? si/no");
        if (recalculate == "no") {
            console.log("Que Tenga Un Buen Dia");
            break
        }
    }
}




calculate()