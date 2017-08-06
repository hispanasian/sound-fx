const player = require('play-sound')(opts = {});
const express = require('express');



player.play('./media/minute-remaining.mp3', function (err) {
    if (err) throw err
    });
