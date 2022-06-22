const models = require("../models");

class FooterController {
  static browse = (req, res) => {
    models.footer
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.footer
      .findFooter(req.params.languages_id)
      .then(([rows]) => {
        models.navigation
          .findNavigationAll(rows[0].languages_id)
          .then((result) => {
            rows[0].links = result[0];
            res.status(200).json(rows[0]);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const footer = req.body;

    // TODO validations (length, format...)

    footer.id = parseInt(req.params.id, 10);

    models.footer
      .update(footer)
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
    const footer = req.body;

    // TODO validations (length, format...)

    models.footer
      .insert(footer)
      .then(([result]) => {
        res.status(201).send({ ...footer, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.footer
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

module.exports = FooterController;
