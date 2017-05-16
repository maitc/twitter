function agregar(){
	//se recupera texto ingresado en tareas y se limpia con ''
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	//donde va estar las tareas de texttarea
	var cont = document.getElementById("contenedor");
	//se crean nuevos nodos elementos
	var nuevaTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	//asignamos padres a los nodos creados.
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevaTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevaTareas);
	//creamos checkbox e íconos, se le dan atributos y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");
	//se asigna padres a nodos creados
	nuevaTareas.appendChild(chck);
	nuevaTareas.appendChild(basura);
	nuevaTareas.appendChild(cora);
	//se agrega un evento al hacer click para que elimine o agregue la clase 'tachado' al elemento contenedor
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	});
	//se remueve el icono basurero al hacerle click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevaTareas);
	});
	//se crea funcion click para el corazón  y le asignamos una clase red de css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	});
	//EXTRA: valida que el textarea no esté vacía al presionar botón aceptar, ubica el sgte código dentro de la función de manera que no se permita agregar una tarea vacía.
	if(tareas == null || tareas == 0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}
	
}







