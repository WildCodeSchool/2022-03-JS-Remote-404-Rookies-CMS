const AbstractManager = require("./AbstractManager");

class GetStartedManager extends AbstractManager {
  static table = "get_started";

  insert(getStarted) {
    return this.connection.query(
      `insert into ${GetStartedManager.table} (title) values (?)`,
      [getStarted.title]
    );
  }

  update(getStarted) {
    return this.connection.query(
      `update ${GetStartedManager.table} set title = ? where id = ?`,
      [getStarted.title, getStarted.id]
    );
  }

  findGetStarted(languagesId) {
    return this.connection.query(
      `select cta1_label, cta2_label, languages_id from get_started
      where languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = GetStartedManager;
