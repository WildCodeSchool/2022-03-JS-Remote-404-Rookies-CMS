const AbstractManager = require("./AbstractManager");

class ContactFormManager extends AbstractManager {
  static table = "contact_form";

  insert(item) {
    return this.connection.query(
      `insert into ${ContactFormManager.table} (title) values (?)`,
      [item.title]
    );
  }

  find(languagesId) {
    return this.connection.query(
      `select * from  ${this.table} where languages_id = ? `,
      [languagesId]
    );
  }

  findOption(id) {
    return this.connection.query(
      `select id,text,value from contact_form_and_newsletter_options where contact_form_id = ? `,
      [id]
    );
  }

  updateOption(item) {
    return this.connection.query(
      `update contact_form_and_newsletter_options set ? where id = ?`,
      [item, item.id]
    );
  }

  update(id, item) {
    return this.connection.query(
      `update ${ContactFormManager.table} set ? where id = ?`,
      [item, id]
    );
  }
}

module.exports = ContactFormManager;
