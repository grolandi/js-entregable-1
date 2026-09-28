// Información
const titulo = "Mi Primer Script Interactivo";
const descripcion = "Calculador de Signos";

// Obtener fecha de nacimiento
alert("Voy a calcular tu signo del Zodiaco, para esto necesito tu mes y día de nacimiento")
let mes = prompt("Mes de nacimiento = No poner 0 adelante de los números (Mayo = 5 no 05)");
let dia = prompt("Día de nacimiento = No poner 0 adelante de los números (3 no 03)");

// Lógica de los signos
let signo;
function getSignoZodiaco(esteMes, esteDia) {
    if (esteMes === 1) {
        if (esteDia <= 19) {
            signo = "Capricornio";
        } else {
            signo = "Acuario";
        }
    } else if (esteMes === 2) {
        if (esteDia <= 18) {
            signo = "Acuario";
        } else {
            signo = "Piscis";
        }
    } else if (esteMes === 3) {
        if (esteDia <= 20) {
            signo = "Piscis";
        } else {
            signo = "Aries";
        }
    } else if (esteMes === 4) {
        if (esteDia <= 19) {
            signo = "Aries";
        } else {
            signo = "Tauro";
        }
    } else if (esteMes === 5) {
        if (esteDia <= 20) {
            signo = "Tauro";
        } else {
            signo = "Géminis";
        }
    } else if (esteMes === 6) {
        if (esteDia <= 20) {
            signo = "Géminis";
        } else {
            signo = "Cáncer";
        }
    } else if (esteMes === 7) {
        if (esteDia <= 22) {
            signo = "Cáncer";
        } else {
            signo = "Leo";
        }
    } else if (esteMes === 8) {
        if (esteDia <= 22) {
            signo = "Leo";
        } else {
            signo = "Virgo";
        }
    } else if (esteMes === 9) {
        if (esteDia <= 22) {
            signo = "Virgo";
        } else {
            signo = "Libra";
        }
    } else if (esteMes === 10) {
        if (esteDia <= 22) {
            signo = "Libra";
        } else {
            signo = "Escorpio";
        }
    } else if (esteMes === 11) {
        if (esteDia <= 21) {
            signo = "Escorpio";
        } else {
            signo = "Sagitario";
        }
    } else if (esteMes === 12) {
        if (esteDia <= 21) {
            signo = "Sagitario";
        } else {
            signo = "Capricornio";
        }
    }
}

// Calcular signo
getSignoZodiaco(Number(mes), Number(dia));

// Mostrar resultado
console.log(titulo + " - " + descripcion);
console.log("Día nacimiento: " + dia);
console.log("Mes nacimiento: " + mes);
console.log("Tu signo es: " + signo);
alert("Tu signo es: "+ signo)
