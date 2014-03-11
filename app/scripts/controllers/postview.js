'use strict';

app.controller('PostViewCtrl', function($scope, $routeParams, Post) {
  $scope.post = Post.find($routeProvider.postId);
});