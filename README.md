# Environmental config

[node](https://nodejs.org) must be installed.

# Initial app config
`npm install`

# Starting app

`npm start` | `npm run docker:start`

`npm run start:dev` for automatic node restart when code changes.

# Test

`curl -H "Content-Type: application/json" -X POST -d '{"password":"asdfghgfd"}' http://localhost:3000/zxcvbn/score`

# Stopping app
`^c` if started with `npm start` | `npm run start:dev`

`npm run docker:stop` if started with `npm run docker:start`

# Additional resources
[Docker image](https://hub.docker.com/r/wcjr/zxcvbn-api)
