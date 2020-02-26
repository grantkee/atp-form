const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require routes here
const authRouter = require("./routers/authRouter");
const clientsRouter = require("./routers/clientsRouter");

//calling middleware to log network activity
const { logger } = require('./middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());

//logging network activity with req.path and timestamp
app.use(logger);

//using authorization router here. should generate a token upon signing up and then verify correct login information
app.use('/auth', authRouter)

//app.use( all api routes) here
app.use("/api", clientsRouter);


app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port} :D`);
});