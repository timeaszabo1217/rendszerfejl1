const db = require("../config/db");

class LessonDAO {
  async getLessons() {
    let results = await db.query(`SELECT * FROM lessons`).catch(console.log);
    return results.rows;
  }

  async getOneLesson(lesson_id) {
    let result = await db
      .query("SELECT * FROM lessons WHERE lesson_id = $1", [lesson_id])
      .catch(console.log);
    return result.rows[0];
  }

  async createLesson(lesson_name, lesson_content) {
    await db
      .query(
        "INSERT INTO lessons (lesson_name, lesson_content) VALUES ($1, $2)",
        [lesson_name, lesson_content]
      )
      .catch(console.log);
    return;
  }

  async updateLesson(lesson_id, lesson_name, lesson_content) {
    await db
      .query(
        `UPDATE lessons SET lesson_name = $1, lesson_content = $2 WHERE lesson_id = $3`,
        [lesson_id, lesson_name, lesson_content]
      )
      .catch(console.log);

    return;
  }

  async deleteDog(lesson_id) {
    await db
      .query(`DELETE FROM lessons WHERE lesson_id=$1`, [parseInt(lesson_id)])
      .catch(console.log);

    return;
  }
}

module.exports = LessonDAO;
