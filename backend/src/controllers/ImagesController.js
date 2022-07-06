/* eslint-disable no-unused-vars */
const models = require("../models");

class ImagesController {
  static browse = (req, res) => {
    models.images
      .findAllImages()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseLogo = (req, res) => {
    models.images
      .findAllImagesForLogo()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseQuote = (req, res) => {
    models.images
      .findAllImagesForQuote()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseProjects = (req, res) => {
    models.images
      .findAllImagesForProjects()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseFooter = (req, res) => {
    models.images
      .findAllImagesForFooter()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.images
      .find(req.params.id)
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
      const image = await models.images.updateImage(object.imageId, {
        image_link: object.imageLink,
        image_alt: object.imageAlt,
        url: object.imageUrl,
        categorie: object.categorie,
      });
      const result = await res.status(200).json(image);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Error");
    }
  };

  static add = (req, res) => {
    const image = req.body;

    // TODO validations (length, format...)

    models.images
      .insertImage(image)
      .then(([result]) => {
        res.status(201).send({ ...image, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.images
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

module.exports = ImagesController;
