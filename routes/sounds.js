'use strict'
var express = require('express');
var sound = require('node-soundcloud');
var config = require('../config');
var router = express.Router();





sound.init(config.soundcloud);



// router.get('/connect', function (req, res) {

// sound.get('/users/829120/tracks', function (err, track) {
//   if (err) {
//     throw err;
//   } else {
//     track.map(function (v, i, a) {
//       console.log(v.track);
//     });
//   }
// })
// });





// router.get('/authorize', function (req, res) {
//   var code = req.query.code;

//   sound.authorize(code, function (err, accessToken) {
//     if (err) {
//       throw err;
//     } else {
//       // Client is now authorized and able to make API calls 
//       console.log('access token: ', accessToken);
//     }
//   });
// });


// var song = [];

// sound.get('/tracks/13158665', function (err, track) {

//   //handle response whetehr erroe or json
//   if (err) {
//     throw err;
//   } else {
//     song.push(track);
//   }

//   //send response
//   res.send(song);
// });

module.exports = router;