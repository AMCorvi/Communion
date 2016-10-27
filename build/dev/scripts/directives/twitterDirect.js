app.directive('tweets', function(){
    return {
        restrict: 'E',
        scope: {
            tweet: '='
        },
        templateUrl: 'scripts/directives/twitterDirect.html'
    }
})