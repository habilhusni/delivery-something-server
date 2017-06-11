'use strict'
const express     = require('express');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
require('dotenv').config();
const mongoose    = require('mongoose');
mongoose.connect(`mongodb://husnihabil:1234@ds119772.mlab.com:19772/deliverysomething`);
const app         = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index       = require('./routes/index');
app.use('/', index);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports    = app;
