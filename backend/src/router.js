const express = require("express");
const { Authorization } = require("./services/user");
const { VerifyEmail } = require("./services/verify");

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
  PresentationAdvantagesController,
  GetStartedController,
  UserController,
  QuoteController,
  ProjectController,
  CtaCaseStudyController,
  LanguageController,
  StudyCaseHomeController,
  ContactFormController,
  NewsletterController,
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
router.put("/images", ImagesController.edit);
router.post("/images", ImagesController.add);
router.delete("/images/:id", ImagesController.delete);

router.get("/navigation/:languages_id", NavigationController.browse);
router.get("/navigations/:id", NavigationController.read);
router.put("/navigation/:id", NavigationController.edit);
router.post("/navigation", NavigationController.add);
router.delete("/navigation/:id", NavigationController.delete);

router.get("/homes", HomeController.browse);
router.get("/homes/:languages_id", HomeController.read);
router.put("/homes", HomeController.edit);
router.post("/homes", HomeController.add);
router.delete("/homes/:id", HomeController.delete);

router.get("/presentations", PresentationController.browse);
router.get("/presentations/:languages_id", PresentationController.read);
router.put("/presentations", PresentationController.edit);
router.post("/presentations", PresentationController.add);
router.delete("/presentations/:id", PresentationController.delete);

router.get("/processs/:languages_id", ProcessController.browse);
router.get("/process/:languages_id", ProcessController.read);
router.put("/process", ProcessController.edit);
router.post("/process", ProcessController.add);
router.delete("/process/:id", ProcessController.delete);

router.get("/profits/:languages_id", ProfitController.browse);
router.get("/profit/:languages_id", ProfitController.read);
router.put("/profits", ProfitController.edit);
router.post("/profit", ProfitController.add);
router.delete("/profit/:id", ProfitController.delete);

router.get("/kpis/:languages_id", KpiController.browse);
router.get("/Kpi/:languages_id", KpiController.read);
router.put("/kpi", KpiController.edit);
router.post("/kpi", KpiController.add);
router.delete("/kpi/:id", KpiController.delete);

router.get("/QAS/:languages_id", QAController.browse);
router.get("/QA/:languages_id", QAController.read);
router.put("/QAS", QAController.edit);
router.post("/QA", QAController.add);
router.delete("/QA/:id", QAController.delete);

router.get("/carrousselreview", CarrousselReviewController.read);
router.get(
  "/carrousselreview/:languages_id",
  CarrousselReviewController.browse
);
router.put("/carrousselreview", CarrousselReviewController.edit);
router.post("/carrousselreview", CarrousselReviewController.add);
router.delete("/carrousselreview/:id", CarrousselReviewController.delete);

router.get("/footer", FooterController.browse);
router.get("/footer/:languages_id", FooterController.read);
router.put("/footers", FooterController.edit);
router.post("/footer", FooterController.add);
router.delete("/footer/:id", FooterController.delete);

router.get("/presentationadvantages", PresentationAdvantagesController.browse);
router.get(
  "/presentationadvantages/:languages_id",
  PresentationAdvantagesController.read
);
router.put("/presentationadvantage", PresentationAdvantagesController.edit);
router.post("/presentationadvantages", PresentationAdvantagesController.add);
router.delete(
  "/presentationadvantages/:id",
  PresentationAdvantagesController.delete
);

router.get("/getstarteds/:languages_id", GetStartedController.browse);
router.get("/getstarted/:languages_id", GetStartedController.read);
router.put("/getstarteds", GetStartedController.edit);
router.post("/getstarted", GetStartedController.add);
router.delete("/getstarted/:id", GetStartedController.delete);

router.get("/checkuser", Authorization, UserController.browse);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.get("/user/logout", Authorization, UserController.logout);
router.put("/getstarted/:id", UserController.edit);
router.post("/user/login", VerifyEmail, UserController.login);
router.post("/user/create", UserController.add);
router.delete("/getstarted/:id", UserController.delete);

router.get("/quote", QuoteController.browse);
router.get("/quote/:languages_id", QuoteController.read);

router.get("/quote", QuoteController.browse);
router.get("/quote/:languages_id", QuoteController.read);

router.get("/project/:languages_id", ProjectController.read);

router.get("/ctacasestudy", CtaCaseStudyController.browse);
router.put("/ctacasestudy", CtaCaseStudyController.edit);
router.get("/ctacasestudy/:languages_id", CtaCaseStudyController.read);

router.get("/languages", LanguageController.browse);

router.get("/studygethomes/:languages_id", StudyCaseHomeController.browse);
router.get("/studygethome/:languages_id", StudyCaseHomeController.read);
router.put("/studygethomes", StudyCaseHomeController.edit);
router.post("/studygethome", StudyCaseHomeController.add);
router.delete("/studygethome/:id", StudyCaseHomeController.delete);

router.get("/contactForm/:languages_id", ContactFormController.browse);

router.get("/newsletter/:languages_id", NewsletterController.browse);
router.put("/newsletter", NewsletterController.edit);

module.exports = router;
