const AbstractManager = require("./AbstractManager");

class QAManager extends AbstractManager {
  static table = "QA";

  insert(QA) {
    return this.connection.query(
      `insert into ${QAManager.table} (title) values (?)`,
      [QA.title]
    );
  }

  update(QA) {
    return this.connection.query(
      `update ${QAManager.table} set title = ? where id = ?`,
      [QA.title, QA.id]
    );
  }

  findQA(languagesId) {
    return this.connection.query(
      `select q.title, q.sub_title from QA as q
      where q.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = QAManager;
