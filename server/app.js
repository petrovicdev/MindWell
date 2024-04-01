const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const host = '0.0.0.0'
const Movies = require('./movie');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());


app
.route('/api')
.get((req, res) => {
    Movies.find((err, found) => {
        if (err)
            return console.log(err)
        else {
            res.send(found)
        }
    })
})
.post((req, res) => {
    console.log('Connected to Reactjs')
})


app.listen(process.env.YOUR_PORT || process.env.PORT || port, host, () => {
    console.log('Listening to server on port ' + port)
})