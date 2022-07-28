/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
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

  static edit = async (req, res) => {
    try {
      const data = req.body;
      const imagesFixed = data.imagesFixed;
      const projectMember = data.projectMember;

      await models.project.update(data.id, {
        title: data.title,
        sub_title: data.sub_title,
        description: data.description,
        time_week: data.time_week,
        time_hour: data.time_hour,
        text: data.text,
        signature: data.signature,
        amount: data.amount,
        status: data.status,
      });
      await models.images.updateImage(data.images_id, {
        image_link: data.image_link,
        image_alt: data.image_alt,
      });
      const images = await Promise.all(
        projectMember.map((img) =>
          models.images.updateImage(img.imgId, {
            image_link: img.image_link,
            image_alt: img.image_alt,
          })
        )
      );
      const result = res.status(204).send("It's ok !");
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = async (req, res) => {
    try {
      const images = {
        image_link: req.body[0].image_link,
        image_alt: req.body[0].image_alt,
        status: 0,
        url: req.body[0].url,
        categorie: req.body[0].categorie,
        languages_id: req.body[0].languages_id,
      };
      const image = await models.images.insertImage(images);

      images.id = image[0].insertId;

      const project = {
        languages_id: req.body[0].languages_id,
        status: req.body[0].status,
        title: req.body[0].title,
        sub_title: req.body[0].sub_title,
        description: req.body[0].description,
        time_week: req.body[0].time_week,
        time_hour: req.body[0].time_hour,
        text: req.body[0].text,
        signature: req.body[0].signature,
        amount: req.body[0].amount,
        images_id: images.id,
        images_id1: req.body[0].imagesFixed[1].id,
        images_id2: req.body[0].imagesFixed[2].id,
        images_id3: req.body[0].imagesFixed[3].id,
      };
      const projectAdd = await models.project.insert(project);
      project.id = projectAdd[0].insertId;

      const members = req.body[0].projectMember;
      const imagesMembers = await Promise.all(
        members.map((img) => {
          const imageMember = {
            image_link: img.image_link,
            image_alt: img.image_alt,
            status: 0,
            url: img.url,
            categorie: img.categorie,
            languages_id: img.languages_id,
          };
          return models.images.insertImage(imageMember).then(([response]) => {
            return response.insertId;
          });
        })
      );

      await Promise.all(
        members.map((member, index) => {
          return models.project.projectMenberAdd({
            project_id: project.id,
            images_id: imagesMembers[index],
          });
        })
      );

      res.status(203).send("It's ok !");
    } catch (err) {
      console.error(err);
      res.status(500);
    }
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
