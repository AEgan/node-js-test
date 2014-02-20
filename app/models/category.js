/*
 * Example category model
 *
 */

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {type: String, required: true},
  active: {type: Boolean, default: true}
});

mongoose.model('Category', CategorySchema);