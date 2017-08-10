const player = require('play-sound')(opts = {});
const express = require('express');

const router = express.Router();
const root = './media'

function play(file)
{
  return function(req, res)
  {
    res.sendStatus(204);
    player.play(file, (function (err) {
      if (err) {
        console.error(err);
      }
    }));
  };
};

router.post('/powerAttack', play(`${root}/power-attack.mp3`));

router.post('/surpriseAttack', play(`${root}/surprise-attack.mp3`));

router.post('/snatched', play(`${root}/snatched.mp3`));

router.post('/timeBlasterUnlocked', play(`${root}/time-blaster-unlocked.mp3`));

router.post('/stationComplete', play(`${root}/station-complete.mp3`));

router.post('/shutdownCommencing', play(`${root}/shutdown-commencing.mp3`));

router.post('/oneMinuteRemaining', play(`${root}/minute-remaining.mp3`));

router.post('/powerDiamond', play(`${root}/power-diamond.mp3`));

module.exports = router;
