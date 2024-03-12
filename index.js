var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "enter").replace(/e/g, "imes").replace(/i/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultCripto +
     '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar<button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "a").replace(/imes/g, "e").replace(/ai/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +
     '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar<button>'
}

function copiar(){
    var textoCop = document.getElementById('input-texto');
    
    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}