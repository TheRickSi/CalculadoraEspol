function Resultado (){
    const ISE = parseInt(document.getElementById("varA").value);
    const MATERIAS = parseFloat(document.getElementById("varG").value);
    const CREDITOS = parseInt(document.getElementById("varC").value);
    const r = 20+ ((ISE)+(7*MATERIAS))*CREDITOS;

    var resultado = document.getElementById("resultado");
    console.log(ISE);
    console.log(MATERIAS);
    console.log(CREDITOS);
    console.log(r);
    resultado.innerHTML = "El valor aproximado a pagar es de $"+r;
}
