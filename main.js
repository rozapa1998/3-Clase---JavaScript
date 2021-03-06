
//Los productos se mostraran de forma descendente
//Con sus respectivos precios y nombres
alert("En esta pagina almacenara productos, indique su precio y su valor por favor...")

for(var num1 = 1 ; num1 <= 7; num1++){
    var producto = String(prompt("Ingrese Producto.. "));
    var precio = Number(prompt("Ingrese Precio de su producto "));
    document.write(num1 +"°"+ producto + " " + "$" + precio + "<hr>")

    }