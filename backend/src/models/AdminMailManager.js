const AbstractManager = require("./AbstractManager");

class AdminMailManager extends AbstractManager {
  static table = "AdminMail";

  update(item) {
    return this.connection.query(
      `update ${AdminMailManager.table} set ? where id = ?`,
      [item.AdminMail, item.id]
    );
  }
}

module.exports = AdminMailManager;
