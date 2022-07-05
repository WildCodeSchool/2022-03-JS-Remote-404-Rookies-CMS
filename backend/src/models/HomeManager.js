const AbstractManager = require("./AbstractManager");

class HomeManager extends AbstractManager {
  static table = "home";

  insert(home) {
    return this.connection.query(
      `insert into ${HomeManager.table} (title) values (?)`,
      [home.title]
    );
  }

  update(id, newAttributes) {
    return this.connection.query(
      `update ${HomeManager.table} set ? where id = ?`,
      [newAttributes, id]
    );
  }

  findHome(languagesId) {
    return this.connection.query(
      `select h.id, h.title, h.text, h.CTA_label ,h.title_green_part, i.id as imgId, i.image_link, i.image_alt, im.id as BimgId, im.image_link as image_link_background, im.image_alt as image_alt_background from home as h
      inner join images as i on i.id = h.images_id
      inner join images as im on im.id = h.background_images_id
      where h.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = HomeManager;
