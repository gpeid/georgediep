'use strict';

/**
 * @ngdoc function
 * @name georgediepApp.controller:CommuteCtrl
 * @description
 * # CommuteCtrl
 * Controller of the georgediepApp
 */
angular.module('georgediepApp')
  .controller('CommuteCtrl', function ($scope) {
  	
  	$scope.map = { 
  		center: { 
  			latitude: 39.0087033,
  			longitude: -77.0529498
  		}, 
  		zoom: 12
  	};

		$scope.show = true;

		$scope.marker = {
		  id: 0,
		  coords: {
		    latitude: 38.9942126,
		    longitude: -77.0293369
		  },
		  options: { draggable: true },
		  events: {
		    dragend: function (marker, eventName, args) {
		      $log.log('marker dragend');
		      var lat = marker.getPosition().lat();
		      var lon = marker.getPosition().lng();
		      $log.log(lat);
		      $log.log(lon);

		      $scope.marker.options = {
		        draggable: true,
		        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
		        labelAnchor: "100 0",
		        labelClass: "marker-labels"
		      };
		    }
		  }
		};


  });
