const player = require('play-sound')(opts = {});
const express = require('express');

const router = express.Router();

function play(file)
{
  player.play(file, (function (err) {
    if (err) {
      console.error(err);
    }
  }));
};

router.post('/powerAttack', () =>
{
  play('../media/power-attack.mp3');
});

router.post('/surpriseAttack', () =>
{
  play('../media/surprise-attack.mp3');
});

router.post('/snatched', () =>
{
  play('../media/snatched.mp3');
});

router.post('/timeBlasterUnlocked', () =>
{
  play('../media/time-blaster-unlocked.mp3');
});


router.post('/stationComplete', () =>
{
  play('../media/station-complete.mp3');
});


router.post('/shutdownCommencing', () =>
{
  play('../media/shutdown-commencing.mp3');
});


router.post('/oneMinuteRemaining', () =>
{
  play('../media/minute-remaining.mp3');
});

router.post('/powerDiamond', () =>
{
  play('../media/power-diamond.mp3');
});

module.exports = reouter;
