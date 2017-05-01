'use strict';

angular.module('navbar', ['ui.router'])
	.controller("NavbarController", [ "$scope", function($scope) {
		$scope.logo = "MG";
	}])
	.directive('navbar', function() {
		return {
			retrict: 'E',
			templateUrl: 'components/navbar/index.html',
			controller: 'NavbarController'
		};
	});
