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
}

module.exports = QuoteController;
