/**
 * codigo para hacer peticiones 
 */
var tablaPerros = document.getElementById("tablaPerros");
console.log(tablaPerros);

function traerDatosPerros(){
	/* paso 1 para AJAX inicializar y crear  EL OBJETO para realizar petición*/
	var request =new XMLHttpRequest();

	//configurar que hacer con la respuesta
	request.onreadystatechange =function(){
		if(this.readyState==4 && this.status==200){
			visualizarDatos(this.responseText);
			
		}	
		console.log(this.readyState);
	}
	// preparar la peticion
	// aveces se divide en 2, en indicar la ruta, y despues indicar el metodo o verbo http
	request.open("GET","perros.json", true);
	
	//enviar la petición. esperando respuesta
	request.send();
}

function visualizarDatos(data){
	var table = document.getElementById("tablaPerros");
	var listaPerros = JSON.stringify(data);
	
	for(i=0; i<listaPerros.length;i++){
		var perro= listaPerros[i];
		crearFila(perro);
	}
	
}
function crearFila(perro){
	/**CREACION DE ELEMENTOS DE LA LISTA**/
	//recuperando el tbody de mi tabla de html
	var tbody = tablaPerros.tBodies[0];
	
	//crear fila para agregar a la tabla
	var row = document.createElement("tr");
	
	//crear celdas para los datos de perro
	var tdNombre= document.createElement("td");
	var tdEdad= document.createElement("td");
	var tdPeso= document.createElement("td");
	var tdVivo= document.createElement("td");
	var tdPropietario= document.createElement("td");
	var tdCuidado= document.createElement("td");
	
	
	//configuracion de los datos
	tdNombre.innerText= perro.nombre;	//propiedad innerText
	tdEdad.innerText= perro.edad;		//Decirle que quiero poner un dato
	tdPeso.innerText= perro.peso;
	tdVivo.innerText= perro.estaVivo;
	tdPropietario.innerText= perro.propietario.nombre;
	tdCuidado.innerText= perro.cuidado[0];
}


