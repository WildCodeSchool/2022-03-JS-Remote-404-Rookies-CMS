const AbstractManager = require("./AbstractManager");

class AdminMailManager extends AbstractManager {
  static table = "adminmail";

  find() {
    return this.connection.query(`select * from adminmail`);
  }

  update(item) {
    return this.connection.query(
      `update ${AdminMailManager.table} set AdminMail = ? where id = 1`,
      [item.AdminMail]
    );
  }
}

module.exports = AdminMailManager;
