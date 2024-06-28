let titulo = document.querySelector('h1');
titulo.innerHTML = "Soy el titulo";

const botonConsola = () => {
    console.log("El boton fue clikeado");
}

const botonPrompt = () => {
    let pregunta = prompt('Sabes el nombre de alguna ciudad en Brasil?');
    if (pregunta) {
        alert(`yo fui a ${pregunta} en el 2026 y me acorde de ti`);
    } else {
        alert(`no ingresaste ninguna ciudad`);
    }

}


const botonAlerta = () => {
    alert('Yo amo Js');
}

const botonSuma = () => {
    let numero1 = prompt('Introduce un numero');
    let numero2 = prompt('Introduce otro numero');
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    let sumaTotal= numero1 + numero2;
    alert(`la suma de estos numeros es ${sumaTotal}`);
}
