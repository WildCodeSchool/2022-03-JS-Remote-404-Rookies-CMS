const AbstractManager = require("./AbstractManager");

class ProcessManager extends AbstractManager {
  static table = "process";

  insert(process) {
    return this.connection.query(
      `insert into ${ProcessManager.table} (title) values (?)`,
      [process.title]
    );
  }

  update(process) {
    return this.connection.query(
      `update ${ProcessManager.table} set title = ? where id = ?`,
      [process.title, process.id]
    );
  }

  findProcess(languagesId) {
    return this.connection.query(
      `select p.title, p.sub_title, p.text, h.CTA_label ,i.image_link, i.image_alt from process as p
      inner join images as i on i.id = p.images_id 
      where p.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProcessManager;
