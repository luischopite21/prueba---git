function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var min;
	var max;
	min = 1;
	max = 10;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;
	alert(numeroRandom);
	

}//FIN DE LA FUNCIÓN