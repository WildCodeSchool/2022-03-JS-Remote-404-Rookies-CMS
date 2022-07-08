/* eslint-disable no-undef */
/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class CtaCaseStudy extends AbstractManager {
  static table = "cta_case_study";

  insert(cta_case_study) {
    return this.connection.query(
      `insert into ${CtaCaseStudy.table} (text) values (?)`,
      [cta_case_study.text]
    );
  }

  update(object, id) {
    return this.connection.query(
      `update ${CtaCaseStudy.table} set ? where id = ?`,
      [object, id]
    );
  }

  findCtaCaseStudy(languagesId) {
    return this.connection.query(
      `select c.text, c.id, c.cta_label from cta_case_study as c where c.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = CtaCaseStudy;
