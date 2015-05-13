angular.module('friocero.services', [])

.factory('Loading', function($ionicLoading) {

  return {
    show: function(text) {
      text = text || '';
      $ionicLoading.show({
        template: '<ion-spinner icon=\'ripple\'></ion-spinner><br>' + text,
      });
    },
    hide: function(){
      $ionicLoading.hide();
    }
  };
    
})

.factory('Methods', function() {

  var titles = [{
    id: 0,
    title: 'Tu cuadradito abriga',
    description: 'Description',
    file: 'tuCuadraditoAbriga.html',
  }, {
    id: 1,
    title: 'Rondas Nocturnas',
    description: 'Description',
    file: 'rondasNocturnas.html'
  }, {
    id: 2,
    title: 'Campa&ntilde;a contra el CO',
    description: 'Description',
    file: 'co.html'
  }, {
    id: 3,
    title: 'Voluntarios Digitales',
    description: 'Description',
    file: 'voluntariosDigitales.html'
  }];

  var descriptions = [{
    id: 0,
    "description": "",
    file: 'tuCuadraditoAbriga.html'
  }, {
    id: 1,
    "description":
    "<b>Son los invisibles, los olvidados, los marginales</b>. Son personas que se encuentran en el límite de la sociedad y que, en gran medida, " +
    "ya no se sienten parte de ella. <b>No tienen casa, ni trabajo, ni cobertura médica y en algunos casos, ni siquiera identidad</b>. Sólo preservan unas pocas pertenencias " +
    "que abrazan hasta cuando duermen para sentir que, al menos, algo les es propio. " +
    "Son aquellos que viven en <b>situación de calle</b> y que cuando llegan las bajas temperaturas del invierno, alcanzan su nivel máximo de vulnerabilidad y peligro. " +
    "Por eso, numerosas organizaciones sociales llevan adelante diferentes iniciativas tendientes a brindarles comida caliente, ropa de abrigo y frazadas, pero también " +
    "una asistencia social y una contención emocional que sigue funcionando durante el resto del año. Porque los problemas estructurales que cargan estas personas, " +
    "necesitan de un acompañamiento permanente y paciente. Es asi que la comida es una excusa para poder devolverle la humanidad a estas personas, reconocerlos como iguales, " +
    "mirarlos a los ojos, tenderles una mano y a partir de eso ver qué pueden hacer para ayudarlos a salir de esa situación: tramitárles el DNI, conseguirles una pensión o " +
    "plan social, acompañarlos a un hospital cercano, ponerlos en contacto con una asistente social o hasta reinsertarlos laboralmente."
  }, {
    id: 2,
    "description":
    "<p>En nuestro pa&iacute;s, hay 500 accidentes causados por mon&oacute;xido de carbono al a&ntilde;o. " +
    "Por semana, se calcula, que muere más de una persona a causa del mon&oacute;xido de carbono en Argentina. " +
    "Es importante dar cuenta de esto, y trabajar para que no muera nadie a causa de esto.<br>" +
    "Como hacerlo? Es muy simple: " +
    "En TODO lugar que haya estufa, calefactor, calef&oacute;n y horno, permitir que circule el aire. " +
    "NUNCA dejar cerrado el ambiente, al menos, abrir 5 cent&iacute;metros la ventana o puerta para ventilar. " +
    "Que no muera nadie más!<br> Difundamos, eduquemos y actuemos.<br><br>" +
    "<b>Facebook</b><br><a target='_blank' href='https://www.facebook.com/redsolidariaargentina'>/redsolidariaargentina</a><br> <a target='_blank' href='https://www.facebook.com/mundoinvisible'>/mundoinvisible</a> <br><br>" +
    "<b>Web</b><br> <a target='_blank' href='http://www.redsolidaria.org.ar'>www.redsolidaria.org.ar</a><br> <a target='_blank' href='http://www.mundoinvisible.org'>www.mundoinvisible.org</a></p>"
  }, {
    id: 3,
    "description":
    "<p>Muchas veces uno no tiene los medios o las circunstancias para colaborar en alguna actividad concreta. " +
    "Hoy en d&iacute;a, las redes sociales e internet forman parte de la vida de todos. Por esto, creemos que es de suma " +
    "importancia la colaboraci&oacute;n y difusi&oacute;n desde casa.<br>" +
    "C&oacute;mo hacerlo? Es muy simple, podemos dedicar una o media hora de tu tiempo diario a " +
    "difundir (compartiendo, enviando, re-direccionando) informaci&oacute;n y actividades que se realizan. " +
    "Uno nunca sabe quien puede leer del otro lado... A difundir! <br><br>" +
    "<b>Facebook</b><br><a target='_blank' href='https://www.facebook.com/redsolidariaargentina'>/redsolidariaargentina</a><br> <a target='_blank' href='https://www.facebook.com/mundoinvisible'>/mundoinvisible</a> <br><br>" +
    "<b>Web</b><br> <a target='_blank' href='http://www.redsolidaria.org.ar'>www.redsolidaria.org.ar</a><br> <a target='_blank' href='http://www.mundoinvisible.org'>www.mundoinvisible.org</a></p>"
  }, {
    id: 4,
    "description":
    "<p>Cada vez que llega el frio, tambi&eacute;n llegan las temperaturas bajas, diferentes organizaciones trabajan " +
    "para que gente de la calle no sufra por el frio. Este a&ntilde;o inauguramos entre diferentes organizaciones una " +
    "oficina contra el frio. Además de brindar asistencia para las personas que viven en la calle, es un " +
    "s&iacute;mbolo de solidaridad, un s&iacute;mbolo contra el fr&iacute;o. Esta estará disponible TODOS los d&iacute;as de 19:00 a " +
    "12:00 hs y las noches de temperaturas muy bajas estará abierta TODA la noche. Para esto, necesitamos " +
    "elementos como frazadas y ropa de abrigo, pero tambi&eacute;n se necesitan manos para ayudar y pies para " +
    "recorrer las calles. <br><br><b>C&oacute;mo sumarse?</b><br>" +
    "1- Trayendo tu frazada, ropa de abrigo o alimento a la oficina<br>" +
    "2- Asistiendo alguna de las noches a la oficina, all&iacute; se organizan recorridos para asistir a " +
    "la gente que duerme en las calles.<br><b>Donde se encuentra la oficina?</b><br>" +
    "Se encuentra en PLAZA DE MAYO en frente a la catedral.<br>Direcci&oacute;n: San Mart&iacute;n 42, Ciudad de Buenos Aires<br><br>" +
    "<b>Facebook</b><br><a target='_blank' href='https://www.facebook.com/redsolidariaargentina'>/redsolidariaargentina</a><br> <a target='_blank' href='https://www.facebook.com/mundoinvisible'>/mundoinvisible</a> <br><br>" +
    "<b>Web</b><br> <a target='_blank' href='http://www.redsolidaria.org.ar'>www.redsolidaria.org.ar</a><br> <a target='_blank' href='http://www.mundoinvisible.org'>www.mundoinvisible.org</a></p>"
  }];

  return {
    getTitles: function() {
      return titles;
    },
    getTitle: function(methodId){
      return titles[methodId].title;
    },
    getFile: function(methodId) {
      return "templates/howDetails/" + titles[methodId].file;
    }
  };

})

