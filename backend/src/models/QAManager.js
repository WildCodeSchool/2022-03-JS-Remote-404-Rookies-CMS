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
      `select languages_id, title, sub_title from qa q
      where q.languages_id = ?`,
      [languagesId]
    );
  }

  findQAElement(languagesId) {
    return this.connection.query(
      `select question, answer from qa_element as qa
      where qa.FAQ_id = ?`,
      [languagesId]
    );
  }
}

module.exports = QAManager;
