const db = require("../config/db");

class BookingDAO {
  async getBookings() {
    let results = await db.query(`SELECT * FROM appointmentbookings`).catch(console.log);
    return results.rows;
  }

  async getOneBooking(appointment_id) {
    let result = await db
      .query("SELECT * FROM appointmentbookings WHERE appointment_id = $1", [appointment_id])
      .catch(console.log);
    return result.rows[0];
  }

  async createBooking(user_id, booking_date, booked) {
    await db
      .query(
        "INSERT INTO appointmentbookings (user_id, booking_date, booked) VALUES ($1, $2::DATE, $3)",
        [user_id, booking_date, booked]
      )
      .catch(console.log);
    return;
  }

  async updateBooking(appointment_id, user_id, booking_date, booked) {
    await db
      .query(
        `UPDATE appointmentbookings SET user_id = $1, booking_date = $2, booked = $3 WHERE appointment_id = $4`,
        [user_id, new Date(booking_date), booked, appointment_id]
      )
      .catch(console.log);

    return;
  }

  async deleteBooking(appointment_id) {
    await db
      .query(`DELETE FROM appointmentbookings WHERE appointment_id=$1`, [parseInt(appointment_id)])
      .catch(console.log);

    return;
  }
}

module.exports = BookingDAO;