.factory('Help', function() {

  var user = JSON.parse(window.localStorage.getItem("user"));

  var functions = {
    getUser: function(){
      return (user) ? user : {};
    },
    setUser: function(newUser){
      user = newUser;
      window.localStorage.setItem("user",angular.toJson(user));
      // window.localStorage.setItem("user",JSON.stringify(user));
    }
  };

  return functions;
  
})

.factory('Map', function($q) {

  var map = null;
  var position = {};
  var markers = [];
  var openInfoWindow = null;
  var bounds = new google.maps.LatLngBounds();
  
  var onError = function(error) {
    alert('Error: ' + error.message);
  };

  var functions = {
    init: function() {
      var myLatlng = new google.maps.LatLng(-34.60372, -58.38159);
      var mapOptions = {
          center: myLatlng,
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControl: false,
          mapTypeControl: false
      };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      return map;
    },
    getMarkers: function(){
      return markers;
    },
    deleteMarkers: function(){
      for(var i = 0; i < markers.length; i++){
        markers[i].setMap(null);
      }
      markers = [];
    },
    addMarker: function(lat,lng,title,description,id,position){
      
      var marker = null,
          myLatlng = new google.maps.LatLng(lat, lng);

      bounds.extend(myLatlng);
      map.fitBounds(bounds);

      if(!position){
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: title,
          icon: 'img/marker.png'
        });
      }
      else{
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: title
        });
      }

      marker.infowindow = new google.maps.InfoWindow({
        content: description
      });

      marker.id = id;

      google.maps.event.addListener(marker, 'click', function() {
        marker.infowindow.open(map, marker);
        if(marker.description !== '')
        {
          if(openInfoWindow){
            openInfoWindow.infowindow.close();
          }
          openInfoWindow = marker;
          marker.infowindow.open(map, marker);
        }
      });

      markers.push(marker);
    },
    hasPosition: function(){
      return position.latitude && position.longitude;
    },
    getPosition: function(){
      var deferred = $q.defer();
      var onSuccess = function(pos){
        position.latitude  = pos.coords.latitude;
        position.longitude = pos.coords.longitude;
        deferred.resolve();
      };
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      return deferred.promise;
    },
    locate: function() {
      var deferred = $q.defer();
      if(functions.hasPosition()){
        functions.addMarker(position.latitude,position.longitude,'Estas aca','Estas aca',-1,true);
        deferred.resolve();
      }
      else{
        functions.getPosition().then(function(){
          functions.addMarker(position.latitude,position.longitude,'Estas aca','Estas aca',-1,true);
          deferred.resolve();
        });
      }
      return deferred.promise;
    },
    getClosestMarker: function(){
      var deferred = $q.defer();
      var find = function(){
        var pi = Math.PI, i, distances = [], closest = -1;
        var R = 6371; //equatorial radius

        for( i=0; i<markers.length; i++ ) {

          if(markers[i].id != -1)
          {
            var lat2 = markers[i].position.lat();
            var lon2 = markers[i].position.lng();

            var chLat = lat2-position.latitude;
            var chLon = lon2-position.longitude;


            var dLat = chLat*(pi/180);
            var dLon = chLon*(pi/180);

            var rLat1 = position.latitude*(pi/180);
            var rLat2 = lat2*(pi/180);

            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(rLat1) * Math.cos(rLat2); 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c;

            distances[i] = d;
            if ( closest == -1 || d < distances[closest] ) {
              closest = i;
            }
          }
        }

        if(openInfoWindow){
          openInfoWindow.infowindow.close();
        }

        markers[closest].infowindow.open(map,markers[closest]);
      };

      if(functions.hasPosition()){
        find();
        deferred.resolve();
      }
      else{
        functions.getPosition().then(function(){
          find();
          deferred.resolve();
        });
      }
      return deferred.promise;
    },
  };
  
  return functions;
  
});
