let mongoose = require('mongoose'),
  dataModel = {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    }
  },
  schema = new mongoose.Schema(dataModel);

module.exports = {
  model: mongoose.model('users', schema),
  dataModel: dataModel
};
