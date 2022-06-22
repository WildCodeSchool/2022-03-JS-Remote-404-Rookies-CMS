const models = require("../models");

class KpiController {
  static browse = (req, res) => {
    models.KPI.findKpi(req.params.languages_id)
      .then(([rows]) => {
        models.KPI.findKpiElement(rows[0].languages_id)
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
    models.KPI.findKpi(req.params.languages_id)
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

  static edit = (req, res) => {
    const kpi = req.body;

    // TODO validations (length, format...)

    kpi.id = parseInt(req.params.id, 10);

    models.kpi
      .update(kpi)
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
