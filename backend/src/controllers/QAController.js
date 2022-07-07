/* eslint-disable no-unused-vars */
const models = require("../models");

class QAController {
  static browse = (req, res) => {
    models.QA.findQA(req.params.languages_id)
      .then(([rows]) => {
        models.QA.findQAElement(rows[0].languages_id)
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
    models.QA.findQA(req.params.languages_id)
      .then(([rows]) => {
        if (rows[0] === null) {
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
      const QaU = await models.QA.update(data.id, {
        title: data.title,
        sub_title: data.subtitle,
      });
      const QaElementsU = await Promise.all(
        elements.map((elem) =>
          models.QA.updateQaElements(elem.id, {
            question: elem.question,
            answer: elem.answer,
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
    const QA = req.body;

    models.QA.insert(QA)
      .then(([result]) => {
        res.status(201).send({ ...QA, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.QA.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = QAController;
