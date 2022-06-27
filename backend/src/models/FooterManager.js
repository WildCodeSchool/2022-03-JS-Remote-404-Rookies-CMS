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
      `select f.languages_id, f.phone_number, f.mail, f.sub_title1, f.sub_title2, f.copyright, f.terms, f.policy, f.newsletter ,i.image_link, im.image_link as image_link2, i.image_alt, im.image_alt as image_alt2, imm.image_link as image_logo_link, imm.image_alt as image_logo_alt, immm.image_link as instagram_logo_link, immm.image_alt as instagram_logo_alt, immmm.image_link as linkedin_logo_link, immmm.image_alt as linkedin_logo_alt from footer as f
      inner join images as i on i.id = f.images_logo1_id
      inner join images as im on im.id = f.images_logo2_id
      inner join images as imm on imm.id = f.rookies_logo
      inner join images as immm on immm.id = f.instagram_logo
      inner join images as immmm on immmm.id = f.linkedin_logo
      where f.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = FooterManager;
