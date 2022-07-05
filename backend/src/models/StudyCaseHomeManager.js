const AbstractManager = require("./AbstractManager");

class StudyCaseHomeManager extends AbstractManager {
  static table = "study_case_home";

  insert(studyCaseHome) {
    return this.connection.query(
      `insert into ${StudyCaseHomeManager.table} (title) values (?)`,
      [studyCaseHome.title]
    );
  }

  update(studyCaseHome) {
    return this.connection.query(
      `update ${StudyCaseHomeManager.table} set title = ? where id = ?`,
      [studyCaseHome.title, studyCaseHome.id]
    );
  }

  findStudyCaseHome(languagesId) {
    return this.connection
      .query(
        `select sc.id, sc.title, sc.title_green_part, sc.text, sc.cta_label ,sc.label_topics, sc.topic,  
        i.languages_id, i.images_id, i.topic_img_id from ${StudyCaseHomeManager.table} as sc
      inner join images as i on i.id = sc.images_id
      where sc.languages_id = ?`,
        [languagesId]
      )
      .then((res) => res[0]);
  }

  findStudyCaseElement(id) {
    return this.connection.query(
      `select sc.id, sc.title, sc.title_green_part, sc.text, sc.cta_label ,sc.label_topics, sc.topic,  
      i.languages_id, i.images_id, i.topic_img_id from ${StudyCaseHomeManager.table} as sc
      inner join images as i on i.id = sc.images_id
      where sc.languages_id = ?`,
      [id]
    );
  }
}

module.exports = StudyCaseHomeManager;
