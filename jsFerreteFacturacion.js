/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
var precioDos;
var precioTres;
var PrecioFinal;
function Sumar () 
{
precioUno = document.getElementById("PrecioUno").value;
precioDos = document.getElementById("PrecioDos").value;
precioTres = document.getElementById("PrecioTres").value;
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);
precioFinal = precioUno + precioDos + precioTres;
alert(precioFinal);
}

function Promedio () 
{
precioUno = document.getElementById("PrecioUno").value;
precioDos = document.getElementById("PrecioDos").value;
precioTres = document.getElementById("PrecioTres").value;
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);
precioFinal = (precioUno + precioDos + precioTres) / 3;
alert(precioFinal);
}
function PrecioFinal () 
{
precioUno = document.getElementById("PrecioUno").value;
precioDos = document.getElementById("PrecioDos").value;
precioTres = document.getElementById("PrecioTres").value;
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);
precioFinal = (precioUno + precioDos + precioTres) * 1.21;
alert(precioFinal);
}