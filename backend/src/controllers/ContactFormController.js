const models = require("../models");

class ContactFormController {
  static browse = (req, res) => {
    models.contact_form
      .find(req.params.languages_id)
      .then(([rows]) => {
        models.contact_form
          .findOption(rows[0].languages_id)
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
    models.item
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
      const item = req.body;
      // const elements = item.elements;

      // TODO validations (length, format...)
      await models.contact_form.updateOption({
        text: item.elements[0].text,
        id: item.elements[0].id,
        value: item.elements[0].value,
      });
      await models.contact_form.updateOption({
        text: item.elements[1].text,
        id: item.elements[1].id,
        value: item.elements[1].value,
      });

      await models.contact_form.update(item.id, {
        title: item.title,
        sub_title: item.sub_title,
        fullname: item.fullname,
        email: item.email,
        description: item.description,
        CTA_label: item.CTA_label,
        languages_id: item.languages_id,
      });

      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.item
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.item
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

module.exports = ContactFormController;
