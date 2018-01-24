const express = require('express');
const bodyParser = require('body-parser');
const bountyRoute = require('./routes/bounties');

const app = express();
let port = 8675;

app.use(bodyParser.json());

app.use('/', bountyRoute);

app.listen(port, () => {
    console.log('Listening in on port ' + port);

})