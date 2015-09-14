// var angular   = require('angular');
// var format    = require('util').format;


// var myApp = angular.module('fivetronics',
//   [
//   require('angular-resource'),
//   require('angular-translate'),
//   require('angular-ui-router')
//   ]);

// myApp.config( function($stateProvider, $urlRouterProvider, $locationProvider ) {

//   $stateProvider
//     .state('home', {
//       url: "/",
//       templateUrl: "partials/home",
//       controller: 'homeCtrl'
//     })
//     .state('contact', {
//       url: "/contact",
//       templateUrl: "partials/contact"
//     })
//     .state('project', {
//       url: "/project",
//       templateUrl: "partials/project"
//     })
//     .state('own-project', {
//       url: "/own-project",
//       templateUrl: "partials/own-project"
//     })
//   $locationProvider.html5Mode(true);

//   $urlRouterProvider.otherwise("/");



//   // .controller('homeCtrl',         require('./controllers/home'))
//   // .controller('contactCtrl',      require('./controllers/contact'))
//   // .controller('projectCtrl',      require('./controllers/project'))
//   // .controller('own-projectCtrl',  require('./controllers/own-project'))
//   // .factory('Home',                require('./services/home'))
//   });

// myApp.config(['$translateProvider', function ($translateProvider) {
//   var foo = require('../public/json/home/en.json');
//   var bar = require('../public/json/home/ru.json');
//   // add translation table
//   $translateProvider.translations('en', foo)
//   $translateProvider.translations('ru', bar)


//   $translateProvider.preferredLanguage('en');

// }]);

// myApp.controller('homeCtrl', ['$scope', '$translate', function ($scope, $translate) {
//   // $translate(['intro', 'subtitle']).then(function (translations) {
//   //   $scope.intro = translations.intro;
//   //   $scope.subtitle = translations.subtitle;
//   // });
//   $scope.setLang = function(langKey) {
//     $translate.use(langKey);
//   };
// }]);
