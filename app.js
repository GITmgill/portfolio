'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ui.router',
  'ngMaterial',
  'navbar',
  'footer',
  'home',
  'about',
  'work',
  'lab',
  'contact'
]).
  config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'pages/home/index.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl:'pages/about/index.html',
        controller: 'AboutCtrl'
      })
      .state('work', {
        url:'/work',
        templateUrl:'pages/work/index.html',
        controller: 'WorkCtrl'
      })
      .state('lab', {
        url:'/lab',
        templateUrl:'pages/lab/index.html',
        controller: 'LabCtrl'
      })
      .state('contact', {
        url:'/contact',
        templateUrl:'pages/contact/index.html',
        controller: 'ContactCtrl'
      });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {
        'default': '900'
      })
      .accentPalette('deep-orange', {
        'default': 'A400'
      })
  })
  .controller("AppCtrl", [ "$scope", function($scope) {
    
  }]);
