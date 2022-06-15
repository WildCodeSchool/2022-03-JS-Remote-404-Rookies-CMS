const express = require("express");

const {
  ItemController,
  ImagesController,
  NavigationController,
  HomeController,
  PresentationController,
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

router.get("/navigation/:languages_id", NavigationController.browse);
router.get("/navigations/:id", NavigationController.read);
router.put("/navigation/:id", NavigationController.edit);
router.post("/navigation", NavigationController.add);
router.delete("/navigation/:id", NavigationController.delete);

router.get("/homes", HomeController.browse);
router.get("/homes/:languages_id", HomeController.read);
router.put("/homes/:id", HomeController.edit);
router.post("/homes", HomeController.add);
router.delete("/homes/:id", HomeController.delete);

router.get("/presentations", PresentationController.browse);
router.get("/presentations/:languages_id", PresentationController.read);
router.put("/presentations/:id", PresentationController.edit);
router.post("/presentations", PresentationController.add);
router.delete("/presentations/:id", PresentationController.delete);

module.exports = router;
