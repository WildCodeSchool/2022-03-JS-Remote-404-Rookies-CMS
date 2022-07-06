/* eslint-disable no-unused-vars */
const models = require("../models");

class PresentationController {
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
    models.presentation
      .findPresentation(req.params.languages_id)
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

      const presentation = await models.presentation.update(object.id, {
        title: object.title,
        sub_title: object.subTitle,
        text1: object.text1,
        text2: object.text2,
        text3: object.text3,
        CTA_label: object.cta,
      });

      const image = await models.images.updateImage(object.imgId, {
        image_link: object.imageLink,
        image_alt: object.imageAlt,
      });
      const result = await res.sendStatus(204);
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

module.exports = PresentationController;
