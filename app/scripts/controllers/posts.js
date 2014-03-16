'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {
  $scope.posts = Post.all;
  $scope.post = { url: 'http://', title: ''};

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(response) {
      $location.path('/posts/' + response.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };
});