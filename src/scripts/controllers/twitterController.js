app.controller('twitterCtrl', function($scope, $q, twitterService) {
    $scope.tweets = []; //array of tweets







var Twit = require('twit');

    var T = new Twit({
  consumer_key:         'mDrjdrddeyVVvgbzt5M1WuJgi',
  consumer_secret:      'NQuKAMWbuXAPo1PjHZGF7cuqBKtP7SoOf5n7DUT3ZbmxSDDTwQ',
  access_token:         '43465312-wq1Lkqh2BZrE20fMXbKM3Lw5TKVVdvSnnsMXRqTTY',
  access_token_secret:  'rZa5CdRg6OvBZPX3qb0VJ8iZXZQjZkSsJuxHjs4J1niK4',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


   $scope.tweets =  t.get('search/tweets', {count:5}, function(err, data, responses){
        return data;
    });





//     twitterService.initialize();

//     //using the OAuth authorization result get the latest 20 tweets from twitter for the user
//     $scope.refreshTimeline = function(maxId) {
//         twitterService.getLatestTweets(maxId).then(function(data) {
//             $scope.tweets = $scope.tweets.concat(data);
//         }, function() {
//             $scope.rateLimitError = true;
//         });
//     }

//     //when the user clicks the connect twitter button, the popup authorization window opens
//     $scope.connectButton = function() {
//         twitterService.connectTwitter().then(function() {
//             if (twitterService.isReady()) {
//                 //if the authorization is successful, hide the connect button and display the tweets
//                 $('#connectButton').fadeOut(function() {
//                     $('#getTimelineButton, #signOut').fadeIn();
//                     $scope.refreshTimeline();
//                     $scope.connectedTwitter = true;
//                 });
//             } else {

//             }
//         });
//     }

//     //sign out clears the OAuth cache, the user will have to reauthenticate when returning
//     $scope.signOut = function() {
//         twitterService.clearCache();
//         $scope.tweets.length = 0;
//         $('#getTimelineButton, #signOut').fadeOut(function() {
//             $('#connectButton').fadeIn();
//             $scope.$apply(function() {
//                 $scope.connectedTwitter = false
//             })
//         });
//     }

//     //if the user is a returning user, hide the sign in button and display the tweets
//     if (twitterService.isReady()) {
//         $('#connectButton').hide();
//         $('#getTimelineButton, #signOut').show();
//         $scope.connectedTwitter = true;
//         $scope.refreshTimeline();
//     }
});