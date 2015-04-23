'use strict';

/**
 * @ngdoc overview
 * @name freelancerApp
 * @description
 * # freelancerApp
 *
 * Main module of the application.
 */
angular
  .module('freelancerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
