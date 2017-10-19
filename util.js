
var paresLlaves = new Array();

var getData = function() {
    var name = document.getElementById("llave").value;
    var age = document.getElementById("valor").value;

    paresLlaves[name] = age;
    alert("Se ingresaron datos");
}

var mostrar = function(){
    console.clear();
    console.log('{ "Diccionario": [ ')
    for (var i in paresLlaves) { 
        console.log('{"Llave":"'+ i +'"' + ', "Valor":"' + paresLlaves[i] + '"},'); 
    } 
    console.log(']');
    console.log('}')
}
var verXML = function(){
    console.clear();
    console.log('<Diccionario>')
    for (var i in paresLlaves) { 
        console.log('<dato>')
        console.log('<llave>'+ i +'</llave>');
        console.log('<valor>' + paresLlaves[i] + '</valor>'); 
        console.log('</dato>');
    } 
    console.log('</diccionario>');
}