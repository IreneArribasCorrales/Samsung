
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("mostrarCuenta").addEventListener('click', function(){
        let cuenta = document.getElementById("numeroCuenta");  
        //console.log(cuenta.value)  
        alert('Le informamos de que su cuenta bancaria es:'+ cuenta.value);    
    });
    document.getElementById("mostrarValoracion").addEventListener('click',function(){
        let valoracion = document.getElementById("valoracion");
        alert('Has valorado con: '+ valoracion.value + 'puntos');
    })
    document.getElementById("mostrarFecha").addEventListener('click',function(){
        let fecha = document.getElementById("fecha").value;
        alert(`La fecha seleccionada es: ${fecha}`);
    })
   
      
});






  
