const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `INSERT INTO user (id, email, hashedPassword) values (?, ?, ?)`,
      [user.id, user.email, user.password]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByMail(email) {
    return this.connection
      .query(`select * from ${UserManager.table} where email = ?`, [email])
      .then((user) => user[0]);
  }
}

module.exports = UserManager;
