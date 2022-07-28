const AbstractManager = require("./AbstractManager");

class PresentationManager extends AbstractManager {
  static table = "presentation";

  insert(presentation) {
    return this.connection.query(
      `insert into ${PresentationManager.table} (title) values (?)`,
      [presentation.title]
    );
  }

  update(id, data) {
    return this.connection.query(
      `update ${PresentationManager.table} set ? where id = ?`,
      [data, id]
    );
  }

  findPresentation(languagesId, position) {
    return this.connection.query(
      `select p.title,p.sub_title, p.text1, p.text2, p.id, i.id as imgId, p.text3, p.CTA_label, i.image_link, i.image_alt from presentation as p
      inner join images as i on i.id = p.images_id 
      where p.languages_id = ? and p.navigation_id = ?`,
      [languagesId, position]
    );
  }
}

module.exports = PresentationManager;
