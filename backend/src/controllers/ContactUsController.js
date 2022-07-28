const models = require("../models");

class ContactUsController {
  static browse = (req, res) => {
    models.contact_us
      .findAllContactUs()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.contact_us
      .findContactUs(req.params.languages_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = async (req, res) => {
    try {
      const contact = req.body;

      await models.images.updateImage(contact.imgId, {
        image_link: contact.image_link,
        image_alt: contact.image_alt,
        status: 0,
        url: "",
        categorie: "Image Form",
        languages_id: contact.languages_id,
      });

      await models.images.updateImage(contact.bgImgId, {
        image_link: contact.bg_link,
        image_alt: contact.bg_alt,
        status: 0,
        url: "",
        categorie: "Image Form",
        languages_id: contact.languages_id,
      });

      await models.contact_us.update(contact.id, {
        text: contact.text,
        text_green: contact.text_green,
        languages_id: contact.languages_id,
        label_phone: contact.label_phone,
        label_email: contact.label_email,
        phone: contact.phone,
        email: contact.email,
        label_rdv: contact.label_rdv,
        link_calendly: contact.link_calendly,
      });

      res.status(200);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}
module.exports = ContactUsController;
