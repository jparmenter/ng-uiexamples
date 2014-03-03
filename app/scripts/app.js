'use strict';

angular.module('ngUiexamplesApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'});
    $routeProvider.when('/about', { templateUrl: 'views/about.html', controller: 'AboutCtrl'});
    $routeProvider.otherwise({ redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });
