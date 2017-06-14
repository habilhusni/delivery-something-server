'use strict'
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var dataSchema  = new Schema({
  place     : String,
  longitude : Number,
  latitude  : Number,
});

const Data      = mongoose.model('Data', dataSchema);

module.exports  = Data;
