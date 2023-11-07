const db = require("../config/db");

class UserDAO {
  async getUsers() {
    let results = await db.query(`SELECT * FROM users`).catch(console.log);
    return results.rows;
  }

  async getUserByEmail(user_email) {
    let result = await db
      .query("SELECT * FROM users WHERE user_email = $1", [user_email])
      .catch(console.log);
    return result.rows[0];
  }

  async createUser(user_username, user_email, user_passw, user_role) {
    await db
      .query(
        "INSERT INTO users (user_username, user_email, user_passw, user_role) VALUES ($1, $2, $3, $4)",
        [user_username, user_email, user_passw, user_role]
      )
      .catch(console.log);
    return;
  }

  async updateUser(user_id, user_email, user_passw) {
    await db
      .query(
        `UPDATE users SET user_id = $1, user_email = $2 WHERE user_passw = $3 `,
        [parseInt(user_id), user_email, user_passw]
      )
      .catch(console.log);
    return;
  }

  async deleteUser(user_id) {
    await db
      .query(`DELETE FROM users WHERE user_id=$1`, [parseInt(user_id)])
      .catch(console.log);
    return;
  }
}

module.exports = UserDAO;
