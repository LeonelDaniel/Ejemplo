

var todos= {};
  var module = ons.bootstrap('my-app', ['onsen']);
$(document).ready(function () {
	
	
	
	
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });
  
   module.controller('NewTicketController', function($scope, $data) {
    $scope.newTicket=function(){
      $scope.ons.navigator.pushPage('newTicket.html');
      };
      });

  module.controller('MasterController', function($scope, $data) {
  	getTodos();
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [
          { 
              title: 'EmpowerLabsIntra Web',
              label: '4h',
              desc: 'Martín, Leonel y 2 más han añadido nueva información a Empowerlabs Intra.'
          },
          { 
              title: 'Lab WebPlatforms',
              label: '4h',
              desc: 'Guadalupe, Javier y 2 más han añadido nueva información a ab WebPlatforms.'
          },
          { 
              title: 'Lab App Móviles',
              label: '4h',
              desc: 'Martín, Leonel y 2 más han añadido nueva información a Lab App Móviles.'
          },
          { 
              title: 'EmpowerLabsAdminIntra Web',
              label: '4h',
              desc: 'Martín, Leonel y 2 más han añadido nueva información a Empowerlabs AdminIntra.'
          },
          {
          	title:"Lab de Soporte",
          	label: "9h",
          	desc: "test"
          }
      ]; 
      
      return data;
  });
  
  module.controller('TicketOneController', function($scope, $dataTickets) {
    $scope.item = $dataTickets.selectedItem;
  });
  module.controller('TicketController', function($scope, $dataTickets) {
    $scope.items = $dataTickets.items;  
    
    $scope.showTicket = function(index) {
      var selectedItem = $dataTickets.items[index];
      $dataTickets.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('ticketOne.html', {title : selectedItem.id});
    };
  });

  module.factory('$dataTickets', function() {
      var dataTickets = {};
      		dataTickets.items=todos;
      
      return dataTickets;
  });
  
  function getTodos(){
      url= "http://empowerlabs.com/proyectos/helpDesk/todos.php";
  	$.ajax({
      	type: 'GET',
      	url: url,
      	success: function(data){
      		/*miHTML='<ons-list-item modifier="chevron" class="item">';
              for(i=0;i<data.length;i++){
      		miHTML+='<ons-row> <ons-col width="60px"><div class="item-thum"></div></ons-col><ons-col><header><span class="item-title">'+data[i].id+'</span><span class="item-label">'+data[i].fecha+'</span></header><p class="item-desc">'+data[i].problema+'</p></ons-col></ons-row>';
      		}
      		miHTML+='</ons-list-item>';
      		$('#ticketbox').html(miHTML);*/
      		todos=data;
      		//ons.notification.alert({message: ''+data.length, title:"App HelpDesk"});
      	}
      });
  }

   });