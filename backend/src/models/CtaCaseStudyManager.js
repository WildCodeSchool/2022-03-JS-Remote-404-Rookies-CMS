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

  update(cta_case_study) {
    return this.connection.query(
      `update ${CtaCaseStudy.table} set text = ? where id = ?`,
      [cta_case_study.text, cta_key_study.id]
    );
  }

  findCtaCaseStudy(languagesId) {
    return this.connection.query(
      `select c.text,p.label, from cta_study_case as c
      where c.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = CtaCaseStudy;
