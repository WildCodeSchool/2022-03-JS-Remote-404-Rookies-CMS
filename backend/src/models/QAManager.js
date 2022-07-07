const AbstractManager = require("./AbstractManager");

class QAManager extends AbstractManager {
  static table = "QA";

  insert(QA) {
    return this.connection.query(
      `insert into ${QAManager.table} (title) values (?)`,
      [QA.title]
    );
  }

  update(id, data) {
    return this.connection.query(
      `update ${QAManager.table} set ? where id = ?`,
      [data, id]
    );
  }

  updateQaElements(id, data) {
    return this.connection.query(`update qa_element set ? where id = ?`, [
      data,
      id,
    ]);
  }

  findQA(languagesId) {
    return this.connection.query(
      `select id, languages_id, title, sub_title from qa q
      where q.languages_id = ?`,
      [languagesId]
    );
  }

  findQAElement(languagesId) {
    return this.connection.query(
      `select id, question, answer from qa_element as qa
      where qa.FAQ_id = ?`,
      [languagesId]
    );
  }
}

module.exports = QAManager;
