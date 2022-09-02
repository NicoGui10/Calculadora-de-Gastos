let Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio:  Amigos, Instangram, Facebook, tv ");

while (Propaganda__usuario != "salir") {
    switch (Propaganda__usuario) {
        case "Amigos":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, o Escriba salir si no esta interesado en responder ");
            break;
        case "Instangram":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, o Escriba salir si no esta interesado en responder ");
            break;
        case "Facebook":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, o Escriba salir si no esta interesado en responder ");
            break;
        case "TV":
            alert("Muchas Gracias! ")
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, o Escriba salir si no esta interesado en responder ");
            break;
        default:
            alert("Por favor escriba una opcion correcta");
            Propaganda__usuario = prompt("Ingrese el lugar donde nos conocio, Amigos, Instangram, Facebook, tv, o Escriba salir si no esta interesado en responder ");
            
    }
}

let Responsabilidad__index = parseInt(prompt("Ingrese SI, si usa esta erramienta bajo su responsabilidad"));
const Responsabilidad__correct = "SI";

for (let i = 0; i < 15475; i++) {
    if (Responsabilidad__index == Responsabilidad__correct) {
        alert("Excelente continue con el servicio. ")
        break;
    } else {
        Responsabilidad__index = prompt("Por favor coloque la palara SI , para continuar.");
    }
}

let vocationCalc = document.getElementById("vacationCal");

vocationCalc.addEventListener("submit", calcExpenses);

function getValue() {
    let destiny = document.getElementById("destiny").value,
        budget = document.getElementById("budget").value,
        acomodation = document.getElementById("acomodation").value,
        food = document.getElementById("food").value,
        pass =document.getElementById("pass").value,
        excursions=document.getElementById("excursions").value;

    return { destiny, budget, acomodation,food, pass, excursions }

}

function calcExpenses(e) {
    e.preventDefault();

    const { destiny, budget, acomodation, food, pass, excursions } = getValue();

    let Expenses = parseInt(acomodation) + parseInt(food)+ parseInt(pass)+ parseInt(excursions);
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




