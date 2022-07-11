/* eslint-disable no-unused-vars */
const models = require("../models");

class StudyCaseHomeController {
  static browse = (req, res) => {
    models.study_case_home
      .findStudyCaseHome(req.params.languages_id)
      .then(([rows]) => {
        models.study_case_home
          .findStudyCaseElement(rows.id)
          .then((result) => {
            rows.elements = result[0];
            res.status(200).json(rows);
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
    models.study_case_home
      .findStudyCaseHome(req.params.languages_id)
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
      const studyCaseHome = req.body;
      const elements = studyCaseHome.elements;

      await models.study_case_home.update(studyCaseHome.id, {
        title: studyCaseHome.title,
        title_green_part: studyCaseHome.titleGreenPart,
        text: studyCaseHome.text,
        CTA_label: studyCaseHome.cta,
        label_topics: studyCaseHome.label_topics,
        topic: studyCaseHome.topic,
      });
      await models.images.updateImage(studyCaseHome.BimgId, {
        image_link: studyCaseHome.bgImage,
        image_alt: studyCaseHome.bgImageAlt,
      });
      await models.images.updateImage(studyCaseHome.imgId, {
        image_link: studyCaseHome.imageLink,
        image_alt: studyCaseHome.imageAlt,
      });
      await Promise.all(
        elements.map(async (element) => {
          await models.study_case_home.updateStudyCaseElement(element.id, {
            title: element.title,
            sub_title: element.sub_title,
          });
        })
      );
      await Promise.all(
        elements.map(async (element) => {
          await models.images.updateImage(element.imgid, {
            image_link: element.image_link,
            image_alt: element.image_alt,
          });
        })
      );
      const result = await res.status(200).json(studyCaseHome);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Error");
    }
  };

  static add = async (req, res) => {
    try {
      const studyCaseHome = req.body;
      const elements = studyCaseHome.elements;
      const imagesId = {};
      const firstImagesAdd = await models.images.insertImage({
        image_link: studyCaseHome.bgImage,
        image_alt: studyCaseHome.bgImageAlt,
        status: 0,
        url: "",
        categorie: studyCaseHome.catImage2,
        languages_id: studyCaseHome.languages_id,
      });
      // console.log(firstImagesAdd[0]);
      imagesId.BgimgId = firstImagesAdd[0].insertId;

      const secondImagesAdd = await models.images.insertImage({
        image_link: studyCaseHome.imageLink,
        image_alt: studyCaseHome.imageAlt,
        status: 0,
        url: "",
        categorie: studyCaseHome.catImage1,
        languages_id: studyCaseHome.languages_id,
      });

      imagesId.imgId = secondImagesAdd[0].insertId;
      const addStudyCaseHome = await models.study_case_home.insert({
        languages_id: studyCaseHome.languages_id,
        title: studyCaseHome.title,
        titleGreenPart: studyCaseHome.titleGreenPart,
        text: studyCaseHome.text,
        cta: studyCaseHome.cta,
        label_topics: studyCaseHome.label_topics,
        topic: studyCaseHome.topic,
        images_id: imagesId.BgimgId,
        topic_img_id: imagesId.imgId,
      });
      // console.log(addStudyCaseHome);
      imagesId.imgidElement = [];
      const addStudyCaseElementImages = await Promise.all(
        elements.map(async (element, index) => {
          const imagesAdd = await models.images.insertImage({
            image_link: element.image_link,
            image_alt: element.image_alt,
            status: 0,
            url: "",
            categorie: "Topic Logo",
            languages_id: studyCaseHome.languages_id,
          });
          imagesId.imgidElement.push(imagesAdd[0].insertId);
          return imagesAdd;
        })
      );
      // console.log("ma bite")
      // await console.log(addStudyCaseElementImages);
      //   })
      // );
      // const studyCaseHomeId = await models.study_case_home.add(studyCaseHome);
      // const studyCaseHomeElements = await Promise.all(
      //   elements.map(async (element) => {
      //     const elementId = await models.study_case_home.addStudyCaseElement(
      //       studyCaseHomeId,
      //       element
      //     );
      //     const imageId = await models.images.add(element.imageLink);
      //     return elementId;
      //   })
      // );
      const result = await res.status(200).json(studyCaseHome);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Error");
    }
  };

  static delete = (req, res) => {
    models.studyCaseHome
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

module.exports = StudyCaseHomeController;
