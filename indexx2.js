function desarrolladora(nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.resultado=function(){

    if (this.edad >17 && this.ocupacion == "Estudiante Laboratoria"){
      return "Yo`re awesome"
    }
    else{
      return "Upsi"
    }

  }
}

describe("Ejercicio 2",function(){
		var obj = new Ejercicio2("Tamara",22,"Estudiante Laboratoria","Femenino");
		it("Debe retornar You're awesome si es mayor de 17 años, mujer y estudia en laboratoria ó es web developer, sino Upsiii",function(){
			assert.equal("You're awesome",obj.mensaje());
		});
	});
