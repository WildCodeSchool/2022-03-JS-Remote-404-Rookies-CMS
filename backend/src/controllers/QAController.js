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

  static edit = (req, res) => {
    const QA = req.body;

    // TODO validations (length, format...)

    QA.id = parseInt(req.params.id, 10);

    models.QA.update(QA)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const QA = req.body;

    // TODO validations (length, format...)

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
