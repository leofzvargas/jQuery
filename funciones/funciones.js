$(document).ready(function() {
//alert("Hola mundo :)");
llenadoTabla() 
});


//Inicia llenado tabla
function llenadoTabla(){
       $.ajax({
              type: "ajax",
              method: "GET",
              url: "http://localhost:9090/api/Volcan/listar",
              success: function (goku) {
                     console.log("Correcto listar "+ JSON.stringify(goku));
                     var cuerpo;
                     for (var i=0; i < goku.lenght; i++) {
                            cuerpo += '<tr>'+
                            '<td>' +goku[i].idVolca + '</td>' + 
                            '<td>' +goku[i].nombre + '</td>' + 
                            '<td>' +goku[i].pais+ '</td>' + 
                            '<td>' +goku[i].actividad+ '</td>' +
                            '<td>' +goku[i].altura+ '</td>' +  
'<td><a class="btn btn-warning" data=" '+goku[i].idVolca+'"><i class="fa fa-fw fa-refresh"></i></td></a>' +
'<td><a class="btn btn-danger" data=" '+goku[i].idVolca+'"><i class="fa fa-fw fa-remove"></i></td></a>' +
                            '</tr>';
                     }//Cierra for
                     $('#cuerpotT').html(cuerpo);                 
              },//Cierra function goku

              error: function(vegeta) {
                     console.log("Error en listar " + JSON.stringify(vegeta));

              }//Cierra function vegeta
       })//Cierra ajax
 
}//Cierra llenado tabla


//Inicia buscar editar
$('#cuerpotT').on('click','.btn-danger', function(){
       var idVolca = $(this).attr('data');
       console.log("idVolca = "+idVolca);

       var json = {"idVolca": idVolca}
       $.ajax({
              type: "ajax",
              method: "POST",
              url: "http://localhost:9090/api/Volcan/buscar",
              data: JSON.stringify(json),
              contentType: "aplication/json; charset= utf-8",
              success: function (goku) {
                     console.log("Correcto buscar " + JSON.stringify(goku)); 
                     $('idVolcaU').val(goku.idVolca);
                     $('nombreU').val(goku.nombre); 
                     $('paisU').val(goku.pais);
                     $('actividadU').val(goku.actividad);
                     $('alturaU').val(goku.altura);

              },//Cierra goku
              error: function(vegeta) {
                     console.log("Error en buscar " + JSON.stringify(vegeta)); 
              }//Cierra vegeta
       })//Cierra ajax

}) //Finaliza buscar editar

//Inicia editar

$('#btnEditar').click(function (){
       console.log("Hola desde consola");
       var idVolca = $('idVolcaU').val();
       var nombre = $('nombreU').val();
       var pais = $('paisU').val();
       var actividad = $('actividadU').val();
       var altura = $('alturaU').val();

       var json = {"idVolca":idVolca, "nombre":nombre, "pais":pais, "actividad":actividad, "altura":altura};
       $.ajax({
              type: "ajax",
              method: "POST",
              url: "http://localhost:9090/api/Volcan/editar",
              data: JSON.stringify(json),
              contentType: "application/json; charset= utf-8",
              success: function (goku) {
                     console.log("Correcto editar " + JSON.stringify(goku)); 
                     $('#modalEditar').modal('hide');
       $('.alert-warning').html("Se edito el Volcan "+ nombre).fadeIn().delay(4000).fadeOut('slow');
              llenadoTabla();
              }, //Cierra goku
              error: function(vegeta) {
                     console.log("Error al editar " + JSON.stringify(vegeta)); 
              }//Cierra vegeta

       })//Cierra ajax

})//Finaliza editar

//Inicia eliminar
$('#btnEliminar').click(function (){
       console.log("Hola desde consola");
       var idVolca = $('idVolcaD').val();
       var nombre = $('nombreD').val();
       var pais = $('paisD').val();
       var actividad = $('actividadD').val();
       var altura = $('alturaD').val();

       var json = {"idVolca": idVolca, "nombre" :nombre, "pais" :pais, "actividad" :actividad, "altura" :altura};
       $.ajax({
              type: "ajax",
              method: "POST",
              url: "http://localhost:9090/api/Volcan/eliminar",
              data: JSON.stringify(json),
              contentType: "application/json; charset= utf-8",
              success: function (goku) {
                     console.log("Correcto eliminar " + JSON.stringify(goku)); 
                     $('#modalEliminar').modal('hide');
       $('.alert-danger').html("Se elimino el Volcan "+ nombre).fadeIn().delay(4000).fadeOut('slow');
              llenadoTabla();
              }, //Cierra goku
              error: function(vegeta) {
                     console.log("Error al eliminar " + JSON.stringify(vegeta)); 
              }//Cierra vegeta

       })//Cierra ajax

})//Finaliza editar
//Finaliza eliminar


//Inicia btnAbrirGuardar
$('#btnAbrirGuardar').click(function() {
       console.log("Hola desde consola");
       $('#modalGuardar').modal('show');

})//Cierran btnAbrirGuardar

//Inicia btnguardar
$('#btnGuardar').click(function(){

       var idVolca = $('#idVolca').val();
       var nombre = $('#nombre').val();
       var pais = $('#pais').val();
       var actividad = $('#actividad').val();
       var altura = $('#altura').val();

       console.log("id->" +idVolca);
       console.log("nombre->" +nombre);
       console.log("pais->" +pais);
       console.log("actividad->" +actividad);
       console.log("altura->" +altura);

       if(idVolca == '')
       {
              alert("Falta el ID")
       }
       else if(nombre =='')
       {
              alert("Falta el Nombre")
       }
       else if(pais =='')
       {
              alert("Falta el Pais")
       }
       else if(actividad =='')
       {
              alert("Falta la Actividad")
       }
       else if(altura =='')
       {
              alert("Falta la altura")
       }
       else 
       {
              


       var json={"idVolca":idVolca, "nombre":nombre, "pais":pais, "actividad":actividad, "altura":altura};
       $.ajax({
              type: "ajax",
              method: "POST",
              url: "http://localhost:9090/api/Volcan/guardar",
              data: JSON.stringify(json),
              contentType: "aplication/json; charset=utf-8",
              success: function(goku) {
                     console.log("Correcto guardar " + JSON.stringify(goku));
                     $('#modalGuardar').modal('hide');
                     $('.alert-success').html("Se guardo el Volcan " +nombre).fadeIn().delay(4000).fadeOut('slow');
                     llenadoTabla();
              },//Cierra function goku             
              error: function(vegeta) {
                     console.log("Error al guardar " + JSON.stringify(vegeta));

              }//Cierra function vegeta
       })//Cierra ajax
       }//Cierra alerts
})//Cierra btnguardar

function limpiar(){
       $('#idVolca').val('');
       $('#nombre').val('');
       $('#pais').val('');
       $('#actividad').val('');
       $('#altura').val('');
}