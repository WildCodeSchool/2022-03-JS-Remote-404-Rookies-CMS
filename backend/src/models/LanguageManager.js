const AbstractManager = require("./AbstractManager");

class LanguagesManager extends AbstractManager {
  static table = "languages";

  insert(language) {
    return this.connection.query(
      `insert into ${LanguagesManager.table} (title) values (?)`,
      [language.title]
    );
  }

  update(language) {
    return this.connection.query(
      `update ${LanguagesManager.table} set title = ? where id = ?`,
      [language.title, language.id]
    );
  }
}

module.exports = LanguagesManager;
