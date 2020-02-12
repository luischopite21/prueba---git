function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
if(edad >=18){
    alert("es mayor de edad")
    }else{
        //dos posibles valores: adolescente o niño.
        if(edad >=13 && edad <= 17){
            alert("es adolescente")
        }else {
            alert("es niño")
        }
    }
    



}//FIN DE LA FUNCIÓN