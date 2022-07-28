/* eslint-disable no-unused-vars */
const models = require("../models");

class PresentationAdvantagesController {
  static browse = (req, res) => {
    models.presentation
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
    models.presentation_advantages
      .findPresentationAdvantages(req.params.languages_id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(404).send("There is nothing here !");
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
      const elements = object.elements;

      const presentation = await models.presentation_advantages.update(
        object.id,
        {
          title: object.title,
          sub_title: object.subtitle,
          text: object.text,
          CTA_label: object.cta,
        }
      );
      const data = await Promise.all(
        elements.map((elem) =>
          models.presentation_advantages.updateElement(elem.id, {
            summary: elem.summary,
            details: elem.details,
          })
        )
      );
      const result = await res.status(204).send("It's ok !");
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = (req, res) => {
    const presentation = req.body;

    // TODO validations (length, format...)

    models.presentation
      .insert(presentation)
      .then(([result]) => {
        res.status(201).send({ ...presentation, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.presentation
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

module.exports = PresentationAdvantagesController;
