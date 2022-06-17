const AbstractManager = require("./AbstractManager");

class PresentationManager extends AbstractManager {
  static table = "presentation";

  insert(presentation) {
    return this.connection.query(
      `insert into ${PresentationManager.table} (title) values (?)`,
      [presentation.title]
    );
  }

  update(presentation) {
    return this.connection.query(
      `update ${PresentationManager.table} set title = ? where id = ?`,
      [presentation.title, presentation.id]
    );
  }

  findPresentation(languagesId) {
    return this.connection.query(
      `select p.title,p.sub_title, p.text1, p.text2, p.text3, p.CTA_label, i.image_link, i.image_alt from presentation as p
      inner join images as i on i.id = p.images_id 
      where p.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = PresentationManager;
