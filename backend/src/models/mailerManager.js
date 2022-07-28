const AbstractManager = require("./AbstractManager");

class mailerManager extends AbstractManager {
  static table = "item";

  find() {
    return this.connection.query(`select * from adminmail`);
  }
}

module.exports = mailerManager;
