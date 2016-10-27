'use strict'
var express = require('express'),
    router = express.Router(),
    Twit = require('twit'),
    config = require('../config');




// initialize Twit 

const T = new Twit(config.twitter);

// Paramenters for 'user timeline' call


const tweetCount = 12;
const userTimelineURL = 'statuses/user_timeline';
const listTimelineURL = 'lists/list';



router.get('/user_timeline/:user', function (req, res) {

    var tweets = [];

    var params = {
            screen_name: req.params.user,
            count: 12
    };

    T.get(userTimelineURL, params, function (err, data, response) {

         tweets = data;
         res.send(tweets);
    });
    
console.log(   `tweet request served for ${req.params.user}`)
});

router.get('lists/:list', function (req, res) {

    var tweets = [];
    var params = {
        list_id: req.params.list,
        count: 12
    };

    T.get(listTimelineURL, params, function (err, data, response) {

        tweets = data;
        return tweets;

    });


});

module.exports = router;