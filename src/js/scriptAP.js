function arearC() {
    const radius = parseFloat(document.getElementById("numero").value);
    const area = Math.PI * radius * radius;
    document.getElementById("resultado").value = area.toFixed(2);
}

function arearCu() {
    const sideLength = parseFloat(document.getElementById("numero1").value);
    const area = sideLength * sideLength;
    document.getElementById("resultado1").value = area.toFixed(2);
}

function arearT() {
    const baseLength = parseFloat(document.getElementById("numero2").value);
    const height = parseFloat(document.getElementById("numero3").value);
    const area = 0.5 * baseLength * height;
    document.getElementById("resultado2").value = area.toFixed(2);
}

function perimetroC() {
    const radius = parseFloat(document.getElementById("numero4").value);
    const perimeter = 2 * Math.PI * radius;
    document.getElementById("resultado3").value = perimeter.toFixed(2);
}

function perimetroCu() {
    const sideLength = parseFloat(document.getElementById("numero5").value);
    const perimeter = 4 * sideLength;
    document.getElementById("resultado4").value = perimeter.toFixed(2);
}

function perimetroT() {
    const sideLength = parseFloat(document.getElementById("numero6").value);
    const perimeter = 3 * sideLength;
    document.getElementById("resultado5").value = perimeter.toFixed(2);
}