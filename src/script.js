var angular   = require('angular');
var format    = require('util').format;

var myApp = angular.module('fivetronics', [require('angular-ui-router')]);
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact"
    })
  $locationProvider.html5Mode(true);
  });
