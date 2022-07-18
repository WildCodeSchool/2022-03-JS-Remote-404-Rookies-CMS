const AbstractManager = require("./AbstractManager");

class ProcessManager extends AbstractManager {
  static table = "process";

  insert(process) {
    return this.connection.query(
      `insert into ${ProcessManager.table} (title) values (?)`,
      [process.title]
    );
  }

  update(id, process) {
    return this.connection.query(
      `update ${ProcessManager.table} set ? where id = ?`,
      [process, id]
    );
  }

  updateProcessElements(id, process) {
    return this.connection.query(`update process_element set ? where id = ?`, [
      process,
      id,
    ]);
  }

  findProcess(languagesId, position) {
    return this.connection.query(
      `select p.languages_id, p.id, p.title, p.images_id as imgId, p.sub_title, p.text, i.image_link, i.image_alt from process as p
      inner join images as i on i.id = p.images_id 
      where p.languages_id = ? and p.navbar_id = ?`,
      [languagesId, position]
    );
  }

  findProcessElement(languagesId) {
    return this.connection.query(
      `select title, text, id from process_element
      where process_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProcessManager;
