var pistApp = angular.module('pistApp', ['ngRoute']);


pistApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
    		templateUrl: 'pages/index.html',
        controller: 'MainController',
    	}).
    	when('/energy', {
        templateUrl: 'pages/energy.html',
        controller: 'MainController'
      }).
      when('/energy/electricity', {
        templateUrl: 'pages/electricity.html',
        controller: 'ElectricityController'
      }).
      when('/energy/water', {
        templateUrl: 'pages/water.html',
        controller: 'MainController'
      }).
    	when('/weather', {
      	templateUrl: 'pages/weather.html',
      	controller: 'WeatherController'
    	}).
      when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'ForecastController'
      }).
    	otherwise({
      	redirectTo: '/'
    	});
  	}
]);

