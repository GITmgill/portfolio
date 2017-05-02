'use strict';

angular.module('work', ['ui.router'])
	.controller("WorkCtrl", [ "$scope", function($scope) {

		$scope.projects = [
			{
				'title': 'brierley & partners',
				'image': 'brierley.jpg',
				'href': 'http://www.brierley.com/'
			},
			{
				'title': 'viatech',
				'image': 'viatech.jpg',
				'href': 'http://www.viatechpub.com/'
			},
			{
				'title': 'hyphen solutions',
				'image': 'hyphen.jpg',
				'href': 'https://www.hyphensolutions.com/Info/'
			},
			{
				'title': 'modulus',
				'image': 'modulus.jpg',
				'href': 'http://www.modulusmediasystems.com/'
			},
			{
				'title': 'claffey pools',
				'image': 'claffey.jpg',
				'href': 'http://www.claffeypools.com/'
			},
			{
				'title': 'accelerate resources',
				'image': 'accelerate.jpg',
				'href': 'http://www.accelerate-resources.com/'
			},
			{
				'title': 'epic.io',
				'image': 'epic.jpg',
				'href': 'http://www.epic.io/'
			},
			{
				'title': 'encore land service',
				'image': 'encore.jpg',
				'href': 'http://www.encoreland.com/'
			},
			{
				'title': 'ashley bell interiors',
				'image': 'ashleybell.jpg',
				'href': 'http://www.ashleybellinteriors.com/'
			},
			{
				'title': 'waldrop+nichols',
				'image': 'waldrop.jpg',
				'href': 'http://www.waldropnichols.com/'
			},
			{
				'title': 'si books',
				'image': 'si.jpg',
				'href': 'http://www.siworkbook.com/'
			},
			{
				'title': 'elevate',
				'image': 'elevate.jpg',
				'href': 'http://www.weelevate.com/'
			},
			{
				'title': 'grandeur design',
				'image': 'grandeur.jpg',
				'href': 'http://www.grandeurdesign.com/'
			},
			{
				'title': 'chief partners',
				'image': 'chief.jpg',
				'href': 'http://www.chiefpartnerslp.com/'
			},
			{
				'title': 'hart gaugler',
				'image': 'hart.jpg',
				'href': 'http://www.hartgaugler.com/'
			},
			{
				'title': 'prohibition chicken',
				'image': 'pro.jpg',
				'href': 'http://www.prohibitionchicken.com/'
			},
			{
				'title': 'michael s williams custom homes',
				'image': 'msw.jpg',
				'href': 'http://www.mswhomes.com/'
			},
			{
				'title': 'liberty bank',
				'image': 'lib.jpg',
				'href': 'https://libertydfw.com/'
			},
			{
				'title': 'Great Parks',
				'image': 'gp.jpg',
				'href': 'http://www.greatparks.org/'
			},
			{
				'title': 'Dallas Arboretum',
				'image': 'darb.jpg',
				'href': 'dallasarboretum.org'
			}
		];
	}]);
