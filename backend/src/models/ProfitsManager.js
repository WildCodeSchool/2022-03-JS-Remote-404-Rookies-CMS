const AbstractManager = require("./AbstractManager");

class ProfitManager extends AbstractManager {
  static table = "profit";

  insert(profit) {
    return this.connection.query(
      `insert into ${ProfitManager.table} (title) values (?)`,
      [profit.title]
    );
  }

  update(profit) {
    return this.connection.query(
      `update ${ProfitManager.table} set title = ? where id = ?`,
      [profit.title, profit.id]
    );
  }

  findProfit(languagesId) {
    return this.connection.query(
      `select p.title, p.sub_title, from profit as p
      where p.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProfitManager;
