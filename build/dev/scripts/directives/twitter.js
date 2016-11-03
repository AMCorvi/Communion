app.directive('twitterPost', function(){
    return {
        restrict: 'E',
        scope: {
            posts: '='
        },
        templateUrl: 'scripts/directives/twitter.html'
    }
})