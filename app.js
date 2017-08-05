const player = require('play-sound')(opts = {});

player.play('./media/minute-remaining.mp3', function (err) {
    if (err) throw err
})
