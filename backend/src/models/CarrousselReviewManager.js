const AbstractManager = require("./AbstractManager");

class CarrousselReviewManager extends AbstractManager {
  static table = "carroussel_review";

  insertCarrousselReviewElement(object) {
    return this.connection.query(
      `insert into carroussel_review_element (fullname, post, testimonial, type, carroussel_avis_id ,images_id,images_logo_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        object.fullName,
        object.post,
        object.testimonial,
        object.type,
        object.carrousselId,
        object.imagesId,
        object.logoId,
      ]
    );
  }

  updateCarouselReviewElement(id, object) {
    return this.connection.query(
      `update carroussel_review_element set ? where id = ?`,
      [object, id]
    );
  }

  updateCarouselReview(id, object) {
    return this.connection.query(
      `update ${CarrousselReviewManager.table} set ? where id = ?`,
      [object, id]
    );
  }

  findCarrousselReviewFirst(languagesId, position) {
    return this.connection.query(
      `select c.id,i.id as image_id,im.id as logo_id, c.title, c.sub_title, i.image_link, i.image_alt, im.image_link as linkLogo, im.image_alt as altLogo, ca.fullname, ca.post, ca.testimonial, ca.type, ca.id from carroussel_review as c
      inner join carroussel_review_element as ca ON c.id = ca.carroussel_avis_id
      inner join images as i on i.id = ca.images_id
      inner join images as im on im.id = ca.images_logo_id
      where c.languages_id = ? and c.navbar_id = ?`,
      [languagesId, position]
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

  deleteCarouselReviewElement(id) {
    return this.connection.query(
      `delete from carroussel_review_element where id = ?`,
      [id]
    );
  }
}

module.exports = CarrousselReviewManager;
