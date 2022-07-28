const AbstractManager = require("./AbstractManager");

class PresentationAdvantagesManager extends AbstractManager {
  static table = "presentation_advantages";

  insert(presentation) {
    return this.connection.query(
      `insert into ${PresentationAdvantagesManager.table} (title) values (?)`,
      [presentation.title]
    );
  }

  update(id, object) {
    return this.connection.query(
      `update ${PresentationAdvantagesManager.table} set ? where id = ?`,
      [object, id]
    );
  }

  updateElement(id, object) {
    return this.connection.query(
      `update presentation_advantages_element set ? where id = ?`,
      [object, id]
    );
  }

  findPresentationAdvantages(languagesId) {
    return this.connection.query(
      `select p.id, p.title,p.sub_title, p.text, p.CTA_phone, p.CTA_label, pa.id as id1, pa.summary, paa.id as id2, paa.summary as summary2, paaa.summary as summary3, pa.details, paa.details as details2, paaa.id as id3, paaa.details as details3 from presentation_advantages as p
      inner join presentation_advantages_element as pa on pa.id = 1
      inner join presentation_advantages_element as paa on paa.id = 2
      inner join presentation_advantages_element as paaa on paaa.id = 3
      where p.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = PresentationAdvantagesManager;
