const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title) values (?)`,
      [project.title]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }

  findProject(languagesId) {
    return this.connection
      .query(
        `select p.id, p.status, p.title, p.sub_title, p.description, p.time_week, p.time_hour, p.text, p.signature, p.amount, p.images_id,  
         i.image_link, i.image_alt from ${ProjectManager.table} as p
      inner join images as i on i.id = p.images_id
      where p.languages_id = ?`,
        [languagesId]
      )
      .then((res) => res[0]);
  }

  findProjectMenber(id) {
    return this.connection.query(
      `select p.id, p.project_id, i.image_link, i.image_alt from project_menber as p
      inner join images as i on i.id = p.images_id
      where p.project_id = ?`,
      [id]
    );
  }
}

module.exports = ProjectManager;
