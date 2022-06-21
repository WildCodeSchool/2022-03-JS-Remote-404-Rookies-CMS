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
      `select k.title, k.sub_title from kpi as k
      where h.languages_id = ?`,
      [languagesId]
    );
  }
}

module.exports = KpiManager;
