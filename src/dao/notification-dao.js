const db = require("../config/db");

class NotificationDAO {
  async getNotifications() {
    let results = await db.query(`SELECT * FROM emailnotifications`).catch(console.log);
    return results.rows;
  }

  async getOneNotification(mail_id) {
    let result = await db
      .query("SELECT * FROM emailnotifications WHERE mail_id = $1", [mail_id])
      .catch(console.log);
    return result.rows[0];
  }

  async createNotification(recipient_id, message, mail_date) {
    await db
      .query(
        "INSERT INTO emailnotifications (recipient_id, message, mail_date) VALUES ($1, $2, $3)",
        [recipient_id, message, mail_date]
      )
      .catch(console.log);
    return;
  }

  async updateNotification(mail_id, recipient_id, message, mail_date) {
    await db
      .query(
        `UPDATE emailnotifications SET recipient_id = $1, message = $2, mail_date = $3 WHERE mail_id = $4`,
        [mail_id, recipient_id, message, mail_date]
      )
      .catch(console.log);

    return;
  }

  async deleteNotification(mail_id) {
    await db
      .query(`DELETE FROM emailnotifications WHERE mail_id=$1`, [parseInt(mail_id)])
      .catch(console.log);

    return;
  }
}

module.exports = NotificationDAO;
