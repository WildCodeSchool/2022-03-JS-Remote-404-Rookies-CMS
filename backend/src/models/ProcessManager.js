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
      `select p.languages_id, p.title, p.sub_title, p.text, i.image_link, i.image_alt from process as p
      inner join images as i on i.id = p.images_id 
      where p.languages_id = ?`,
      [languagesId]
    );
  }

  findProcessElement(languagesId) {
    return this.connection.query(
      `select title, text from process_element
      where process_id = ?`,
      [languagesId]
    );
  }
}

module.exports = ProcessManager;
