"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Listening on ' + PORT);
});

app.get('/', function(req, res) {
    res.sendFile("index.html");
});