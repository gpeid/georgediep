'use strict';

/**
* @ngdoc function
* @name georgediepApp.controller:socialCtrl
* @description
* # socialCtrl
* Controller of the georgediepApp
*/
angular.module('georgediepApp')
.controller('socialCtrl', function($scope) {
  $scope.socialMedias = [
    {
    	network:'Facebook',
    	url:'http://fb.me/ghdiep',
    	icon:'fa-facebook-square',
    	htmlClass:'fb-icon'
    },
    {
    	network:'LinkedIn',
    	url:'https://www.linkedin.com/in/ghdiep',
    	icon:'fa-linkedin-square',
    	htmlClass:'linkedin-icon'
    },
    {
    	network:'Twitter',
    	url:'https://twitter.com/geor_el',
    	icon:'fa-twitter-square',
    	htmlClass:'twitter-icon'
    },
  ];
});

