/* eslint-disable no-unused-vars */
const models = require("../models");

class ProfitController {
  static browse = (req, res) => {
    models.profit
      .findProfit(req.params.languages_id)
      .then(([rows]) => {
        models.profit
          .findProfitElement(rows[0].languages_id)
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
    models.profit
      .findProfit(req.params.languages_id)
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
      const data = req.body;
      const elements = data.elements;
      const profitU = await models.profit.update(data.id, {
        title: data.title,
        sub_title: data.subTitle,
      });
      const elementsU = await Promise.all(
        elements.map((elem) =>
          models.profit.updateProfitElements(elem.id, {
            title: elem.title,
            text: elem.text,
          })
        )
      );
      const imageU = await Promise.all(
        elements.map((elem) =>
          models.images.updateImage(elem.imid, {
            image_link: elem.imageLink,
            image_alt: elem.imageAlt,
          })
        )
      );
      const result = res.status(204).send("It's ok !");
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = (req, res) => {
    const profit = req.body;

    // TODO validations (length, format...)

    models.profit
      .insert(profit)
      .then(([result]) => {
        res.status(201).send({ ...profit, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.profit
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

module.exports = ProfitController;
