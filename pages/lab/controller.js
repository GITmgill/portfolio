'use strict';

angular.module('lab', ['ui.router'])
	.controller('LabCtrl', ["$scope", function($scope) {

		$scope.labs = [
			{
				'title': "r.cade",
				'href': "https://gitmgill.github.io/rcade/#!/",
				'summary': "r.cade is an AngularJS app that allows users to transform list style subreddits into beautiful galleries. It's a work in progresss but a lot of fun to use.",
				'purpose': "Practicing AngularJS and consuming JSON with $http, and making something cool with Reddit in mind.",
				'features': [
					"Search for any subreddit",
					"NSFW Filter"
				],
				'roadmap': [
					"Native video handling",
					"Native GIF handling",
					"Update styling/branding",
					"Add UI.router for states"
				],
				'tldr': [
					"Lab",
					"Reddit",
					"API",
					"JSON",
					"Angular",
					"HTML/CSS",
					"JavaScript/jQuery",
					"Opensource",
					"GIT"
				],
				'img': "rcade4.jpg"
			}
		];

	}]);