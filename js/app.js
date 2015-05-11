// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('friocero', ['ionic', 'firebase', 'friocero.controllers', 'friocero.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

  $ionicConfigProvider.backButton.text('');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.how', {
      url: '/how',
      views: {
        'tab-how': {
          templateUrl: 'templates/tab-how.html',
          controller: 'HowCtrl'
        }
      }
    })
    .state('tab.how-detail', {
      url: '/how/:methodId',
      views: {
        'tab-how': {
          templateUrl: 'templates/how-detail.html',
          controller: 'HowDetailCtrl'
        }
      }
    })

  .state('tab.where', {
    url: '/where',
    views: {
      'tab-where': {
        templateUrl: 'templates/tab-where.html',
        controller: 'WhereCtrl'
      }
    }
  })

  .state('tab.help', {
    url: '/help',
    views: {
      'tab-help': {
        templateUrl: 'templates/tab-help.html',
        controller: 'HelpCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/how');

});
