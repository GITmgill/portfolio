'use strict';

angular.module('footer', [])
	.controller("FooterController", [ "$scope", function($scope) {
		
	}])
	.directive('footer', function() {
		return {
			retrict: 'E',
			templateUrl: 'components/footer/index.html',
			controller: 'FooterController'
		};
	});
