const player = require('play-sound')(opts = {});
const express = require('express');

const router = express.Router();
const root = './media'

function play(file)
{
  player.play(file, (function (err) {
    if (err) {
      console.error(err);
    }
  }));
};

router.post('/powerAttack', (req, res) =>
{
  play(`${root}/power-attack.mp3`);
  res.sendStatus(200)
});

router.post('/surpriseAttack', (req, res) =>
{
  play(`${root}/surprise-attack.mp3`);
  res.sendStatus(200)
});

router.post('/snatched', (req, res) =>
{
  play(`${root}/snatched.mp3`);
  res.sendStatus(200)
});

router.post('/timeBlasterUnlocked', (req, res) =>
{
  play(`${root}/time-blaster-unlocked.mp3`);
  res.sendStatus(200)
});


router.post('/stationComplete', (req, res) =>
{
  play(`${root}/station-complete.mp3`);
  res.sendStatus(200)
});


router.post('/shutdownCommencing', (req, res) =>
{
  play(`${root}/shutdown-commencing.mp3`);
  res.sendStatus(200)
});


router.post('/oneMinuteRemaining', (req, res) =>
{
  play(`${root}/minute-remaining.mp3`);
  res.sendStatus(200)
});

router.post('/powerDiamond', (req, res) =>
{
  play(`${root}/power-diamond.mp3`);
  res.sendStatus(200)
});

module.exports = router;
