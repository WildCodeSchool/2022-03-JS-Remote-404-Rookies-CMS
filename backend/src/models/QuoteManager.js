const AbstractManager = require("./AbstractManager");

class QuoteManager extends AbstractManager {
  static table = "quote";

  insert(quote) {
    return this.connection.query(
      `insert into ${QuoteManager.table} (quote, quote_green_part,author,languages_id,images_id) values (?,?,?,?,?)`,
      [
        quote.quote,
        quote.quote_green_part,
        quote.author,
        quote.languages_id,
        quote.images_id,
      ]
    );
  }

  update(id, quote) {
    return this.connection.query(
      `update ${QuoteManager.table} set ? where id = ?`,
      [quote, id]
    );
  }

  findAllquote() {
    return this.connection.query(`select * from ${QuoteManager.table}`);
  }

  findQuote(languageId) {
    return this.connection.query(
      `select q.id, q.quote, q.quote_green_part, q.author, i.image_link, i.image_alt, i.id as imgId from quote as q
      inner join images as i on i.id = q.images_id
      where q.languages_id = ?`,
      [languageId]
    );
  }
}

module.exports = QuoteManager;
