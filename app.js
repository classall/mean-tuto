const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const mongoURL = 'mongodb://localhost:27017/Mean';

mongoose.connect(mongoURL);

const port = 3005;

app.listen(port);

console.log(`Server is running on port: ${port}`);

app.use(express.static('public'));

let params = {
  router: router
};

app.use('/', require('./modules/users/route')(params));
