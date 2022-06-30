/* eslint-disable consistent-return */
const models = require("../models");
const {
  hashPassword,
  uuid,
  jwtSign,
  passwordVerify,
} = require("../services/user");

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
      .findByMail(req.params.email)
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

  static logout = (req, res) => {
    return res.clearCookie("access_token").Status(200).send("logout done!");
  };

  static login = async (req, res) => {
    try {
      const user = await models.user.findByMail(req.body.email);
      if (!user[0]) {
        return res.status(401).send({
          error: "Invalid credentials",
        });
      }
      const { email, hashedPassword } = user[0];
      const check = await passwordVerify(hashedPassword, req.body.password);
      if (!check) {
        return res.status(401).send({
          error: "Invalid credentials 2",
        });
      }
      const token = jwtSign({ email }, { expiresIn: "24h" });
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json(email);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  };
}

module.exports = UserController;
