var app = angular.module('ukrApp',['angularMoment', 'ngAnimate','ui.router','ngResource']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'logController'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: '/views/signup.html',
    controller: 'logController'
  })

  .state('form.post',{
    url: '/',
    templateUrl: '/views/blog.html',
    controller: 'blogController',
    //  resolve: {
    //   logincheck: checkLoggedin
    // }
  })

  .state('form',{
  	url: '/form',
  	templateUrl: '/views/form.html',
  	 controller: 'logController',
    
  })

   .state('form.account',{
  	url: '/account',
  	templateUrl: '/views/account.html',
  	controller: 'accountController'
  })

  $urlRouterProvider.otherwise('login');
  });

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}

