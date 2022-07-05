const models = require("../models");

class StudyCaseHomeController {
  static browse = (req, res) => {
    models.studyCaseHome
      .findStudyCaseHome(req.params.languages_id)
      .then(([rows]) => {
        models.studyCaseHome
          .findStudyCaseHome(rows[0].languages_id)
          .then((result) => {
            rows[0].elements = result[0];
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
    models.studyCaseHome
      .findStudyCaseHome(req.params.languages_id)
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
    const studyCaseHome = req.body;

    // TODO validations (length, format...)

    studyCaseHome.id = parseInt(req.params.id, 10);

    models.studyCaseHome
      .update(process)
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
    const studyCaseHome = req.body;

    // TODO validations (length, format...)

    models.studyCaseHome
      .insert(process)
      .then(([result]) => {
        res.status(201).send({ ...studyCaseHome, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.studyCaseHome
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

module.exports = StudyCaseHomeController;
