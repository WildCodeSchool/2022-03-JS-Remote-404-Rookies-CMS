const AbstractManager = require("./AbstractManager");

class FooterManager extends AbstractManager {
  static table = "footer";

  insert(footer) {
    return this.connection.query(
      `insert into ${FooterManager.table} (title) values (?)`,
      [footer.title]
    );
  }

  update(footer) {
    return this.connection.query(
      `update ${FooterManager.table} set title = ? where id = ?`,
      [footer.title, footer.id]
    );
  }

  findFooter(languagesId) {
    return this.connection.query(
      `select f.phone_number, f.mail, f.sub_title1, f.sub_title2, f.copyright, f.terms, f.policy, f.newsletter ,i.image_link, i.image_alt from footer as f
      inner join images as i on i.id = f.images_id 
      where f.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = FooterManager;
