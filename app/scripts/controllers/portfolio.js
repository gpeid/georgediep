'use strict';

/**
* @ngdoc function
* @name georgediepApp.controller:portfolioCtrl
* @description
* # portfolioCtrl
* Controller of the georgediepApp
*/
angular.module('georgediepApp')
.controller('portfolioCtrl', function($scope) {
  $scope.portfolioLinks = [
    {
    	name:'CodePen',
    	url:'http://codepen.io/gpeid/',
    	icon:'fa-codepen',
    	htmlClass:'codepen-icon'
    },
    {
    	name:'JSFiddle',
    	url:'https://jsfiddle.net/user/gpeid/',
    	icon:'fa-jsfiddle',
    	htmlClass:'jsfiddle-icon'
    }
  ];
});

