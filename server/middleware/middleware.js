const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log('Logging route:', `'${req.url}'`,'-', new Date().toISOString())
  next()
}

const authenticate = (req, res, next) => {
  let header = req.headers['authorization']
  let token = header.split(' ')[1]
  jwt.verify(token, 'secret', function(err, decoded) {
    console.log(decoded) // bar
    if(decoded){
      req.user = decoded
      next()
    }
    else {
      res.sendStatus(401)
    }
  });
}

module.exports = {
  logger,
  authenticate
}