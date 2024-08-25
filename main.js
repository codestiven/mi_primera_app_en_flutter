
function salida() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let simbolo = document.getElementById("signo").value;
  let resultado = document.getElementById("res");

  console.log(typeof n1);

  if (!isNaN(n1) && !isNaN(n2)) {
    switch (simbolo) {
      case "Sumar":
        resultado.innerHTML = `el resultado es : ${n1 + n2}`;
        break;
      case "restal":
        resultado.innerHTML = `el resultado es : ${n1 - n2}`;
        break;
      case "multiplicar":
        resultado.innerHTML = `el resultado es : ${n1 * n2}`;
        break;
      case "dividir":
        resultado.innerHTML = `el resultado es : ${n1 / n2}`;
        break;

      default:
        break;
    }
  } else {
    resultado.innerHTML = "ingrese valores en la casillas";
  }
}
