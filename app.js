const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const mongoURL = 'mongodb://localhost:27017/Mean';

mongoose.connect(mongoURL);

const port = 8080;

app.listen(port);

console.log(`Server is running on port: ${port}`);

router.get('/api', (request, response) => {
  response.status(200).send({
    message: 'Hello World!'
  });
});

router.get('/api/users', (request, response) => {
  let users = [{
    first_name: 'Pingouin',
    last_name: 'Moche'
  }, {
    first_name: 'Tanguy',
    last_name: 'Chameau'
  }];

  response.status(200).send(users);
});

app.use(router);

app.use(express.static('public'));
