const AbstractManager = require("./AbstractManager");

class StudyCaseHomeManager extends AbstractManager {
  static table = "study_case_home";

  insert(studyCaseHome) {
    return this.connection.query(
      `insert into ${StudyCaseHomeManager.table} (title) values (?)`,
      [studyCaseHome.title]
    );
  }

  update(id, studyCaseHome) {
    return this.connection.query(
      `update ${StudyCaseHomeManager.table} set ? where id = ?`,
      [studyCaseHome, id]
    );
  }

  updateStudyCaseElement(id, studyCaseElement) {
    return this.connection.query(
      `update study_case_topics set ? where id = ?`,
      [studyCaseElement, id]
    );
  }

  findStudyCaseHome(languagesId) {
    return this.connection
      .query(
        `select sc.id, sc.title, sc.title_green_part, sc.text, sc.cta_label ,sc.label_topics, sc.topic,
        i.languages_id, i.id as imgId, i.image_link as topicImgLink, i.image_alt as topicImgAlt, im.id as BimgId, im.image_link as image_link, im.image_alt as image_alt from study_case_home as sc
          inner join images as i on i.id = sc.images_id
          inner join images as im on im.id = sc.topic_img_id
          where sc.languages_id = ?`,
        [languagesId]
      )
      .then((res) => res[0]);
  }

  findStudyCaseElement(id) {
    return this.connection.query(
      `select t.id, t.title, t.sub_title, i.id as imgid, i.image_link, i.image_alt from study_case_topics as t
        inner join images as i on i.id = t.images_id
        where t.study_case_home_id = ?`,
      [id]
    );
  }
}

module.exports = StudyCaseHomeManager;
