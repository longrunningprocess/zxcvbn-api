Web API built with Node and Express.  It wraps
[Dropbpx's zxcvbn](https://github.com/dropbox/zxcvbn) library just in case
you need to verify a password's strength on both the client and server
with a guarantee of the same result from both.

# Environmental config

[Node.js](https://nodejs.org) must be installed.

Optionally, [Docker](https://www.docker.com/) and/or
[cURL](https://curl.haxx.se/)

# Initial app config
`npm install`

# Testing
`npm test`

# Starting app

## For normal people

`npm start`

`npm run start:dev` for automatic node restart when code changes.

## For studs

 `npm run docker:start`

# Available API's

> POST is required for security reasons.  Think of the call as a request
for the creation of a strength estimation.  API assumes SSL protocol.

### POST `/zxcvbn`

#### Request body
```json
{
    "password": "horsebatterystaple"
}
```
#### Returns
zxcvbn result described [here](https://github.com/dropbox/zxcvbn#usage)

### POST `/zxcvbn/score`

#### Request body
```json
{
    "password": "horsebatterystaple"
}
```

#### Returns
```json
{
    "score": [0-4]
}
```

# Testing

`curl -H "Content-Type: application/json" -X POST -d '{"password":"asdfghgfd"}' http://localhost:3000/zxcvbn/score`

# Stopping app
`Ctrl-c` if started with `npm start` | `npm run start:dev`

`npm run docker:stop` if started with `npm run docker:start`

# Additional resources

[Docker image](https://hub.docker.com/r/wcjr/zxcvbn-api)

[Why a strength estimator?](https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation)

[Looking for a PHP client?](https://github.com/silinternational/zxcvbn-api-client-php)
