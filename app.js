var express = require('express');
var bodyParser = require('body-parser');
var zxcvbn = require('zxcvbn');

var app = express();

app.use(bodyParser.json());

app.all('/zxcvbn', function (req, res, next) {
    if (req.body.password) {
        next();
    } else {
        res
          .status(400)
          .json({
              message: "password missing in POST body"
          });
    }
});

app.post('/zxcvbn', function (req, res) {
    res.send(zxcvbn(req.body.password));
});

app.post('/zxcvbn/score', function (req, res) {
    res.send({
        score: zxcvbn(req.body.password).score
    });
});

app.listen(process.env.PORT || 3000);
