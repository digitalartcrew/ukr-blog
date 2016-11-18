app.controller('blogController',['$scope','BlogService','$http','$state', function($scope, BlogService, $http, $state){

	$scope.posts = BlogService.query();

	$scope.voteUp = function (post) {
		// console.log(post);
	};

	$scope.voteDown = function (post){
		post.meta.voteCount--;
	};

	$scope.postForm = false;
	$scope.toggle = function() {
		$scope.postForm = !$scope.postForm;
	};

	// $scope.postComment = false;
	// $scope.toggle2 = function() {
	// 	this.postComment = !this.postComment;
	// 	this.showComment = false;
	// };

	// $scope.showComment = false;
	// $scope.toggle3 = function() {
	// 	this.showComment = !this.showComment;
	// 	this.postComment = false;
	// };

	// $scope.addComment = function(post, comment){
	// 	post.comments.push(comment);
	// 	this.postComment = false;
	// 	$scope.comment = {};
	// };

	$scope.addPost = function(post){
		
		BlogService.save(post);
		$scope.posts = BlogService.query();
      	$scope.postForm = false;
      	
	};

	// $scope.readPost = function(){
	// 	$http.get('/api/post/' + $routeParams.id).
	// 	success(function(data) {
	// 		$scope.form = data.post;
	// 	});
	// };
	// $scope.updatePost = function(){
	// 	$http.put('/api/post/' + $routeParams.id, $scope.form).
	// 	success(function(data) {
	// 		$location.url('/readPost/' + $routeParams.id);
	// 	});
	// };
	// $scope.deletePost = function(){
	// 	$http.delete('/api/post/' + $routeParams.id).
	// 	success(function(data) {
	// 		$location.url('/');
	// 	});
	// };


	$scope.predicate="date";
	$scope.order =
	function(predicate){
		$scope.reverse = 
		($scope.predicate === predicate)?
		!$scope.reverse : false;
		$scope.predicate = predicate;
	};

}]);

app.controller('logController',['$scope', '$http', '$rootScope', '$location', '$state', function($scope, $http, $rootScope, $location, $state){

	$scope.account = function(){
		$state.go('form.account');
	};

	$scope.home = function(){
		$state.go('form.post');
	};
	//Sign Up
	$scope.signup = function(user) {
		if (user.password == user.password2) {
			$http.post('/signup', user)
			.success(function(user) {
				$rootScope.currentUser = user;
				$state.go('form.post');
			});
		}
	};

	$scope.login = function(user) {
		$http.post('/login', user)
		.success(function(response) {
			$rootScope.currentUser = response;
			$state.go('form.post');
		});
	};

	$scope.logout = function() {
		$http.post("/logout")
		.success(function() {
			$rootScope.currentUser = null;
			$location.url("/login");
		});
	};
}]);

app.controller('accountController',['$scope', function($scope){}]);



