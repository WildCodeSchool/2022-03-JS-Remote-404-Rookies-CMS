const AbstractManager = require("./AbstractManager");

class CarrousselReviewManager extends AbstractManager {
  static table = "carroussel_review";

  insertNavigation(Navigation) {
    return this.connection.query(
      `insert into ${CarrousselReviewManager.table} (Navigation_link, Navigation_alt, status, url, categorie,) values (?, ?, ?, ?, ?)`,
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
      `update ${CarrousselReviewManager.table} set title = ? where id = ?`,
      [Navigation.title, Navigation.id]
    );
  }

  findCarrousselReviewFirst(languagesId) {
    return this.connection.query(
      `select c.title, c.sub_title, i.image_link, i.image_alt, im.image_link as linkLogo, im.image_alt as altLogo, ca.fullname, ca.post, ca.testimonial, ca.type, ca.id from carroussel_review as c
      inner join carroussel_review_element as ca
      inner join images as i on i.id = ca.images_id
      inner join images as im on im.id = ca.images_logo_id
      where c.languages_id = ?`,
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
      `select * from Navigations where categorie = "logo"`
    );
  }

  deleteNavigation(id) {
    return this.connection.query(`delete from Navigations where id = ?`, [id]);
  }
}

module.exports = CarrousselReviewManager;
