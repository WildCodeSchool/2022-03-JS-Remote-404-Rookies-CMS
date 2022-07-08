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
          res.status(404).send("There is nothing here bitch !");
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = async (req, res) => {
    try {
      const object = req.body;

      await models.cta_case_study.update(
        {
          text: object.text,
          cta_label: object.ctaLabel,
        },
        object.id
      );

      res.status(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
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
