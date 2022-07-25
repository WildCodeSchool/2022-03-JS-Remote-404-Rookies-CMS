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
  mailerController,
  ContactUsController,
  AdminMailController,
} = require("./controllers");

const router = express.Router();

router.post("/sendEmail", mailerController.sendMail);

router.get("/email", AdminMailController.find);
router.put("/email", Authorization, AdminMailController.edit);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", Authorization, ItemController.edit);
router.post("/items", Authorization, ItemController.add);
router.delete("/items/:id", Authorization, ItemController.delete);

router.get("/images", ImagesController.browse);
router.get("/imageslogo", ImagesController.browseLogo);
router.get("/imagesquotes", ImagesController.browseQuote);
router.get("/imagesprojects", ImagesController.browseProjects);
router.get("/imagesfooter", ImagesController.browseFooter);
router.get("/images/:id", ImagesController.read);
router.put("/images", Authorization, ImagesController.edit);
router.post("/images", Authorization, ImagesController.add);
router.delete("/images/:id", Authorization, ImagesController.delete);

router.get("/navigation/:languages_id", NavigationController.browse);
router.get("/navigations/:id", NavigationController.read);
router.put("/navigationlogo", Authorization, NavigationController.edit);
router.put("/navigation/", Authorization, NavigationController.editElement);
router.post("/navigation", Authorization, NavigationController.add);
router.delete("/navigation/:id", Authorization, NavigationController.delete);

router.get("/homes", HomeController.browse);
router.get("/homes/:languages_id", HomeController.read);
router.put("/homes", Authorization, HomeController.edit);
router.post("/homes", Authorization, HomeController.add);
router.delete("/homes/:id", Authorization, HomeController.delete);

router.get("/presentations", PresentationController.browse);
router.get(
  "/presentations/:languages_id/:position",
  PresentationController.read
);
router.put("/presentations", Authorization, PresentationController.edit);
router.post("/presentations", Authorization, PresentationController.add);
router.delete(
  "/presentations/:id",
  Authorization,
  PresentationController.delete
);

router.get("/processs/:languages_id/:position", ProcessController.browse);
router.get("/process/:languages_id", ProcessController.read);
router.put("/process", Authorization, ProcessController.edit);
router.post("/process", Authorization, ProcessController.add);
router.delete("/process/:id", Authorization, ProcessController.delete);

router.get("/AdminMail", AdminMailController.browse);
router.put("/AdminMailEdit", Authorization, AdminMailController.edit);

router.get("/profits/:languages_id/:position", ProfitController.browse);
router.get("/profit/:languages_id", ProfitController.read);
router.put("/profits", Authorization, ProfitController.edit);
router.post("/profit", Authorization, ProfitController.add);
router.delete("/profit/:id", Authorization, ProfitController.delete);

router.get("/kpis/:languages_id", KpiController.browse);
router.get("/Kpi/:languages_id", KpiController.read);
router.put("/kpi", Authorization, KpiController.edit);
router.post("/kpi", Authorization, KpiController.add);
router.delete("/kpi/:id", Authorization, KpiController.delete);

router.get("/QAS/:languages_id/:position", QAController.browse);
router.get("/QA/:languages_id", QAController.read);
router.put("/QAS", Authorization, QAController.edit);
router.post("/QA", Authorization, QAController.add);
router.delete("/QA/:id", Authorization, QAController.delete);

router.get("/carrousselreview", CarrousselReviewController.read);
router.get(
  "/carrousselreview/:languages_id/:position",
  CarrousselReviewController.browse
);
router.put("/carrousselreview", Authorization, CarrousselReviewController.edit);
router.post("/carrousselreview", Authorization, CarrousselReviewController.add);
router.delete(
  "/carrousselreview/:id",
  Authorization,
  CarrousselReviewController.delete
);

router.get("/footer", FooterController.browse);
router.get("/footer/:languages_id", FooterController.read);
router.put("/footers", Authorization, FooterController.edit);
router.post("/footer", Authorization, FooterController.add);
router.delete("/footer/:id", Authorization, FooterController.delete);

router.get("/presentationadvantages", PresentationAdvantagesController.browse);
router.get(
  "/presentationadvantages/:languages_id",
  PresentationAdvantagesController.read
);
router.put(
  "/presentationadvantage",
  Authorization,
  PresentationAdvantagesController.edit
);
router.post(
  "/presentationadvantages",
  Authorization,
  PresentationAdvantagesController.add
);
router.delete(
  "/presentationadvantages/:id",
  Authorization,
  PresentationAdvantagesController.delete
);

router.get("/getstarteds/:languages_id", GetStartedController.browse);
router.get("/getstarted/:languages_id", GetStartedController.read);
router.put("/getstarteds", Authorization, GetStartedController.edit);
router.post("/getstarted", Authorization, GetStartedController.add);
router.delete("/getstarted/:id", Authorization, GetStartedController.delete);

router.get("/checkuser", Authorization, UserController.browse);
router.get("/checkuser/:email", VerifyEmail, UserController.read);
router.get("/user/logout", Authorization, UserController.logout);
router.put("/getstarted/:id", UserController.edit);
router.post("/user/login", VerifyEmail, UserController.login);
router.post("/user/create", UserController.add);
router.delete("/getstarted/:id", Authorization, UserController.delete);

router.get("/quote", QuoteController.browse);
router.get("/quote/:languages_id", QuoteController.read);

router.get("/contact_us", ContactUsController.browse);
router.get("/contact_us/:languages_id", ContactUsController.read);

router.get("/project/:languages_id", ProjectController.read);
router.post("/projectadd", Authorization, ProjectController.add);
router.put("/projects", Authorization, ProjectController.edit);
router.delete("/projectdelete/:id", Authorization, ProjectController.delete);

router.get("/ctacasestudy", CtaCaseStudyController.browse);
router.put("/ctacasestudy", Authorization, CtaCaseStudyController.edit);
router.get("/ctacasestudy/:languages_id", CtaCaseStudyController.read);

router.get("/languages", LanguageController.browse);
router.put("/languages", Authorization, LanguageController.edit);
router.post("/languages", Authorization, LanguageController.add);

router.get("/studygethomes/:languages_id", StudyCaseHomeController.browse);
router.get("/studygethome/:languages_id", StudyCaseHomeController.read);
router.put("/studygethomes", Authorization, StudyCaseHomeController.edit);
router.post("/studygethomeadd", Authorization, StudyCaseHomeController.add);
router.delete(
  "/studygethome/:id",
  Authorization,
  StudyCaseHomeController.delete
);

router.get("/contactForm/:languages_id", ContactFormController.browse);

router.get("/newsletter/:languages_id", NewsletterController.browse);
router.put("/newsletter", Authorization, NewsletterController.edit);

module.exports = router;
