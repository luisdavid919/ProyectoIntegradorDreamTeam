//array de todos los datos
var allDatos =[];

function guardarDatos(){
    //array de los datos
    datos =[];

    //agregando valores al array
    datos.push(document.getElementById("correo").value);
    datos.push(document.getElementById("contraseña").value);


   //aqui almaceno el array guardarDatos dentro del array allDatos
   allDatos.push(datos);
   
   //convierto allDatos a un JSON
   arjson = JSON.stringify(allDatos);

   //almaceno los datos en local storage
   localStorage.setItem("dts",arjson)


}



