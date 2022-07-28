/* eslint-disable no-unused-vars */
const models = require("../models");

class KpiController {
  static browse = (req, res) => {
    models.kpi
      .findKpi(req.params.languages_id)
      .then(([rows]) => {
        models.kpi
          .findKpiElement(rows[0].languages_id)
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
    models.kpi
      .findKpi(req.params.languages_id)
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
      const elements = object.elements;

      const kpi = await models.kpi.update(object.id, {
        title: object.title,
        sub_title: object.subtitle,
      });
      const data = await Promise.all(
        elements.map((elem) =>
          models.kpi.updateKpiElement(elem.id, {
            number: elem.number,
            label: elem.label,
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
    const kpi = req.body;

    // TODO validations (length, format...)

    models.kpi
      .insert(kpi)
      .then(([result]) => {
        res.status(201).send({ ...kpi, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.kpi
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

module.exports = KpiController;
