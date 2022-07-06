const AbstractManager = require("./AbstractManager");

class ProfitManager extends AbstractManager {
  static table = "profit";

  insert(profit) {
    return this.connection.query(
      `insert into ${ProfitManager.table} (title) values (?)`,
      [profit.title]
    );
  }

  update(id, data) {
    return this.connection.query(
      `update ${ProfitManager.table} set ? where id = ?`,
      [data, id]
    );
  }

  updateProfitElements(id, data) {
    return this.connection.query(`update profit_element set ? where id = ?`, [
      data,
      id,
    ]);
  }

  upadateProfitImage(id, data) {
    return this.connection.query(`update images set ? where id = ?`, [
      data,
      id,
    ]);
  }

  findProfit(languagesId) {
    return this.connection.query(
      `select id, title, sub_title, languages_id from profit
      where languages_id = ?`,
      [languagesId]
    );
  }

  findProfitElement(languagesId) {
    return this.connection.query(
      `select p.id, p.title, p.text, i.image_link, image_alt from profit_elements as p inner join images as i where i.id = p.images_id and profit_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProfitManager;
