
    var module = ons.bootstrap('my-app', ['onsen']);
$(document).ready(function () {
            module.controller('AppController', function($scope) {
            });
            module.controller('PageController', function($scope) {
                ons.ready(function() {
                    // Init code here
                    
                });
            }); 
            module.controller('mainController', function($scope, $http){

    $scope.baseUrl = "http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/todos.php";
	modal.show();
    // Works but no response content
    $http({method: 'GET', url: $scope.baseUrl})
     .success(function(data,status){
         var tabla="";//"<table class='container'><thead><th>Fecha</th><th>Problema</th><th>Autor</th><th>Compañía</th></thead><tbody>";
         for(i=data.length-1;i>=0;i--){
             //tabla+="<tr><td><input type='radio' name='ids' value='"+data[i].id+"' onclick='app.navi.pushPage(\"page3.html\");' />"+data[i].fecha+"</td><td>"+data[i].problema+"</td><td>"+data[i].autor+"</td><td>"+data[i].compania+"</td></tr>";
             tabla+="<div class='cajita'><div class='titulo'><div style='width: 80%; heigth: 50px; position: absolute; box-shadow: 0px 1px 0px #2195F1; float: left;'><input type='radio' name='ids' value='"+data[i].id+"' onclick='app.navi.pushPage(\"page3.html\");' />"+data[i].id+" / "+data[i].problema+"</div><div class='foto'><img src='img/ic_launcher.png' style='heigth: 50px; width: 50px; float: right; margin-right: 2px;' /></div></div><div class='contenido' style=''>"+data[i].descripcion+"</div></div>";
         }
         //tabla+="</tbody></table>";
         //tabla+="";
         modal.hide();
         ons.notification.alert({message: 'Se han cargado la informacion!'});
       hh2('#cod',tabla);
     });


    });
     module.controller('configController', function($scope){
    });
     module.controller('newController', function($scope){
       getConfig();
    });
     module.controller('unoController', function($scope, $http){

    $scope.baseUrl = "http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/uno.php?ticket="+$('input:radio[name=ids]:checked').val();
    
    // Works but no response content
    $http({method: 'GET', url: $scope.baseUrl})
     .success(function(data,status){
         var tabla="<table class='container'><thead></thead><tbody>";
         
             tabla+="<tr><th>Fecha</th><td>"+data.fecha+"</td></tr><tr><th>Problema</th><td>"+data.problema+"</td></tr><tr><th>Autor</th><td>"+data.autor+"</td></tr><tr><th>Compañía</th><td>"+data.compania+"</td></tr><th>Descripcion</th><td>"+data.descripcion+"</td></tr><tr><th>Area</th><td>"+data.area+"</td></tr><tr><th>Porcentaje</th><td>"+data.porcentaje+"</td></tr>";
         
         tabla+="</tbody></table>";
         //ons.notification.alert({message: 'Se ha cargado la informacion!'+$('input:radio[name=ids]:checked').val()});
       hh2('#ecom',tabla);
     });


    }); 
     module.controller('editController', function($scope, $http){
    $scope.baseUrl = "http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/uno.php?ticket="+$('input:radio[name=ids]:checked').val();
    //$scope.baseUrl = 'http://www.iNorthwind.com/Service1.svc/getAllCustomers';

    // Works but no response content
    $http({method: 'GET', url: $scope.baseUrl})
     .success(function(data,status){
         
         //ons.notification.alert({message: 'Se ha cargado la informacion!'+$('input:radio[name=ids]:checked').val()});
       hh3('#idd',$('input:radio[name=ids]:checked').val());
       hh3('#datepicker',data.fecha);
       hh3('#problema',data.problema);
       hh3('#descripcion',data.descripcion);
       hh3('#autor',data.autor);
       hh3('#compania',data.compania);
       hh3('#mail',data.mail);
       hh3('#tel',data.tel);
       hh3('#porcentaje',data.porcentaje);
       hh3('#solucion',data.solucion);     getConfig();
     });

    
    }); 
    module.controller('NotificationController', function($scope) {
  $scope.alert = function() {
  mensaje= 'deskHelp es la herramienta para consultar ayuda al equipo de empowerlabs\u0021 \n Para consultar la informacion detallada de un ticket, seleccionalo en la parte superior izquierda, si no te dirige automaticamente puedes usar el boton "Seleccion individual" ';
    ons.notification.alert({message: mensaje});
  }}
      );
    module.controller('NotificationController2', function($scope) {
  $scope.alert = function() {
    ons.notification.alert({message: 'Ingresa los datos dentro del formulario para generar un nuevo ticket'});
  }}
      );
    module.controller('NotificationController3', function($scope) {
  $scope.alert = function() {
    ons.notification.alert({message: 'Ingresa los datos dentro del formulario para editar un ticket'});
  }}
      );
    module.controller('NotificationController4', function($scope) {
  $scope.alert = function() {
    ons.notification.alert({message: 'Ingresa la ruta del archivo de configuracion y el idioma'});
  }}
      );
      module.controller('sent',function($scope){
          $scope.testes = function() {
          modal.show();
              url="http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/nuevo.php";
              $.ajax({
            type: "POST",
            url: url,
            data: $("#formularioB").serialize(), // Adjuntar los campos del formulario enviado.
            success: function (data) {
            modal.hide();
                ons.notification.alert({message: ''+data.mensaje});
                $(':input','#formularioB')
 .not(':button, :submit, :reset, :hidden')
 .val('');
            }
        });
    
  }}
      );
      module.controller('sent2',function($scope){
          $scope.testes2 = function() {
          modal.show();
              url="http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/editar.php";
              $.ajax({
            type: "POST",
            url: url,
            data: $("#formularioC").serialize(), // Adjuntar los campos del formulario enviado.
            success: function (data) {
            modal.hide();
                ons.notification.alert({message: ''+data.mensaje});
                $(':input','#formularioC')
 .not(':button, :submit, :reset, :hidden')
 .val('');
            }
        });
    
  }}
      );
      module.controller('sent3',function($scope){
          $scope.testes3 = function() {
          modal.show();
              url="http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/putConfig.php";
              $.ajax({
            type: "POST",
            url: url,
            data: $("#formularioD").serialize(), // Adjuntar los campos del formulario enviado.
            success: function (data) {
            modal.hide();
                ons.notification.alert({message: ''+data.mensaje});
            }
        });

  }}
      );
      function alerta(){ alert();}
        
    function hh2(divv,param){
        $(divv).html(param); 
    }
    function hh3(componenteId,param){
        $(componenteId).val(param); 
    }
    function getConfig(){
      var i=0;
                ons.notification.alert({message: 'Cargando informaci�n...'});
                url="http://www.intellibanks.net/ibanks6/estadiaAlex/AlexRojas/deskHelp/config.php";
              $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
              var tipos=data.tipo.split(",");
              for(i=0;i<tipos.length;i++){
                $('#tipo').append($('<option>', {
        value: tipos[i],
        text : tipos[i]
    }));
              } 
              var areas=data.area.split(",");
              for(i=0;i<areas.length;i++){
                $('#area').append($('<option>', {
        value: areas[i],
        text : areas[i]
    }));
              }
              var autores=data.autores.split(",");
              for(i=0;i<autores.length;i++){
                $('#encargado').append($('<option>', {
        value: autores[i],
        text : autores[i]
    }));
              }
            }
        });
    }
            });
            