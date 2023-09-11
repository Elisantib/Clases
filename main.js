function calcularFactorial() {
  /* Bloque */
  const numberFactorial = document.getElementById("inputfactorial");
  const resultado = document.getElementById("respuesta1");
  const num = parseInt(numberFactorial.value);

  if (isNaN(num) || num < 0) {
    resultado.textContent =
      "por favor, ingresa un número valido o igual a cero";
    return;
  }

  if (num === 0 || num === 1) {
    resultado.textContent = "El factorial de " + num + " es 1.";
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  resultado.textContent = "El factorial de " + num + " es " + factorial;
}

/* Funcion para verificar palindromos */

function verificarPalindromo() {
  const inputPalindromo = document.getElementById("inputpalindromo");
  const respuesta = document.getElementById("respuesta2");
  const texto = inputPalindromo.value.toLowerCase().replace(/[^a-z]/g, "");

  if (texto === "") {
    respuesta.textContent = "Por favor, ingresa una palabra válida";
    return;
  }

  const reverse = texto.split("").reverse().join("");

  if (texto === reverse) {
    respuesta.textContent = "si,la palabra " + texto + " es un palindromo";
  } else {
    respuesta.textContent = "No, la palabra " + texto + ". No es un palindromo";
  }
}
