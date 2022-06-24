const AbstractManager = require("./AbstractManager");

class QuoteManager extends AbstractManager {
  static table = "quote";

  insert(quote) {
    return this.connection.query(
      `insert into ${QuoteManager.table} (title) values (?)`,
      [quote.title]
    );
  }

  update(quote) {
    return this.connection.query(
      `update ${QuoteManager.table} set title = ? where id = ?`,
      [quote.title, quote.id]
    );
  }

  findAllquote() {
    return this.connection.query(`select * from ${QuoteManager.table}`);
  }

  findQuote(languageId) {
    return this.connection.query(
      `select q.id, q.quote, q.quote_green_part, q.author, i.image_link, i.image_alt from quote as q
      inner join images as i on i.id = q.images_id
      where q.languages_id = ?`,
      [languageId]
    );
  }
}

module.exports = QuoteManager;
