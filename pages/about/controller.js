'use strict';

angular.module('about', ['ui.router'])
	.controller("AboutCtrl", [ "$scope", function($scope) {

		$scope.posts = [
			{
				'html': '<p>I love to build things.</p><p>My passion with code always stemmed from my love of learning coupled with my passion for building things. The LEGO bricks of my childhood have been replaced with a keyboard and my imagination.</p><p>My knowledge has expanded with every project I tackled. It started with the most rudimentary skills and naturally progressed as my ambition outgrew my skill. Once I feel I\'ve mastered something, I like to pick up and learn something new, whether it\'s a language, a framework, or a technique. My tinkering with code, design, and different tech has led me to wear many hats throughout my career whiich, in turn, helped me grow as a person and as a developer.</p>',
				'math': math(),
				'count': $scope.count
			},
			{
				'html': '<p>Recently</p><p>I worked remotely for a start-up in Texas helping to create a cloud-based CMS for agencies. I wore a lot of hats and had a lot of great experiences.</p>',
				'math': math(),
				'count': $scope.count
			},
			{
				'html': '<p>Online</p><p>I am building responsive websites, interactive web apps, or fiddling with a new API. I see art in code and elegance in organization. I love a clean codebase, and good user experience.</p>',
				'math': math(),
				'count': $scope.count
			},
			{
				'html': '<p>Offline</p><p>You can find me outside on the porch with my BBQ with friends, playing with my kids or protecting the point on some competitive games. I am an avid gamer, sci-fi enthusiast, and Dungeon Master for Dungeons and Dragons games with my friends.</p>',
				'math': math(),
				'count': $scope.count
			}
		];

		function math(){
			$scope.count = Math.floor(Math.random() * 4000) + 1000;
		}
		$scope.addOne = function(count, index) {
			count++;
			$scope.posts[index].count = count;
		}
	}]);
