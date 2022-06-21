const express = require("express");

const {
  ItemController,
  ImagesController,
  NavigationController,
  HomeController,
  PresentationController,
  ProcessController,
  ProfitController,
  KpiController,
  QAController,
  CarrousselReviewController,
  FooterController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/images", ImagesController.browse);
router.get("/imageslogo", ImagesController.browseLogo);
router.get("/imagesquotes", ImagesController.browseQuote);
router.get("/imagesprojects", ImagesController.browseProjects);
router.get("/imagesfooter", ImagesController.browseFooter);
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

router.get("/process", ProcessController.browse);
router.get("/process/:languages_id", ProcessController.read);
router.put("/process/:id", ProcessController.edit);
router.post("/process", ProcessController.add);
router.delete("/process/:id", ProcessController.delete);

router.get("/profit", ProfitController.browse);
router.get("/profit/:languages_id", ProfitController.read);
router.put("/profit/:id", ProfitController.edit);
router.post("/profit", ProfitController.add);
router.delete("/profit/:id", ProfitController.delete);

router.get("/kpi", KpiController.browse);
router.get("/Kpi/:languages_id", KpiController.read);
router.put("/kpi/:id", KpiController.edit);
router.post("/kpi", KpiController.add);
router.delete("/kpi/:id", KpiController.delete);

router.get("/QA", QAController.browse);
router.get("/QA/:languages_id", QAController.read);
router.put("/QA/:id", QAController.edit);
router.post("/QA", QAController.add);
router.delete("/QA/:id", QAController.delete);

router.get("/carrousselreview", CarrousselReviewController.read);
router.get(
  "/carrousselreview/:languages_id",
  CarrousselReviewController.browse
);
router.put("/carrousselreview/:id", CarrousselReviewController.edit);
router.post("/carrousselreview", CarrousselReviewController.add);
router.delete("/carrousselreview/:id", CarrousselReviewController.delete);

router.get("/footer", FooterController.browse);
router.get("/footer/:languages_id", FooterController.read);
router.put("/footer/:id", FooterController.edit);
router.post("/footer", FooterController.add);
router.delete("/footer/:id", FooterController.delete);

module.exports = router;
