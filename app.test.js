const tap = require('tap');
const app = require('./app');
const request = require('supertest');

tap.test('a POST to /zxcvbn', function (thisTest) {
    request(app)
        .post('/zxcvbn')
        .send({
            password: 'horsebatterystaple'
        })
        .end(function (err, res) {
            // just going to check for some of the full zxcvbn object.
            thisTest.assert(res.body.hasOwnProperty('password'), 'should have the password.');
            thisTest.assert(res.body.hasOwnProperty('guesses'), 'should have guesses.');
            thisTest.assert(res.body.hasOwnProperty('calc_time'), 'should have a calc_time.');
            thisTest.assert(res.body.hasOwnProperty('score'), 'should have a score.');
            thisTest.assert(res.body.hasOwnProperty('feedback'), 'should have feedback.');

            thisTest.end();
        });
});

tap.test('a POST to /zxcvbn/score', function (thisTest) {
    request(app)
        .post('/zxcvbn/score')
        .send({
            password: 'horsebatterystaple'
        })
        .end(function (err, res) {
            thisTest.assert(res.body.hasOwnProperty('score'), 'should have a score');
            thisTest.equal(Object.keys(res.body).length, 1, 'should contain only a score.');

            thisTest.end();
        });
});

tap.test('A POST to /zxcvbn without a password', function (thisTest) {
    request(app)
        .post('/zxcvbn')
        .end(function (err, res) {
            validatePasswordMissingError(thisTest, res);

            thisTest.end();
        });
});

function validatePasswordMissingError(test, res) {
    test.equal(res.status, 400, 'should respond with a 400.');
    test.equal(res.body.error.code, 400, 'should respond with an error object containing the code.');
    test.match(res.body.error.message, /password missing/, 'should respond with an error object containing a useful message.');
}

tap.test('A POST to /zxcvbn/score without a password', function (thisTest) {
    request(app)
        .post('/zxcvbn/score')
        .end(function (err, res) {
            validatePasswordMissingError(thisTest, res);

            thisTest.end();
        });
});
