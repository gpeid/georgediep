'use strict';

/**
* @ngdoc function
* @name georgediepApp.controller:ResumeCtrl
* @description
* # ResumeCtrl
* Controller of the georgediepApp
*/
angular.module('georgediepApp')
.controller('ResumeCtrl', function () {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$(document).ready(function(){

		$('#top-header').css('opacity', 0);
		$('.purpose').css('opacity', 0);
		$('.left').css('opacity', 0);
		$('.right').css('opacity', 0);


		$('#top-header').animate({opacity:1},500,
			function(){
				$('.purpose').animate({opacity:1},500,
					function(){
						$('.left').animate({opacity:1},500,
							function(){
								$('.right').animate({opacity:1},500);
							});
					});
			});
	});


});
