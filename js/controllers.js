angular.module('friocero.controllers', [])

.controller('HowCtrl', function($scope, $ionicScrollDelegate, Methods) {
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

.controller('WhereCtrl', function($scope,$http,Loading,Map) {

        $scope.map = Map.init();

        var i;
        var baseUrl = window.location.origin;
        var rondas = [], cuadradito = [];

        if(ionic.Platform.isAndroid()){
          baseUrl = 'file:///android_asset/www';
        }
        else if(ionic.Platform.isIOS()){
          //TODO
        }

        $http.get(baseUrl+'/JSON/rondas.json').then(function(json) {
          rondas = json.data;
          return $http.get(baseUrl+'/JSON/cuadradito.json');
        }).then(function(json){
            cuadradito = json.data;
            $scope.showAllMakers();
        });

        $scope.showAllMakers = function(){
          Map.deleteMarkers();
          for(i = 0; i < rondas.length; i++){
            Map.addMarker(rondas[i].lat,rondas[i].lng,rondas[i].title,rondas[i].description,rondas[i].id,'recorrido');
          }
          for(i = 0; i < cuadradito.length; i++){
            Map.addMarker(cuadradito[i].lat,cuadradito[i].lng,cuadradito[i].title,cuadradito[i].description,cuadradito[i].id,'cuadradito');
          }
        };

        $scope.showRecorridoMarkers = function(){
          Map.deleteMarkers();
          for(i = 0; i < rondas.length; i++){
            Map.addMarker(rondas[i].lat,rondas[i].lng,rondas[i].title,rondas[i].description,rondas[i].id,'recorrido');
          }
        };

        $scope.showCuadraditoMarkers = function(){
          Map.deleteMarkers();
          for(i = 0; i < cuadradito.length; i++){
            Map.addMarker(cuadradito[i].lat,cuadradito[i].lng,cuadradito[i].title,cuadradito[i].description,cuadradito[i].id,'cuadradito');
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
