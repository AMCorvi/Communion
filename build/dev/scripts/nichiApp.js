var app = angular.module('Nichi', ['ngResource', 'ngSanitize']);




app.controller('twitterCtrl',  ['$scope','$resource','$timeout', function ($scope, $resource, $timeout) {



    function init() {

        // initialze default username
        $scope.username = 'redeenichi';

        //empty user_tweet model.
        $scope.userTweets = [];
        // empty list_tweet model        
        $scope.listTweets = [];



        $scope.getUserTweets();
    };

    function getUserTweets(){

        var params = {
           user:  'redeenichi',
           action: 'user_timeline'
        };

        // create tweet data resource
            $scope.tweets = $resource('/tweets/:action/:user', params);

        // call call tweet data resource
            $scope.tweets.query( { }, function (res) {

            $scope.userTweets = $scope.userTweets.concat(res);

            $timeout(function(){
                console.log(`Here are the tweets of from ${res}`)
            }, 8000)
      });


    };

    // function getListTweets(){

    //     var params = {
    //         action: 'lists',
    //         list: 89859752
    //     }

    //     $scope.listTweets = $resource('/tweets/:action/:list', params)

    // };

$scope.getUserTweets = function(){
    getUserTweets();
};


init();

// DEBUG:  Test array to simulate $resource request. 
$scope.test = [
    {
        text: 'Text here',
        created_at: 2016,
        screen_name: '@twitter'
    },
    {
        text: 'Text there',
        created_at: 2015,
        screen_name: '@litter'
    }
];


}]);

