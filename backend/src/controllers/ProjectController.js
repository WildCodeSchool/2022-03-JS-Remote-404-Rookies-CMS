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
    try {
      const projects = await models.project.findProject(
        req.params.languages_id
      );
      if (projects[0]) {
        const images = await models.images.findFixedImagesForProject();
        const projectMember = await Promise.all(
          projects.map((proj) =>
            models.project.findProjectMenber(proj.id).then((final) => final[0])
          )
        );

        for (let i = 0; i < projects.length; i++) {
          projects[i].imagesFixed = images[0];
          projects[i].projectMember = projectMember[i];
        }
      }
      res.status(200).json(projects);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Error");
    }
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
