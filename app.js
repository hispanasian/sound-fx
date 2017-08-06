const player = require('play-sound')(opts = {});
const express = require('express');
const sounds = require('./lib/sounds');

const app = express();

app.use('/sounds', sounds);

// Serve our file
app.get('/', express.static('public'));

app.listen(3000, function () {
    console.log('sound-fx starting on port 3000.')
});
