var controllerpelicula = require('./controllerpelicula.js');
var controlleradministrador = require('./controlleradministrador.js');

 module.exports = function(app){


 	var clasepelicula = new controllerpelicula();	
 	app.post('/api/nuevapelicula', clasepelicula.Guardar);
 	app.post('/api/modificarpelicula', clasepelicula.Modificar);
 	app.post('/api/eliminapelicula', clasepelicula.Eliminar);
 	app.post('/api/seleccionapelicula', clasepelicula.Seleccionartodos);
 	app.post('/api/seleccionarporfecha', clasepelicula.Seleccionarporfecha);
 	app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid);
 	app.post('/api/seleccionarpornombre', clasepelicula.Seleccionarpornombre);

	var claseadministrador = new controlleradministrador();
 	app.post('/api/nuevoadministrador', claseadministrador.Guardar);
	app.post('/api/Login', claseadministrador.Login); 	
 	



 	app.get('*', function(req,res) {//localhost:8080
 	res.sendfile('./login.html'); //Carga única de la vista
 	});
 
 };