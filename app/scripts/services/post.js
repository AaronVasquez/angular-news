'user strict';

app.factory('Post', function($resource){
  return $resource("https://amber-fire-7442.firebaseio.com/posts/:id.json");
});