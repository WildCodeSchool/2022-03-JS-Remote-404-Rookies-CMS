/* eslint-disable no-unused-vars */
const models = require("../models");

class HomeController {
  static browse = (req, res) => {
    models.home
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
    models.home
      .findHome(req.params.languages_id)
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

      // TODO validations (length, format...)
      const home = await models.home.update(object.id, {
        title: object.title,
        title_green_part: object.titleGreenPart,
        text: object.text,
        CTA_label: object.cta,
      });
      const image = await models.images.updateImage(object.imgId, {
        image_link: object.imageLink,
        image_alt: object.imageAlt,
      });
      const image2 = await models.images.updateImage(object.BimgId, {
        image_link: object.bgImage,
        image_alt: object.bgImageAlt,
      });
      const result = await res.status(200).json(home, image, image2);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Error");
    }
  };

  static add = (req, res) => {
    const home = req.body;

    // TODO validations (length, format...)

    models.home
      .insert(home)
      .then(([result]) => {
        res.status(201).send({ ...home, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.home
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

module.exports = HomeController;
