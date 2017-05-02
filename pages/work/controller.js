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
		$scope.hats = [
			{
				'title': 'Front End Development',
				'copy': 'Along with collaborating and building out the Front End of the Governor.io platform, I also had my hand in either building, converting, or maintaining over a hundred sites in the past two years.'
			},
			{
				'title': 'UX/UI Design',
				'copy': 'I believe strong UX can make a good project great, and a great project amazing. For the past two years at Governor, I strived to make the experience delightful, useful, and easy.'
			},
			{
				'title': 'Community Management',
				'copy': 'When the need arose, I stepped up to the plate and became the lead community manager for the platform. I answered live chat inquiries and e-mail to help clients solve technical issues.'
			},
			{
				'title': 'Documentation',
				'copy': 'I was responsible for creating, updating, and maintaining the entire documentation platform for Governor. Writing good docs can be challenging but I was grateful for the opportunity and experience.'
			},
			{
				'title': 'Blogs/Tutorials',
				'copy': 'During my time at Governor I created helpful blogs, tutorials, and videos to help customers, clients, and developers use the platform. For the video tutorials, I did all of the voice over, filming and editing.'
			},
			{
				'title': 'Product Design',
				'copy': 'At Governor, I took the lead in designing the templating language that the platform runs on. We successfully collaborated and created a powerful, easy to use templating langauge.'
			}
		];

	}]);
