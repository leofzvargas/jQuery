$(document).ready(function(){
//alert('Hola desde Jquery :)');
    $.ajax({
    url:"https://pokeapi.co/api/v2/pokemon",
    type:"GET",
    success: function(data){
        //si la funcion es exitosa ejecuta este codigo
        var pokemonTable = $("#pokemon-table");
        //agregamos los pokemon
        $.each(data.results, function(index, pokemon){
            var pokemonUrl = pokemon.url;
            $.ajax({
                url: pokemonUrl,
                type: "GET",
                success: function(pokemonData){
                    //si la solicitud es exitosa obtener los datos de cada pokemon
                    var pokemonName = pokemonData.name;
                    var pokemonImage = pokemonData.sprites.front_default;

            //creamos una nueva fila en la tabla con el nombre y la imagen
            pokemonTable.append("<tr><td>" + podemonName + "</td><td><img src='" + pokemonimage + "'<>/td<>/tr>");

                },//function(pokemonData)
                error: function(error){
                    //si la solicitud falla, mostrar mensaje error
                    console.log("error al cargar los datos "+ error.statusText);
                }

            })//cierra ajax 2

        })//cierra each

        }//cierra data
    })//cierra ajax
})//cierra ready
    

