function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var min;
	var max;
	min = 1;
	max = 10;
	nota = Math.floor(Math.random() * (max - min)) + min;
	if(nota >= 9)  {
		alert(nota + " EXCELENTE");

	}else{
		//dos posibles resultados
		if(nota >= 4){
		alert(nota + " APROBO");
	} else {
		alert(nota + " vamos la proxima se puede")

	}}


}//FIN DE LA FUNCIÓN