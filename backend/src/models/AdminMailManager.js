const AbstractManager = require("./AbstractManager");

class AdminMailManager extends AbstractManager {
  static table = "adminMail";

  find() {
    return this.connection.query(`select * from adminMail`);
  }

  update(item) {
    return this.connection.query(
      `update ${AdminMailManager.table} set AdminMail = ? where id = 1`,
      [item.AdminMail]
    );
  }
}

module.exports = AdminMailManager;
