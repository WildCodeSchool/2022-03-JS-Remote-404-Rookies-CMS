const models = require("../models");

class CarrousselReviewController {
  static browse = (req, res) => {
    models.carroussel_review
      .findCarrousselReviewFirst(req.params.languages_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.images
      .findAllImagesForCarousel()
      .then(([rows]) => {
        if (rows == null) {
          res.sendStatus(404);
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const navigation = req.body;

    // TODO validations (length, format...)

    navigation.id = parseInt(req.params.id, 10);

    models.carroussel_review
      .update(navigation)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const navigation = req.body;

    // TODO validations (length, format...)

    models.carroussel_review
      .insertnavigation(navigation)
      .then(([result]) => {
        res.status(201).send({ ...navigation, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.carroussel_review
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CarrousselReviewController;
