function ejercicio3(array)
{
	var texto=new Object();
	for(i in array){
		var j=parseInt(i)+1;
		texto["propiedad"+j]=array[i];
	}
	var propiedades=Object.keys(texto)
	var str = "";
	for(j in propiedades){
		str += propiedades[j]+"-->"+texto[propiedades[j]];
		if(j<propiedades.length-1)
			str+=";";
	}
	if(propiedades.length==0)
		return "El objeto está vacío";
	return str;

}

describe("Ejercicio 3",function(){
		it("Debe imprimir propiedades y su contenido",function(){
			assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1",ejercicio3([6,5,4,3,2,1]));
		});
		it("Si le pasamos un array vacio debe imprimir que el objeto esta vacío",function(){
			assert.equal("El objeto está vacío",ejercicio3([]));
		});
	});
