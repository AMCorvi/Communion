'use strict'
const express = require('express'),
      sound = require('soundcloud'),
      {soundcloud} = require('../config')
      

sound.intialize({soundcloud});

sound.get('/me/connections').then(
    me => console.log(`me`)
)