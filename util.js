
var paresLlaves = new Array();

var getData = function() {
    var name = document.getElementById("llave").value;
    var age = document.getElementById("valor").value;

    paresLlaves[name] = age;
    alert("Se ingresaron datos");
}

var mostrar = function(){
    var solo = "";
    solo += '{ "diccionario": [ <br>';
    for (var i in paresLlaves) { 
        solo += '{"Llave":"'+ i +'"' + ', "Valor":"' + paresLlaves[i] + '"},<br>';
    }
    solo += ']<br>' +'}'; 
    document.getElementById('prueba').innerHTML = solo;
}
var verXML = function(){
    document.getElementById('prueba').innerHTML = "";
    var solo ="";
    solo += "&lt;diccionario&gt;<br>";
    for (var i in paresLlaves) { 
        solo += "&lt;element&gt;<br>";
        solo += "&lt;llave&gt;"+ i +"&lt;/llave&gt;<br>";
        solo += "&lt;tipo&gt;" + paresLlaves[i] + "&lt;/tipo&gt;<br>"; 
        solo += "&lt;/element&gt;<br>";
    } 
    solo += "&lt;/diccionario&gt;<br>";
    document.getElementById('prueba').innerHTML = solo;
}