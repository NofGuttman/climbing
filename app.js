const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// ENV vars
const atlasPassword = "F1reCak3";
const port = process.env.PORT || 3000;

// MiddleWares
app.use(express.json());
app.use(bodyParser.json());

// Routes
const gymsRoute = require('./api/routes/gyms');
app.use('/gyms', gymsRoute);

mongoose.connect('mongodb+srv://admin:' + atlasPassword + '@cluster0-glkqk.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.listen(port, () => console.log(`Listening to port ${port}`));