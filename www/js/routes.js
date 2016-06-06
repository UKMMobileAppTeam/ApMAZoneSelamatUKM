angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.utama', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/utama.html',
        controller: 'utamaCtrl'
      }
    }
  })

  .state('menu.timerAlert', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/timerAlert.html',
        controller: 'timerAlertCtrl'
      }
    }
  })

  .state('menu.alertSent', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alertSent.html',
        controller: 'alertSentCtrl'
      }
    }
  })

  .state('menu.profilPengguna', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profilPengguna.html',
        controller: 'profilPenggunaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page9')

  

});