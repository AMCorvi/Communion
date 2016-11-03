app.controller('twitterCtrl', ['$scope', '$resource', '$timeout', function ($scope, $resource, $timeout) {



    function init() {

        // initialze default username
        $scope.username = 'redeenichi';
        //empty user_tweet model.
        $scope.userTweets = [];
        // empty list_tweet model        
        $scope.listTweets = [];

        $scope.getUserTweets();
    };

    // GET function tweet.js for 'RedeeNichi' timeline Tweets
    function getUserTweets() {

        var params = {
            user: 'redeenichi',
            action: 'user_timeline'
        };

        // create tweet data resource
        $scope.tweets = $resource('/tweets/:action/:user', params);

        // call call tweet data resource
        $scope.tweets.query({}, function (res) {

            $scope.userTweets = $scope.userTweets.concat(res);

            $timeout(() => console.log(res), 5000)

        });

    };


    $scope.getUserTweets = function () {
        getUserTweets();
        $timeout(()=> console.log($scope.userTweets),5000)
    };

    init();

}]); // end of twitterCtrl