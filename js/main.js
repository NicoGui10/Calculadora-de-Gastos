let Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio:  Amigos, Instagram, Facebook, tv ");

while (Propaganda__usuario != "fin") {
    switch (Propaganda__usuario) {
        case "Amigos":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, Si ya respondio escriba fin para continuar ");
            break;
        case "Instagram":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, Si ya respondio escriba fin para continuar ");
            break;
        case "Facebook":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, Si ya respondio escriba fin para continuar ");
            break;
        case "tv":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, Si ya respondio escriba fin para continuar ");
            break;
        default:
            alert("Por favor escriba una opcion correcta");
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, Si ya respondio escriba fin para continuar ");

    }
}
/* Loteria Array*/
prompt("Ingrese su numero de la suerte, Si sale entre los sorteados Accedera a un descuento comunicandose con soporte.");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let arrayLotery = [];
for (let i = 1; i < 6; i++) {
    arrayLotery.push(getRandomInt(1, 500));
} 

alert("El numero ganador es: ");
alert(arrayLotery);
alert ("Gracias por Participar continue con nuestra app")

/* Loteria Array*/



/*Calculadora de prespuesto Viajes */
let vocationCalc = document.getElementById("vacationCal");

vocationCalc.addEventListener("submit", calcExpenses);

function getValue() {
    let destiny = document.getElementById("destiny").value,
        budget = document.getElementById("budget").value,
        acomodation = document.getElementById("acomodation").value,
        food = document.getElementById("food").value,
        pass = document.getElementById("pass").value,
        excursions = document.getElementById("excursions").value;

    return { destiny, budget, acomodation, food, pass, excursions }

}

function calcExpenses(e) {
    e.preventDefault();

    const { destiny, budget, acomodation, food, pass, excursions } = getValue();

    let Expenses = parseInt(acomodation) + parseInt(food) + parseInt(pass) + parseInt(excursions);
    let balance = budget - Expenses;

    SM(budget, balance, destiny)

    /*console.log(destiny,budget,acomodation,food, pass, excursions)*/
}

function SM(budget, balance, destiny) {
    let result = document.getElementById("result");
    let dataprint = document.createElement("div")
    dataprint.innerHTML = `
        <div class = "container-data">
      
            <div class="data__print">
                <h3>${destiny}</h3>
            </div>

            <div class="data__print">
                <h3>${budget} $</h3>
            </div>

            <div class="data__print">
                <h3>${balance} $</h3>
            </div>
        </div>
        `
    result.appendChild(dataprint)

    reset();
}

function reset() {
    document.getElementById("vacationCal").reset()
}

/*Calculadora de prespuesto Viajes */


