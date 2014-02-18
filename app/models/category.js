/*
 * Example category model
 *
 */

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  active: Boolean
});

mongoose.model('Category', CategorySchema);