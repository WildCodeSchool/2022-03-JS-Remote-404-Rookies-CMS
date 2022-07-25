/* eslint-disable no-unused-vars */
const models = require("../models");

class ProcessController {
  static browse = (req, res) => {
    models.process
      .findProcess(req.params.languages_id, req.params.position)
      .then(([rows]) => {
        models.process
          .findProcessElement(rows[0].id)
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
    models.process
      .findProcess(req.params.languages_id)
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

  static edit = async (req, res) => {
    try {
      const object = req.body;
      const elements = object.elements;

      const process = await models.process.update(object.id, {
        title: object.title,
        sub_title: object.subTitle,
        text: object.text,
      });

      const image = await models.images.updateImage(object.imgId, {
        image_link: object.imageLink,
        image_alt: object.imageAlt,
      });

      const element = await Promise.all(
        elements.map((elem) =>
          models.process.updateProcessElements(elem.id, {
            title: elem.title,
            text: elem.text,
          })
        )
      );
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = (req, res) => {
    const process = req.body;

    // TODO validations (length, format...)

    models.process
      .insert(process)
      .then(([result]) => {
        res.status(201).send({ ...process, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.process
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

module.exports = ProcessController;
