let model_users = require('./model').model;

class Users {

  /**
   * Get all users
   * @return {Promise}
   */
  static getAll(callback) {
    model_users.find().select().exec(function(err, res) {
      if (err) {
        console.error(err);
        callback(err, {
          code: 500,
          data: {
            code: 500,
            message: "Internal server error"
          }
        });
      } else {
        callback(null, {
          code: 200,
          data: res
        });
      }
    });
  }

}

module.exports = Users;
