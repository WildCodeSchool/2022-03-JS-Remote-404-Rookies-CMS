/* eslint-disable camelcase */
const models = require("../models");

class CtaCaseStudy {
  static browse = (req, res) => {
    models.cta_case_study
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
    models.cta_case_study
      .findCtaCaseStudy(req.params.languages_id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.Status(404).send("There is nothing here bitch !");
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
    const cta_case_study = req.body;

    // TODO validations (length, format...)

    cta_case_study.id = parseInt(req.params.id, 10);

    models.cta_case_study
      .update(cta_case_study)
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
    const cta_case_study = req.body;

    // TODO validations (length, format...)

    models.cta_case_study
      .insert(cta_case_study)
      .then(([result]) => {
        res.status(201).send({ ...cta_case_study, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.cta_case_study
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

module.exports = CtaCaseStudy;
