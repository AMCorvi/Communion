'use strict'
import * as express from 'express';
import soundcloud from 'config';
import * as sound from 'soundcloud';
const  router = express.Router();


sound.intialize({soundcloud});

sound.get('/me/connections').then(
    me => console.log(`me`)
)