angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabs.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabs.jobs', {
    url: '/jobs',
    views: {
      'tab2': {
        templateUrl: 'templates/jobs.html',
        controller: 'jobsCtrl'
      }
    }
  })

  .state('tabs.perfil', {
    url: '/perfil',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabs.edit', {
    url: '/edit_perfil',
    views: {
      'tab3': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastreSe', {
    url: '/cadastro',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })

$urlRouterProvider.otherwise('/login')


});