// Información
const titulo = "Mi Primer Script Interactivo";
const descripcion = "Calculador de Signos";

const anioActual = 2026;

// Obtener datos
alert("Voy a calcular tu edad y tu signo del Zodiaco, para esto necesito tu nombre y tu fecha de nacimiento")
const nombre = prompt("¿Cómo te llamás?");
const anio = parseInt(prompt("Año de nacimiento (ej. 1990)"));
const mes = parseInt(prompt("Mes de nacimiento = No poner 0 adelante de los números (Mayo = 5 no 05)"));
const dia = parseInt(prompt("Día de nacimiento = No poner 0 adelante de los números (3 no 03)"));

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
getSignoZodiaco(mes, dia);

// Calcular edad (resta el año de nacimiento al año actual)
const edad = anioActual - anio;

// Mostrar resultado
console.log(titulo + " - " + descripcion);
console.log("Nombre: " + nombre);
console.log("Fecha de nacimiento: " + dia + "/" + mes + "/" + anio);
console.log("Edad: " + edad + " años (o " + (edad - 1) + " si todavía no cumpliste este año)");
console.log("Tu signo es: " + signo);
alert("Hola " + nombre + ", este año cumplís " + edad + " años y tu signo es " + signo);
