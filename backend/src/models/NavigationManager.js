const AbstractManager = require("./AbstractManager");

class NavigationManager extends AbstractManager {
  static table = "navigation";

  insertNavigation(Navigation) {
    return this.connection.query(
      `insert into ${NavigationManager.table} (Navigation_link, Navigation_alt, status, url, categorie,) values (?, ?, ?, ?, ?)`,
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
    return this.connection.query(`update images set ? where id = ?`, [
      Navigation,
      Navigation.id,
    ]);
  }

  updateNavigationElement(Navigation) {
    return this.connection.query(
      `update navigation_element set ? where id = ?`,
      [Navigation, Navigation.id]
    );
  }

  findNavigation(languagesId) {
    return this.connection.query(
      `select n.id, n.languages_id, n.images_id, i.image_link, i.image_alt from  navigation as n 
      inner join images as i on i.id = n.images_id 
      where n.languages_id = ?`,
      [languagesId]
    );
  }

  findNavigationAll(navigationId) {
    return this.connection.query(
      `select * from navigation_element as ne
      where ne.navigation_id = ?`,
      [navigationId]
    );
  }

  findAllNavigationsForLogo() {
    return this.connection.query(
      `select * from navigations where categorie = "logo"`
    );
  }

  deleteNavigation(id) {
    return this.connection.query(`delete from navigations where id = ?`, [id]);
  }
}

module.exports = NavigationManager;
