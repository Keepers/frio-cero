angular.module('friocero.controllers', [])

.controller('HowCtrl', function($scope, Methods) {
  $scope.methods = Methods.getTitles();
})

.controller('HowDetailCtrl', function($scope, $stateParams, Methods) {
  var methodId              = $stateParams.methodId;
  $scope.method             = {};
  $scope.method.title       = Methods.getTitle(methodId);
  $scope.method.getDescription = function(){
    return Methods.getFile(methodId);
  };
})

.controller('WhereCtrl', function($scope,Loading,Map) {

        $scope.map = Map.init();

        var i;
        var markers = [
          {"id":"1","value":"1","title":"1","description":"<b>Oficina Frio Cero</b> <br> San Martín 42, Ciudad de Buenos Aires","lat":"-34.607449","lng":"-58.373631"},
          {"id":"2","value":"1","title":"2","description":"<b>Boca Juniors</b> <br> Brandsen 805 Buenos Aires, Ciudad Autónoma de Buenos Aires","lat":"-34.636584","lng":"-58.364718"},
          {"id":"3","value":"1","title":"3","description":"<b>Racing Club Avellaneda</b> <br> Corbatta Oreste Omar 501, Avellaneda, Buenos Aires","lat":"-34.666773","lng":"-58.369082"},
          {"id":"4","value":"1","title":"4","description":"<b>Racing Club Sede Mitre</b> <br> Avenida Mitre 934, Avellaneda Buenos Aires <br> Tel: 4229-1300","lat":"-34.663517","lng":"-58.363178"},
          {"id":"5","value":"1","title":"5","description":"<b>Racing Club Sede Villa del Parque </b> <br> Nogoyá 3045, Villa del Parque, Ciudad Autonoma de Buenos Aires <br> Tel: 4502-7396","lat":"-34.602601","lng":"-58.491345"},
          {"id":"6","value":"1","title":"6","description":"<b>Universidad Metropolitana para la Educación y el Trabajo</b> <br>Sarmiento 2037, Ciudad de Buenos Aires <br> Tel: 1153546669","lat":"-34.605864","lng":"-58.395692"},
          {"id":"7","value":"1","title":"7","description":"<b>Instituto Romero Brest</b> <br>Avenida Crisólogo Larralde 1338 <br> Tel: 4702-9667","lat":"-34.543964","lng":"-58.458273"}
        ];

        var markers2 = [
          {"id":"8","value":"2","title":"8","description":"<b>Parroquia Natividad de María</b> <br>San Antonio 555, Barracas <br> Tel: 011 53715600","lat":"-34.648664","lng":"-58.378397"},
          {"id":"9","value":"2","title":"9","description":"<b>UTN</b> <br> Sarmiento 440, Buenos Aires, Ciudad Autónoma de Buenos Aires <br> Tel: 011 53715600","lat":"-34.604318","lng":"-58.372915"},
          {"id":"10","value":"2","title":"10","description":"<b>Parroquia Nuestra Sra de la Paz</b> <br> Pergamino 63, Buenos Aires, Capital Federal <br> Tel: 011 4611-9463","lat":"-34.632956","lng":"-58.474313"},
          {"id":"11","value":"2","title":"11","description":"<b>Iglesia Adventista del 7 dia</b> <br> J. B Alberdi 1625,Olivos <br> Tel: 1568581724","lat":"-34.511556","lng":"-58.492547"},
          {"id":"12","value":"2","title":"12","description":"<b>Iglesia Adventista del 7 dia</b> <br> Av Lisandro de la Torre 41, Liniers <br> Tel: 1565339925","lat":"-34.639449","lng":"-58.521214"},
          {"id":"13","value":"2","title":"13","description":"<b>Iglesia Adventista del 7 dia</b> <br> Estanislao de Campo 1546, Florida Oeste, Buenos Aires <br> Tel: 1532564429","lat":"-34.534172","lng":"-58.505695"},
        ];

        for(i = 0; i < markers.length; i++){
          Map.addMarker(markers[i].lat,markers[i].lng,markers[i].title,markers[i].description,markers[i].id,false);
        }

        for(i = 0; i < markers2.length; i++){
          Map.addMarker(markers2[i].lat,markers2[i].lng,markers2[i].title,markers2[i].description,markers2[i].id,false);
        }

        $scope.all = function(){

        };

        $scope.marker1 = function(){
          Map.deleteMarkers();
          for(i = 0; i < markers.length; i++){
            Map.addMarker(markers[i].lat,markers[i].lng,markers[i].title,markers[i].description,markers[i].id,false);
          }
        };

        $scope.marker2 = function(){
          Map.deleteMarkers();
          for(i = 0; i < markers2.length; i++){
            Map.addMarker(markers2[i].lat,markers2[i].lng,markers2[i].title,markers2[i].description,markers2[i].id,false);
          }
        };

        $scope.centerOnMe = function() {
          Loading.show('Obteniendo tu posicion');
          Map.locate().then(function(){
            Loading.hide();
          });
        };

        $scope.findNearestMarker = function(){
          Loading.show('Buscando punto mas cercano');
          Map.getClosestMarker().then(function(){
            Loading.hide();
          });
        };
 
})

.controller('HelpCtrl', function($scope, $firebaseArray, $ionicLoading, $timeout , Loading, Help) {

  var ref = new Firebase("https://friocero.firebaseio.com/users");

  $scope.user = Help.getUser();

  $scope.users = $firebaseArray(ref);
  
  $scope.invalidName  = false;
  $scope.invalidEmail = false;
  
  $scope.submitForm = function(form) {

    if (form.$valid) {
      
      Loading.show();
            
      $scope.user.created = Firebase.ServerValue.TIMESTAMP;
      
      $scope.users.$add( $scope.user ).then(function(){
        Loading.hide();
        Help.setUser($scope.user);
        
        $ionicLoading.show({
          template: 'Muchas gracias!',
        });
        
        $timeout( function(){
          Loading.hide();
        }, 1500);
        
      });
      
      $scope.invalidName = false;
      $scope.invalidEmail = false;
      
    }else{

      $scope.invalidName = form.name.$invalid;
      $scope.invalidEmail = form.email.$invalid;

    }

  };

});
