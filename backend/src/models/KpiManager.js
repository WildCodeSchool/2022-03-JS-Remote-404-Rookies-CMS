const AbstractManager = require("./AbstractManager");

class KpiManager extends AbstractManager {
  static table = "kpi";

  insert(kpi) {
    return this.connection.query(
      `insert into ${KpiManager.table} (title) values (?)`,
      [kpi.title]
    );
  }

  update(id, object) {
    return this.connection.query(
      `update ${KpiManager.table} set ? where id = ?`,
      [object, id]
    );
  }

  updateKpiElement(id, object) {
    return this.connection.query(`update kpi_element set ? where id = ?`, [
      object,
      id,
    ]);
  }

  findKpi(languagesId) {
    return this.connection.query(
      `select id, title, sub_title, languages_id from kpi
      where languages_id = ?`,
      [languagesId]
    );
  }

  findKpiElement(languagesId) {
    return this.connection.query(
      `select number, label, id from kpi_element
      where KPI_id = ?`,
      [languagesId]
    );
  }
}

module.exports = KpiManager;
