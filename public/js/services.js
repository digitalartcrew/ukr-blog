var app = angular.module("ukrApp");

app.service("BlogService",['$resource', function($resource){
    return $resource('/api/posts/:id', {id: '@_id'}, {
        update : {
            method: 'PUT'
        },
    });
}]);
    