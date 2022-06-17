const AbstractManager = require("./AbstractManager");

class HomeManager extends AbstractManager {
  static table = "home";

  insert(home) {
    return this.connection.query(
      `insert into ${HomeManager.table} (title) values (?)`,
      [home.title]
    );
  }

  update(home) {
    return this.connection.query(
      `update ${HomeManager.table} set title = ? where id = ?`,
      [home.title, home.id]
    );
  }

  findHome(languagesId) {
    return this.connection.query(
      `select h.title, h.text, h.CTA_label ,i.image_link, i.image_alt from home as h
      inner join images as i on i.id = h.images_id 
      where h.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = HomeManager;
