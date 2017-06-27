function suma(numInicial,numFinal){

  this.numInicial=numInicial;
  this.numFinal=numFinal;
  this.resultado=function(){

    var sum=0;
    for (var i=this.numInicial;i<=this.numFinal;i++)
      {
      sum+=i;
      }
    return sum;
  }

};
var assert=require("assert");
describe("Ejercicios de Objetos - Parte II",function(){

		it("Debe retornar la suma de los numeros que estan entre 1 y 10 incluídos.",function(){
			assert.equal(55,ejercicio1(1,10));
		});

	});
