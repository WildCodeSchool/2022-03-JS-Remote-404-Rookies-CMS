const models = require("../models");

class NavigationController {
  static browse = (req, res) => {
    models.navigation
      .findNavigation(req.params.languages_id)
      .then(([rows]) => {
        models.navigation
          .findNavigationAll(rows[0].id)
          .then((result) => {
            rows[0].links = result[0];
            res.status(200).json(rows[0]);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  static read = (req, res) => {
    models.navigation
      .findNavigation(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const object = req.body;
    models.navigation
      .updateNavigation({
        id: object.images_id,
        image_link: object.image_link,
        image_alt: object.image_alt,
      })
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

  static editElement = (req, res) => {
    const object = req.body;
    models.navigation
      .updateNavigationElement(object)
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

    models.navigation
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
    models.navigation
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

module.exports = NavigationController;
