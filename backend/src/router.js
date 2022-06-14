const express = require("express");

const {
  ItemController,
  ImagesController,
  NavigationController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/images", ImagesController.browse);
router.get("/imageslogo", ImagesController.browseLogo);
router.get("/images/:id", ImagesController.read);
router.put("/images/:id", ImagesController.edit);
router.post("/images", ImagesController.add);
router.delete("/images/:id", ImagesController.delete);

router.get("/navigation/:language_id", NavigationController.browse);
router.get("/navigation/:language_id", NavigationController.read);
router.put("/navigation/:id", NavigationController.edit);
router.post("/navigation", NavigationController.add);
router.delete("/navigation/:id", NavigationController.delete);

module.exports = router;
