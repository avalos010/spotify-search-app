const Spotify = require('node-spotify-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
let spotify = new Spotify({
    id: '9dbe35ea2e34460788c9594ccb1cd22c',
    secret: 'ad08907f3ec440c6bc6376968f8b599b'
})

app.use(bodyParser());
app.use(cors());

app.get('/',(req,res) => {
    res.send('Server up and Running');
});


app.post('/search', (req,res) => {
    req.body && spotify.search({type: 'track', query: req.body.term})
    .then(data => res.json(data.tracks.items))
});

app.listen(process.env.PORT||3050, () => {
    console.log('port up and running');
})
