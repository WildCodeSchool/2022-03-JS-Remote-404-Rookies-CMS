const AbstractManager = require("./AbstractManager");

class NavigationManager extends AbstractManager {
  static table = "navigation";

  insertNavigation(Navigation) {
    return this.connection.query(
      `insert into ${NavigationManager.table} (Navigation_link, Navigation_alt, status, url, categorie) values (?, ?, ?, ?, ?)`,
      [
        Navigation.Navigation_link,
        Navigation.Navigation_alt,
        Navigation.status,
        Navigation.url,
        Navigation.categorie,
      ]
    );
  }

  updateNavigation(Navigation) {
    return this.connection.query(
      `update ${NavigationManager.table} set title = ? where id = ?`,
      [Navigation.title, Navigation.id]
    );
  }

  findNavigation(id) {
    return this.connection.query(`select * from  Navigation where id = ?`, [
      id,
    ]);
  }

  findAllNavigations(languagesId) {
    return this.connection.query(
      `select * from navigation as n 
      inner join navigation_element as ne on ne.navigation_id = n.id
      inner join images as i on i.id = n.images_id
      where n.languages_id = ?`,
      [languagesId]
    );
  }

  findAllNavigationsForLogo() {
    return this.connection.query(
      `select * from Navigations where categorie = "logo"`
    );
  }

  deleteNavigation(id) {
    return this.connection.query(`delete from Navigations where id = ?`, [id]);
  }
}

module.exports = NavigationManager;
