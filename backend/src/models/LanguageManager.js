const AbstractManager = require("./AbstractManager");

class LanguagesManager extends AbstractManager {
  static table = "languages";

  insert(language) {
    return this.connection.query(
      `insert into ${LanguagesManager.table} (languages, status, images_link, images_alt) values (?,?,?,?)`,
      [
        language.languages,
        language.status,
        language.images_link,
        language.images_alt,
      ]
    );
  }

  update(language) {
    return this.connection.query(
      `update ${LanguagesManager.table} set ? where id = ?`,
      [language, language.id]
    );
  }
}

module.exports = LanguagesManager;
