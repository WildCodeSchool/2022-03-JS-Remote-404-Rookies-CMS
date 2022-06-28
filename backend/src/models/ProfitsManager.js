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
      `select title, sub_title, languages_id from profit
      where languages_id = ?`,
      [languagesId]
    );
  }

  findProfitElement(languagesId) {
    return this.connection.query(
      `select p.title, p.text, i.image_link, image_alt from profit_elements as p inner join images as i where i.id = p.images_id and profit_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProfitManager;
