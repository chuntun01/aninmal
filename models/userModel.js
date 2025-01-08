const { pool } = require("../config/db");

const getAllUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    throw error;
  }
};
const addUser = async (user) => {
  const { username, email, password } = user; // Giả sử bạn có các trường này trong đối tượng user
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    return result.rows[0]; // Trả về người dùng vừa được thêm
  } catch (error) {
    console.error("Error in addUser:", error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  addUser,
};