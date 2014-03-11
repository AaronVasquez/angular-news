'use strict';

var app = angular.module('angularNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);
app.constant('FIREBASE_URL', 'https://amber-fire-7442.firebaseio.com/');
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
