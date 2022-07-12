/* eslint-disable no-unused-vars */
const models = require("../models");

class CarrousselReviewController {
  static browse = (req, res) => {
    models.carroussel_review
      .findCarrousselReviewFirst(req.params.languages_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.images
      .findAllImagesForCarousel()
      .then(([rows]) => {
        if (rows == null) {
          res.sendStatus(404);
        } else {
          res.send(rows);
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
      const images = object.images;

      const element =
        await models.carroussel_review.updateCarouselReviewElement(object.id, {
          images_id: object.images[0].id,
          images_logo_id: object.images[1].id,
          fullname: object.fullName,
          post: object.post,
          testimonial: object.testimonial,
          type: object.type,
        });

      const carousel = await models.carroussel_review.updateCarouselReview(
        object.languages_id,
        { title: object.title, sub_title: object.subTitle }
      );
      const imageU = await Promise.all(
        images.map((elem) =>
          models.images.updateImage(elem.id, {
            image_link: elem.image_link,
            image_alt: elem.image_alt,
          })
        )
      );

      const result = await res.status(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = async (req, res) => {
    try {
      const object = req.body;
      const images = object.images;

      const image = await Promise.all(
        images.map((img) => models.images.insertImage(img))
      );
      const review =
        await models.carroussel_review.insertCarrousselReviewElement({
          ...object,
          imagesId: image[0][0].insertId,
          logoId: image[1][0].insertId,
        });

      res.status(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static delete = async (req, res) => {
    try {
      const del = await models.carroussel_review.deleteCarouselReviewElement(
        req.params.id
      );
      res.status(204).send(res);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
}

module.exports = CarrousselReviewController;
