function clinica(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero= genero;
  this.ciudad=ciudad;
  this.pais=pais;

  this.ficha=function(){
    return "Nombre:  "+this.nombre + " Apellido: " +  this.apellido + " Edad: "+  this.edad +  "Genero: "+  this.genero + "Ciudad: "+ this.ciudad + "Pais: "+ this.pais ;
  }
}

describe("Ejercicio 4",function(){
  it("Debe imprimir el nombre, edad y país",function(){
    var persona = new Ejercicio4("Blanca","Pérez",19,"Femenino","Santiago","Chile");
    assert.equal("Nombre: Blanca Pérez\nEdad: 19\nPaís: Chile",persona.ficha());
  });
});
