const db = require("../config/db");

class ArticleDAO {
  async getArticles() {
    let results = await db.query(`SELECT * FROM articles`).catch(console.log);
    return results.rows;
  }

  async getOneArticle(article_id) {
    let result = await db
      .query("SELECT * FROM articles WHERE article_id = $1", [article_id])
      .catch(console.log);
    return result.rows[0];
  }

  async createArticle(article_name, article_content, article_date) {
    await db
      .query(
        "INSERT INTO articles (article_name, article_content, article_date) VALUES ($1, $2, $3)",
        [article_name, article_content, article_date]
      )
      .catch(console.log);
    return;
  }

  async updateArticle(article_id, article_name, article_content, article_date) {
    await db
      .query(
        `UPDATE articles SET article_name = $1, lesson_content = $2, article_date = $3 WHERE article_id = $4`,
        [article_id, article_name, article_content, article_date]
      )
      .catch(console.log);

    return;
  }

  async deleteArticle(article_id) {
    await db
      .query(`DELETE FROM articles WHERE article_id=$1`, [parseInt(article_id)])
      .catch(console.log);

    return;
  }
}

module.exports = ArticleDAO;
