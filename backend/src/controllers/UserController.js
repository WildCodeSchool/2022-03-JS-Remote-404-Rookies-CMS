const models = require("../models");
const { hashPassword, uuid } = require("../helper/user");

class UserController {
  static browse = (req, res) => {
    models.user
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
    models.user
      .finduser(req.params.languages_id)
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

  static edit = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
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
    console.warn(hashPassword(req.body.password));
    const generateId = uuid();
    return hashPassword(req.body.password).then((hashedPassword) => {
      const user = {
        id: generateId,
        email: req.body.email,
        password: hashedPassword,
      };
      models.user
        .insert(user)
        .then(() => {
          res.status(201).send({ ...user });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    });
  };

  static delete = (req, res) => {
    models.user
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

module.exports = UserController;
