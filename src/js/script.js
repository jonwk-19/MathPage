function decimalToBinary() {
    const decimal = parseInt(document.getElementById("decimalInput").value);
    document.getElementById("binaryResult").value = (decimal >>> 0).toString(2);
}

function decimalToOctal() {
    const decimal = parseInt(document.getElementById("decimalInput2").value);
    document.getElementById("octalResult").value = decimal.toString(8);
}

function decimalToHexadecimal() {
    const decimal = parseInt(document.getElementById("decimalInput3").value);
    document.getElementById("hexadecimalResult").value = decimal.toString(16).toUpperCase();
}

function binaryToDecimal() {
    const binary = document.getElementById("binaryInput").value;
    document.getElementById("decimalResult").value = parseInt(binary, 2);
}

function octalToDecimal() {
    const octal = document.getElementById("octalInput").value;
    document.getElementById("decimalResult2").value = parseInt(octal, 8);
}

function hexadecimalToDecimal() {
    const hexadecimal = document.getElementById("hexadecimalInput").value;
    document.getElementById("decimalResult3").value = parseInt(hexadecimal, 16);
}
