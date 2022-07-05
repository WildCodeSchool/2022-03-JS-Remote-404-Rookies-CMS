const AbstractManager = require("./AbstractManager");

class NewsletterComponentManager extends AbstractManager {
  static table = "newsletter_component";

  insert(item) {
    return this.connection.query(
      `insert into ${NewsletterComponentManager.table} (title) values (?)`,
      [item.title]
    );
  }

  findAll(languagesId) {
    return this.connection.query(
      `select title, text, cta_label from ${NewsletterComponentManager.table} where languages_id = ? `,
      [languagesId]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${NewsletterComponentManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}
module.exports = NewsletterComponentManager;
