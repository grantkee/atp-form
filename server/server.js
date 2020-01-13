const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//importing dummydata for testing server connection
const clients = require('./clientDemographics');

//require routes here


//calling middleware to log network activity
// const { logger } = require('./middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());
// app.use(logger);
app.use(express.static(path.join(__dirname, 'atp-form')))

//app.use(routes) here

app.get('/', (req, res) => {
    res.send('Testing route '/'')
});

app.get('/clients', (req, res) => {
    res.json(clients)
    console.log('sent clients array')
})

app.listen(port, () => {
    console.log(`Web server is listening on port ${port} :)`)
});