const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, sub_title, description, time_week, time_hour, text, signature, amount, status, languages_id, images_id, images_id1, images_id2, images_id3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.title,
        project.sub_title,
        project.description,
        project.time_week,
        project.time_hour,
        project.text,
        project.signature,
        project.amount,
        project.status,
        project.languages_id,
        project.images_id,
        project.images_id1,
        project.images_id2,
        project.images_id3,
      ]
    );
  }

  update(id, data) {
    return this.connection.query(
      `update ${ProjectManager.table} set ? where id = ?`,
      [data, id]
    );
  }

  updateProjectMenber(id, data) {
    return this.connection.query(`update project_menber set ? where id = ?`, [
      data,
      id,
    ]);
  }

  findProject(languagesId) {
    return this.connection
      .query(
        `select p.languages_id, p.id, p.status, p.title, p.sub_title, p.description, p.time_week, p.time_hour, p.text, p.signature, p.amount, p.images_id,  
         i.image_link, i.image_alt, i.status as imageStatus, i.url, i.categorie from ${ProjectManager.table} as p
      inner join images as i on i.id = p.images_id
      where p.languages_id = ?`,
        [languagesId]
      )
      .then((res) => res[0]);
  }

  findProjectMenber(id) {
    return this.connection.query(
      `select p.id, p.project_id,p.images_id as imgId, i.image_link, i.image_alt, i.status, i.url, i.categorie, i.languages_id from project_menber as p
      inner join images as i on i.id = p.images_id
      where p.project_id = ?`,
      [id]
    );
  }

  projectMenberAdd(data) {
    return this.connection.query(
      `insert into project_menber (project_id, images_id) values (?, ?)`,
      [data.project_id, data.images_id]
    );
  }
}

module.exports = ProjectManager;
