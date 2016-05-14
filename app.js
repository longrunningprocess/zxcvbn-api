var express = require('express');
var bodyParser = require('body-parser');
var zxcvbn = require('zxcvbn');

var app = express();

app.use(bodyParser.json());

app.post('/zxcvbn/score', function (req, res) {
    if (req.body.password) {
        res
          .status(200)
          .json({
              score: zxcvbn(req.body.password).score
          });
    } else {
        res
          .status(400)
          .json({
              error: "password missing in POST body"
          });
    }
});

app.listen(3000);
