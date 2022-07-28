const models = require("../models");

class QuoteController {
  static browse = (req, res) => {
    models.quote
      .findAllquote()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.quote
      .findQuote(req.params.languages_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static insert = async (req, res) => {
    try {
      const quote = req.body;

      const firstImagesAdd = await models.images.insertImage({
        image_link: quote.image_link,
        image_alt: quote.image_alt,
        status: 0,
        url: "",
        categorie: "Quote Img",
        languages_id: quote.languages_id,
      });

      quote.images_id = firstImagesAdd[0].insertId;

      await models.quote.insert({
        quote: quote.quote,
        images_id: quote.images_id,
        languages_id: quote.languages_id,
        quote_green_part: quote.quote_green_part,
        author: quote.quote_author,
      });
      res.status(204);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  static edit = async (req, res) => {
    try {
      const quote = req.body;

      await models.images.updateImage(quote.imgId, {
        image_link: quote.image_link,
        image_alt: quote.image_alt,
        status: 0,
        url: "",
        categorie: "Quote Img",
        languages_id: quote.languages_id,
      });

      await models.quote.update(quote.id, {
        quote: quote.quote,
        languages_id: quote.languages_id,
        quote_green_part: quote.quote_green_part,
        author: quote.quote_author,
      });
      res.status(200);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  static delete = async (req, res) => {
    try {
      const imgId = req.params.imgId;
      const id = req.params.id;
      await models.quote.delete(id);

      await models.images.delete(imgId);

      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = QuoteController;
