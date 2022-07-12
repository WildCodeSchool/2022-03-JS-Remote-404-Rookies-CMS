const AbstractManager = require("./AbstractManager");

class ContactUsManager extends AbstractManager {
  static table = "Contact_us";

  insert(contactUs) {
    return this.connection.query(
      `insert into ${ContactUsManager.table} (title) values (?)`,
      [contactUs.title]
    );
  }

  update(contactUs) {
    return this.connection.query(
      `update ${ContactUsManager.table} set title = ? where id = ?`,
      [contactUs.title, contactUs.id]
    );
  }

  findAllContactUs() {
    return this.connection.query(`select * from ${ContactUsManager.table}`);
  }

  findContactUs(languageId) {
    return this.connection.query(
      `select cu.id, cu.text, cu.text_green, cu.label_phone, cu.phone, cu.label_email, cu.email, cu.label_rdv, cu.link_calendly, i.image_link, i.image_alt , im.image_link as bg_link, im.image_alt as bg_alt from contact_us as cu
      inner join images as i on i.id = cu.images_id
      inner join images as im on im.id = cu.bg_id
      where cu.languages_id = ?`,
      [languageId]
    );
  }
}

module.exports = ContactUsManager;
