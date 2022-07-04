/* eslint-disable no-plusplus */
const models = require("../models");

class ProjectController {
  static browse = (req, res) => {
    models.project
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = async (req, res) => {
    models.project
      .findProject(req.params.languages_id)
      .then(([rows]) => {
        models.images
          .findFixedImagesForProject()
          .then((result) => {
            for (let i = 0; i < rows.length; i++) {
              rows[i].imagesFixed = result[0];
            }
            if (result[0] == null) {
              res.Status(404);
            } else {
              for (let i = 0; i < rows.length; i++) {
                models.project.findProjectMenber(rows[i].id).then((final) => {
                  rows[i].projectMember = final[0];
                });
              }
            }
            setTimeout(() => {
              res.send(rows);
            }, 100);
          })
          .catch((err) => {
            console.error(err);
            res.Status(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    project.id = parseInt(req.params.id, 10);

    models.project
      .update(project)
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
    const project = req.body;

    // TODO validations (length, format...)

    models.project
      .insert(project)
      .then(([result]) => {
        res.status(201).send({ ...project, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project
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

module.exports = ProjectController;
