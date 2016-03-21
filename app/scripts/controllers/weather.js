'use strict';

/**
 * @ngdoc function
 * @name georgediepApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the georgediepApp
 */
angular.module('georgediepApp')
  .controller('WeatherCtrl', function ($scope, $http) {

		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=20900,us&appid=30666683a4b7a4bfd61d8e2a60d2d69a&units=imperial'
		}).then(function successCallback(response) {
		  // this callback will be called asynchronously
		  // when the response is available
		  $scope.data = response;
		});

		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast?id=4369596&appid=30666683a4b7a4bfd61d8e2a60d2d69a&units=imperial'
		}).then(function successCallback(weather) {
		  // this callback will be called asynchronously
		  // when the response is available
		  $scope.hourly = weather;
		});

		$scope.iconURL = 'http://openweathermap.org/img/w/';
		$scope.iconExt = '.png';


		// $http.get('http://api.openweathermap.org/data/2.5/weather?id=4744091&units=imperial&APPID=30666683a4b7a4bfd61d8e2a60d2d69a')
		// .success(function(data) {
		// 	$scope.extData = data;
		// }).
		// error(function(data) {
		//   // log error
		// });


  });
