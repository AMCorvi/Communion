var express = require('express'),
    router = express.Router();

    // Req:GET index pages.

    router.get('/', function(req, res){
        res.render('index', {title: 'cookie.red'})
        console.log('request served from for index.')
    });

    module.exports= router;