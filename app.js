var express = require('express'),
    path = require('path'),
    index = require('./routes/index'),
    tweets = require('./routes/tweets'),
    favicon = require('serve-favicon'),
    app = express();

env = (process.env.NODE_ENV == 'development') ? 'dev' : 'prod'

// set static files to be served from 
app.use(express.static(path.join(__dirname, 'build', env)));

// send the all important favicon
app.use(favicon(__dirname + '/src/images/favicon.ico'));

//set views folder  
app.set('views', path.join(__dirname, 'views'));

//set render engine
app.set('view engine', 'pug')

//set routes

app.use('/', index);
app.use('/tweets', tweets)

//find a server that is a good listener at port 3005
var port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`We can hear you now on port ${port}`)
});