'use strict';

angular.module('sidebar', ['ui.router'])
	.controller("SideBarCtrl", [ "$scope", "$mdSidenav", function($scope, $mdSidenav) {
		$scope.showMobileMainHeader = true;
	    $scope.openSideNavPanel = function() {
	        $mdSidenav('right').open();
	    };
	    $scope.closeSideNavPanel = function() {
	        $mdSidenav('right').close();
	    };
	}])
	.directive('sidebar', function() {
		return {
			retrict: 'E',
			templateUrl: 'components/sidebar/index.html',
			controller: 'SideBarCtrl'
		};
	});
