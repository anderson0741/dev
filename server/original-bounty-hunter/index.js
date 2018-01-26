const express = require('express');
const bodyParser = require('body-parser');
const bountyRoute = require('./routes/bounties');
const config = require("./config");
const cors = require('cors');

const app = express();
let port = 8675;

app.use(cors());
app.use(bodyParser.json());
app.use('/', bountyRoute);

app.listen(config.port, () => {
    console.log('Listening in on port ' + port);
})