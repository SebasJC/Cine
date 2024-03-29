var Item = require('./Cinema');
module.exports = class _Pelicula {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create( //Se crea un item que es un objeto de las películas//
			{
  NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }, 
			function(err, item) {
				if (err) //Si hay error, se envía el mensaje de error. Pasa si el item no envía, entonces devuelve todo normal//
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
Modificar(req,res) {
      console.log(req.body);
        Item.update({_id : req.body._id},{$set:{
            //busca la id del item a modificar y cambia las caracteristicas
            NOMBRE: req.body.NOMBRE,
            DURACIONMINUTOS: req.body.DURACIONMINUTOS,
            GENERO: req.body.GENERO,
            IDIOMAAUDIO: req.body.IDIOMAAUDIO,
            IDIOMASUB: req.body.IDIOMASUB,
            SINOPSIS: req.body.SINOPSIS,
            CLASIFICACION: req.body.CLASIFICACION,
            PRECIO: req.body.PRECIO,
            HORAINICIO: req.body.HORAINICIO,
            FECHA: req.body.FECHA,
            MINUTOINICIO: req.body.MINUTOINICIO,
            ASIENTOS: req.body.ASIENTOS,
            IMAGEN: req.body.IMAGEN,
            ESTADO: req.body.ESTADO
        }},(err, item) => {
            //busca errores internos y externos
            if (err){res.send(err);}
            // Obtine y devuelve todas las personas tras crear una de ellas
              else{
                Item.find((err, item) => {
                    if(err)res.send(err);
                    res.json(item);
                });
              }
        });
    }   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, //Pide id para que no se borren las demás, solo esa.//
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) { //Ver todas las películas disponible//
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) { //Pide solo las películas de una fecha específica.//
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) { //Selecciona una película según su id, ÚNICA E IRREPETIBLE//
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) { //Seleccionar películas por su nombre.//
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}