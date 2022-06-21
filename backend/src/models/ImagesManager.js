const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  static table = "images";

  insertImage(image) {
    return this.connection.query(
      `insert into ${ImageManager.table} (image_link, image_alt, status, url, categorie, languages_id) values (?, ?, ?, ?, ?, ?)`,
      [
        image.image_link,
        image.image_alt,
        image.status,
        image.url,
        image.categorie,
        image.languages_id,
      ]
    );
  }

  updateImage(image) {
    return this.connection.query(
      `update ${ImageManager.table} set title = ? where id = ?`,
      [image.title, image.id]
    );
  }

  findImage(id) {
    return this.connection.query(`select * from  images where id = ?`, [id]);
  }

  findAllImages() {
    return this.connection.query(`select * from images`);
  }

  findAllImagesForLogo() {
    return this.connection.query(
      `select * from images where categorie = "logo"`
    );
  }

  findAllImagesForQuote() {
    return this.connection.query(
      `select * from images where categorie = "Quote Img"`
    );
  }

  findAllImagesForProjects() {
    return this.connection.query(
      `select * from images where categorie = "ProjectsExamples"`
    );
  }

  findAllImagesForFooter() {
    return this.connection.query(
      `select * from images where categorie = "logofooter"`
    );
  }

  deleteImage(id) {
    return this.connection.query(`delete from images where id = ?`, [id]);
  }
}

module.exports = ImageManager;
