const db = require("../config/db");

class LessonDAO {
  async getLessons() {
    let results = await db.query(`SELECT * FROM leckek`).catch(console.log);
    return results.rows;
  }

  async getOneLesson(lecke_id) {
    let result = await db
      .query("SELECT * FROM leckek WHERE lecke_id = $1", [lecke_id])
      .catch(console.log);
    return result.rows[0];
  }

  async createLesson(lecke_neve, lecke_tartalma) {
    await db
      .query(
        "INSERT INTO leckek (lecke_neve, Lecke_tartalma) VALUES ($1, $2)",
        [lecke_neve, lecke_tartalma]
      )
      .catch(console.log);
    return;
  }

  async updateLesson(lecke_id, lecke_neve, lecke_tartalma) {
    await db
      .query(
        `UPDATE leckek SET lecke_neve = $1, lecke_tartalma = $2 WHERE lecke_id = $3`,
        [lecke_id, lecke_neve, lecke_tartalma]
      )
      .catch(console.log);

    return;
  }

  async deleteDog(lecke_id) {
    await db
      .query(`DELETE FROM leckek WHERE lecke_id=$1`, [parseInt(lecke_id)])
      .catch(console.log);

    return;
  }
}

module.exports = LessonDAO;
