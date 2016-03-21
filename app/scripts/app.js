'use strict';

/**
 * @ngdoc overview
 * @name georgediepApp
 * @description
 * # georgediepApp
 *
 * Main module of the application.
 */
angular
  .module('georgediepApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/upcoming', {
        templateUrl: 'views/upcoming.html',
        controller: 'UpcomingCtrl',
        controllerAs: 'upcoming'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .when('/traffic', {
        templateUrl: 'views/traffic.html',
        controller: 'TrafficCtrl',
        controllerAs: 'traffic'
      })
      .when('/commute', {
        templateUrl: 'views/commute.html',
        controller: 'CommuteCtrl',
        controllerAs: 'commute'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
