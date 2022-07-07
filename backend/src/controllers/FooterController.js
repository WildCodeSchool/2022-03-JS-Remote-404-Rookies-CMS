/* eslint-disable no-unused-vars */
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

  static edit = async (req, res) => {
    try {
      const object = req.body;
      const images = object.images;

      const footer = await models.footer.update(object.id, {
        phone_number: object.phone_number,
        mail: object.mail,
        sub_title1: object.sub_title1,
        sub_title2: object.sub_title2,
        copyright: object.copyright,
        policy: object.policy,
        terms: object.terms,
        newsletter: object.newsletter,
      });

      const imageU = await Promise.all(
        images.map((image) =>
          models.images.updateImage(image.imid, {
            image_link: image.imageLink,
            image_alt: image.imageAlt,
          })
        )
      );
      const result = await res.status(204).send("ça maaaaarche");
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
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
