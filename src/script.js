$(document).ready(function() {

  setTimeout(function(){
    $('body').toggleClass('loaded');
  }, 2000);

});



var myApp = angular.module('fivetronics',
  [
  require('angular-resource'),
  require('angular-translate'),
  require('angular-ui-router')
  ]);

myApp.config( function($stateProvider ) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/project"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact"
    })
    .state('own', {
      url: "/own",
      templateUrl: "partials/own-project"
    })

});

myApp.config( function( $urlRouterProvider, $locationProvider ) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

});

