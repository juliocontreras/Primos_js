var puntuacion=0;

function primo()
	{
		var valor=parseInt(document.getElementById("valor").value);
		var NumeroPrimo=true;
		 
		for(i=1;i<valor;i++)
		{
			// If factor
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
			{
				NumeroPrimo=false;
				break;
			}
		}
 
		if(NumeroPrimo) {
			puntuacion++;
			window.alert("Sí señor "+valor+" es Primo! \nContinua con el juego! \n\nTu puntiacion es de "+ puntuacion +" Point");
		} else {
			window.alert("Que dices tio! \n"+valor+" No es Primo! \n\nTu puntiacion es de "+ puntuacion +" Point");
					puntuacion=0;

		}

	}


