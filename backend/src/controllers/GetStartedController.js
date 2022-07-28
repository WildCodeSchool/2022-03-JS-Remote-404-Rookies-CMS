const models = require("../models");

class GetStartedController {
  static browse = (req, res) => {
    models.get_started
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
    models.get_started
      .findGetStarted(req.params.languages_id)
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
    const getStarted = req.body;
    models.get_started
      .update(getStarted.id, {
        cta1_label: getStarted.cta1_label,
        cta2_label: getStarted.cta2_label,
      })
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const getStarted = req.body;

    // TODO validations (length, format...)

    models.getStarted
      .insert(getStarted)
      .then(([result]) => {
        res.status(201).send({ ...getStarted, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.getStarted
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

module.exports = GetStartedController;
