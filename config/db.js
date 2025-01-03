const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PG_USER, // Tên người dùng PostgreSQL
  host: process.env.PG_HOST, // Địa chỉ host (thường là localhost)
  database: "bookstore1", // Chỉ định rõ database bạn muốn kết nối
  password: process.env.PG_PASSWORD, // Mật khẩu của user PostgreSQL
  port: process.env.PG_PORT || 5432, // Cổng PostgreSQL (mặc định là 5432)
});

module.exports = { pool };
