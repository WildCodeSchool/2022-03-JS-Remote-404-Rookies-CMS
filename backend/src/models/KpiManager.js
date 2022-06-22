const AbstractManager = require("./AbstractManager");

class KpiManager extends AbstractManager {
  static table = "KPI";

  insert(kpi) {
    return this.connection.query(
      `insert into ${KpiManager.table} (title) values (?)`,
      [kpi.title]
    );
  }

  update(kpi) {
    return this.connection.query(
      `update ${KpiManager.table} set title = ? where id = ?`,
      [kpi.title, kpi.id]
    );
  }

  findKpi(languagesId) {
    return this.connection.query(
      `select title, sub_title, languages_id from kpi
      where languages_id = ?`,
      [languagesId]
    );
  }

  findKpiElement(languagesId) {
    return this.connection.query(
      `select number, label from kpi_element
      where KPI_id = ?`,
      [languagesId]
    );
  }
}

module.exports = KpiManager;
