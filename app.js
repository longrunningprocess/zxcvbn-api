var express = require('express');
var bodyParser = require('body-parser');
var zxcvbn = require('zxcvbn');

var app = express();

app.use(bodyParser.json());

app.post('/zxcvbn/score', function (req, res) {
    res.json({
        score: zxcvbn(req.body.password).score
    });
});

app.listen(3000);
