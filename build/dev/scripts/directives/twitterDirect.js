app.directive('twitterPosts', function(){
    return {
        restrict: 'E',
        scope: {
            tweet: '='
        },
        templateUrl: 'scripts/directives/twitterDirect.html'
    }
})