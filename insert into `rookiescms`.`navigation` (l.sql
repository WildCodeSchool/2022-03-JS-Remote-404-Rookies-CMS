insert into
    `rookiescms`.`languages` (languages, status)
VALUES
    ("EN", 1),
    ("FR", 0);

insert into
    `rookiescms`.`advantages` (title, sub_title, languages_id)
VALUES
    (
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet",
        1
    );

insert into
    `RookiesCMS`.`advantages_element`(title, text, avantages_id)
VALUES
    (
        "More opportunities",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        1
    ),
    (
        "easy management",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        1
    ),
    (
        "Expert HR assessment",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        1
    );

insert into
    `Rookiescms`.`images`(
        image_link,
        image_alt,
        status,
        url,
        categorie,
        languages_id
    )
VALUES
    (
        "https://i.ibb.co/HDd5xBF/you.png",
        "Youmeal",
        0,
        "https://youmeal.io/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/gmC8GKc/home.png",
        "Homecore",
        0,
        "https://www.homecore.com/fr/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/4SYjjrC/emma.png",
        "Emma",
        0,
        "https://www.tendances-emma.fr/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/h7JB3Fj/keye.png",
        "Keyena",
        0,
        "https://keyena.com/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/xfWCDZf/sowa.png",
        "Sowapi",
        0,
        "https://sowapi.ch/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/n7Dnf0g/PPa.png",
        "PPA Business School",
        0,
        "https://www.ppa.fr/ecole-commerce-alternance.html",
        "logo",
        1
    ),
    (
        "https://www.em-normandie.com/themes/custom/emn/images/EM-Logo-2018-default.png",
        "Normandie Business School",
        0,
        "https://www.em-normandie.com/fr",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/K2zxYq4/stras.png",
        "EM Strasbourg",
        0,
        "https://www.em-strasbourg.com/fr",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/WfzKyg6/junia.png",
        "Junia",
        0,
        "https://www.junia.com/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/YQwsp6d/wild.png",
        "Wild Code School",
        0,
        "https://www.wildcodeschool.com/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/Kw3NZyh/hetic.png",
        "Hetic",
        0,
        "https://www.hetic.net/",
        "logo",
        1
    ),
    (
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Saxion_University_of_Applied_Sciences_logo.svg/1200px-Saxion_University_of_Applied_Sciences_logo.svg.png",
        "Saxion",
        0,
        "https://www.saxion.edu/",
        "logo",
        1
    ),
    (
        "https://fontys.edu/static/fontysrdpresentation/images/defaultsocialmediaimage.jpeg",
        "Fontys",
        0,
        "https://fontys.edu/Home.htm",
        "logo",
        1
    ),
    (
        "https://www.efficom.fr/images/2019/10/logo-EFFICOM-V2okblanc.png",
        "Efficom",
        0,
        "https://www.efficom.fr/",
        "logo",
        1
    ),
    (
        "https://pbs.twimg.com/profile_images/887211284369944577/xqN4uf35_400x400.jpg",
        "FHNW",
        0,
        "https://www.fhnw.ch/de",
        "logo",
        1
    ),
    (
        "https://tamba-labs.com/wp-content/uploads/2020/12/Logo_Homepage_Main.png",
        "Tamba Labs",
        0,
        "https://tamba-labs.com/",
        "logo",
        1
    ),
    (
        "https://www.iscom.fr/themes/custom/iscom/images/logo.png",
        "Iscom",
        0,
        "https://www.iscom.fr/",
        "logo",
        1
    ),
    (
        "https://mon-magasin-en-ville.fr/wp-content/uploads/2021/10/logo-MMEV-600px-96.png",
        "Mon Magasin en Ville",
        0,
        "https://mon-magasin-en-ville.fr/",
        "logo",
        1
    ),
    (
        "https://media-exp1.licdn.com/dms/image/C4D0BAQEnuytb7N4eHA/company-logo_200_200/0/1637244902902?e=1662595200&v=beta&t=1sUN3rirGsRS8zjy2s91V-P3e1vLbJRLnG6tQSY6ScU",
        "La Biscuiterie Handi-Gaspi",
        0,
        "https://www.linkedin.com/company/la-biscuiterie-handi-gaspi/?originalSubdomain=fr",
        "logo",
        1
    ),
    (
        "https://www.unilasalle.fr/themes/custom/unilasalle/logo.svg",
        "UniLaSalle",
        0,
        "https://www.unilasalle.fr/",
        "logo",
        1
    ),
    (
        "https://www.iim.fr/ecole-web/wp-content/uploads/2020/09/logo-iim-paris.png",
        "IIM",
        0,
        "https://www.iim.fr/",
        "logo",
        1
    ),
    (
        "https://www.cpe.fr/wp-content/themes/acti-main/img/logo-cpe-bleu.svg",
        "CPE Lyon",
        0,
        "https://www.cpe.fr/",
        "logo",
        1
    ),
    (
        "https://static.wixstatic.com/media/6351e4_54c8eac235d649099f4a167ddaebf4de~mv2.png/v1/fill/w_357,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Gamechangers%20logo.png",
        "GameChangers NFT",
        0,
        "https://www.gamechangenft.com/",
        "logo",
        1
    ),
    (
        "https://i.ibb.co/HNmWxvB/Rookies-Logo.png",
        "Rookies",
        0,
        "https://www.rookies.fr/",
        "RookiesLogo",
        1
    ),
    (
        "https://i.ibb.co/BVVGRFR/image3E.png",
        "Win Win",
        0,
        "",
        "ImgPresentation",
        1
    ),
    (
        "https://i.ibb.co/RzT7xyK/imgm1.png",
        "Students",
        0,
        "",
        "ImgHome",
        1
    ),
    (
        "https://i.ibb.co/yV7CZsd/module5E.png",
        "Talents",
        0,
        "",
        "ImgProcess ",
        1
    ),
    (
        "https://i.ibb.co/5TTHJjL/bravetype1.png",
        "Homecore Men",
        0,
        "",
        "ImgCarouselReviewCompany",
        1
    ),
    (
        "https://i.ibb.co/N9g70zK/bravetype2.png",
        "You Meal Men",
        0,
        "",
        "ImgCarouselReviewCompany",
        1
    ),
    (
        "https://i.ibb.co/RPQxjQk/bravefille1.png",
        "Keyena Girl",
        0,
        "",
        "ImgCarouselReviewCompany",
        1
    ),
    (
        "https://i.ibb.co/WkhbPwG/bravetype3.png",
        "PPA Men",
        0,
        "",
        "ImgCarouselReviewSchool",
        1
    ),
    (
        "https://ibb.co/jJPp98Z",
        "logo pépite",
        0,
        "https://pepite-provence.pepitizy.fr/fr",
        "logofooter",
        1
    ),
    (
        "https://ibb.co/vxNP6qq",
        "logo la french tech",
        0,
        "https://lafrenchtech.com/fr/",
        "logofooter",
        1
    ),
    (
        "https://i.ibb.co/W2mNBmr/3.png",
        "3 petits points encerclés",
        0,
        "",
        "ProjectsExamples",
        1
    ),
    (
        "https://i.ibb.co/m5vBkMT/classroom.png",
        "Classroom",
        0,
        "",
        "ProjectsExamples",
        1
    ),
    (
        "https://ibb.co/mNYLY2R",
        "Home background",
        0,
        "",
        "Background",
        1
    );

insert into
    `rookiescms`.`navigation`(languages_id, images_id)
VALUES
    (1, 24);

insert into
    `rookiescms`.`navigation_element` (label, path, navigation_id, `link?`)
VALUES
    ("Companies", "/", 1, 0),
    ("Universities", "/page2", 1, 0),
    ("Students", "/page3", 1, 0),
    ("About us", "/page4", 1, 0),
    ("Contact us", "", 1, 1);

insert into
    `RookiesCMS`.`QA` (title, sub_title, languages_id)
VALUES
    (
        "Do you have some questions ?",
        "Frequently asked questions",
        1
    );

insert into
    `RookiesCMS`.`QA_element`(question, answer, FAQ_id)
VALUES
    (
        "What is a Rookies project ?",
        "lorem ipsum dolor sit amet",
        1
    ),
    (
        "Why should my company launch a Rookie project ?",
        "upgrade to the Team Plan for unlimited guests. You can also review and remove inactive guests in Setting & Menbers.",
        1
    ),
    (
        "What kind of projects can be conducted ?",
        "lorem ipsum dolor sit amet",
        1
    ),
    (
        "What about data privacy and intellectual property ?",
        "lorem ipsum dolor sit amet",
        1
    ),
    (
        "How much time do i need to allocate to the project ?",
        "lorem ipsum dolor sit amet",
        1
    );

insert into
    `RookiesCMS`.`presentation_advantages` (
        title,
        sub_title,
        text,
        languages_id,
        CTA_phone,
        CTA_label
    )
VALUES
    (
        "Why launch a Rookies Project?",
        "A Better way to hire talents",
        "Engage with students on your company specific projects, so the can demonstrate their capabilities before they are hired full time.",
        1,
        "+33785680988",
        "Book a meeting"
    );

insert into
    `RookiesCMS`.`presentation_advantages_element` (summary, details, presentation_avantages_id)
VALUES
    (
        "A support for your team",
        "lorem ipsum dolor sit amet",
        1
    ),
    (
        "Boost your employer brand",
        "Today's students are tomorrow's decision markers. when they engage with your company. You become an employer of choice. This collaboration will be with them for years to come.",
        1
    ),
    (
        "Go beyound CVs",
        "lorem ipsum dolor sit amet",
        1
    );

insert into
    `RookiesCMS`.`presentation` (
        title,
        sub_title,
        text1,
        text2,
        text3,
        languages_id,
        images_id,
        CTA_label
    )
VALUES
    (
        "What is a Rookies Project?",
        "A win-win collaboration",
        "Submit an assignement specific to your company, taken on by higher educaton students. The projects are carried out remotely or in person as part of the students' curriculum with the support of a qualified supervisor.",
        "Studenrs acquire resume worthy experience and connect with employers",
        "Compagnies get answers to their challenges and discover talents",
        1,
        25,
        "Get Started"
    );
insert into
    `RookiesCMS`.`profit` (title, sub_title, languages_id, navigation_id)
VALUES
    (
        "Benefits of working with us",
        "A turnkey solution",
        1,
        1
    );
insert into
    `RookiesCMS`.`profit_elements` (title, text, profit_id)
VALUES
    (
        "Easily design your projects",
        "Express tour nees and objectives in few clicks or talk with one of our experts and we take care of the rest.",
        1
    ),
    (
        "Access a large network",
        "More than 500 opportunities referenced in our project database in France and abroad.",
        1
    ),
    (
        "Simplified project management",
        "We take care of all administrative tasks ans provide with a platrform to manage your projects efficienly.",
        1
    ),
    (
        "Detailled Reports",
        "Lorem ipsum dolor sit amet, consectetur adpiscing elit. Mattis et sed nam sem tellus erat.",
        1
    );
insert into
    `RookiesCMS`.`KPI` (title, sub_title, languages_id)
VALUES
    (
        "Key Figures",
        "Our achievement depicted in numbers",
        1
    );
insert into
    `RookiesCMS`.`KPI_element` (number, label, KPI_id)
VALUES
    (50, "Projects", 1),
    (30, "clients", 1),
    (300, "Student participants", 1),
    (5, "Countries", 1);
insert into
    `RookiesCMS`.`get_started` (
        title,
        sub_title,
        cta1_label,
        cta2_label,
        languages_id
    )
VALUES
    (
        "Get started today",
        "Submit your project online or schedule a call with an expert",
        "Submit my project",
        "Book a meeting",
        1
    );
insert into
    `RookiesCMS`.`school_project`(title, text, CTA_label, languages_id)
VALUES
    (
        "Project in mind ?",
        "if you are havigne any trouble deciding. do not worry! you can simply request a demo for FREE and decide after that",
        "Book a Meeting",
        1
    );
insert into
    `RookiesCMS`.`contact_form` (
        fullname,
        company_name,
        email,
        phone_number,
        description,
        CTA_label,
        languages_id
    )
VALUES
    (
        "first name & Last name",
        "Company Name",
        "Email",
        "Phone number",
        "Tell us more about your project",
        "Submit",
        1
    );
insert into
    `RookiesCMS`.`Home` (
        title,
        text,
        CTA_label,
        languages_id,
        navbar_id,
        images_id,
        background_images_id
    )
VALUES
    (
        'Get more done, while connecting with grat talent',
        "Involve students in your projects and identify your future talents.",
        "Get started",
        1,
        1,
        26,
        36
    );
insert into
    `RookiesCMS`.`Process` (
        title,
        sub_title,
        text,
        languages_id,
        images_id,
        navbar_id
    )
VALUES
    (
        "How does it works ?",
        "Test talents while working on meaningful projects",
        "Easily build and manage your experiential hiring projects to support your team and identify your future workforce.",
        1,
        27,
        1
    );
insert into
    `RookiesCMS`.`Process_element` (title, text, Process_id)
VALUES
    (
        "Design",
        "indicate your goals, timeline, and candidate requirements.",
        1
    ),
    (
        "Select & Start",
        "Get proposals,select and launch your project.",
        1
    ),
    (
        "Manage",
        "Easiliy manage the progression of your project with our platform.",
        1
    ),
    (
        "Evaluate & integrate",
        "identify the top performers and integrate the best solutions.",
        1
    );
insert into
    `RookiesCMS`.`carroussel_review` (title, sub_title, languages_id, navbar_id)
VALUES
    (
        "Testimonials",
        "What our customers say about us",
        1,
        1
    );
insert into
    `RookiesCMS`.`carroussel_review_element` (
        fullname,
        post,
        testimonial,
        type,
        carroussel_avis_id,
        images_id,
        images_logo_id
    )
VALUES
    (
        "Alexandre Guarneri",
        "Founder @HOMECORE",
        "The audit conducted by the Tookies raised many essential questions for Homcore and several of their recommendations will be implemented on our website.",
        1,
        1,
        28,
        2
    ),
    (
        "Xavier Sourceau",
        "Chief revenue Officier @YOUMEAL",
        "The audit conducted by the Tookies raised many essential questions for Homcore and several of their recommendations will be implemented on our website.",
        1,
        1,
        29,
        1
    ),
    (
        "Carolie Gassama",
        "Founder & CEO @KEYENA",
        "The audit conducted by the Tookies raised many essential questions for Homcore and several of their recommendations will be implemented on our website.",
        1,
        1,
        30,
        4
    );
insert into
    `RookiesCMS`.`footer`(
        phone_number,
        mail,
        sub_title1,
        sub_title2,
        copyright,
        terms,
        policy,
        newsletter,
        languages_id,
        images_logo1_id,
        images_logo2_id,
        rookies_logo
    )
VALUES
    (
        "+33(0)785680988",
        "contact@rookiesprojects.com",
        "Quick Links",
        "Join our newsletter",
        "© 2022 Rookies SAS. All rights reserved",
        "General Terms",
        "Privacy Policy",
        "Your Email",
        1,
        32,
        33,
        24
    );
insert into
    `RookiesCMS`.`contact_form_and_newsletter_options`(
        text,
        value,
        languages_id,
        contact_form_id,
        footer_id
    )
VALUES
    ("Company", "Company", 1, 1, 1),
    ("School", "School", 1, 1, 1);