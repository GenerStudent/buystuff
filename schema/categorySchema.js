var mongoose = require('mongoose');

var catagorySchema = {
    _id:{type:String},
    parent:{
      type:String,
      ref:'Category'
    },
    ancestors:[{
      type:String,
      ref:'Category'
    }]
};
module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;
