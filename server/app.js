const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config()

app.use(cors({
    origin: '*'
}));

app.get('/getURL', (req, res) => {
    const url = process.env.MY_API_URL;
    const all_env = process.env;
    //todo ...

    res.json({url: url});
});

module.exports = app;