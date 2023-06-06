$(document).ready(function(){
    //alert('Hola desde jQuery :)');
    $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        type: "GET",
        success: function(data){
            //si la funcion es exitosa ejecuta el codigo
            var personajesTable = $("#personajes-table");
           

            //agregamos la información a la tabla
            $.each(data.results, function(index, personajes){
                var personajesUrl = personajes.url;
                $.ajax({
                    url: personajesUrl,
                    type: "GET",
                    success: function(personajesData){
                        //si la solicitud es exitosa obtener los datos de cada coctel
                        var personajesName = personajesData.name;
                        var personajesGender = personajesData.gender;
                        var personajesStatus = personajesData.status;
                        var personajesSpecies = personajesData.species;


                //creamos fila en la tabla con el nombre y la imagen
                personajesTable.append("<tr><td>" + personajesName + "</td><td>" + personajesGender + "<td></tr>" + personajesStatus + "<td></td>"  + personajesSpecies + "</tr></td>");

                    }, //function(coctelesData)
                    error: function(error){
                        //si la solicitud falla, mostrar mensaje error
                        console.log("error AL CARGAR LOS DATOS "+ error.statusText);
                    }

                }); //cierra ajax 2

            }); //cierra each

        },//Cierra data
        error: function(error){
            //si la solicitud falla, mostrar mensaje error
            console.log("error AL CARGAR La lista de cocteles "+ error.statusText);
        }
    }); //cierra ajax
    
 
    }); //cierra ready
    