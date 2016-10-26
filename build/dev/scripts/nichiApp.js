var app = angular.module('Nichi', ['ngResource', 'ngSanitize']);




app.controller('twitterCtrl',  function ($scope, $resource, $timeout) {



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

        $scope.tweets.query( { }, function (res) {

        $scope.userTweets = $scope.userTweets.concat(res);

        console.log(`Here are the tweets of from ${res}`)

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


});

