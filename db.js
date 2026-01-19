const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "hr_management",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("成功連接到 MySQL 資料庫！");
});

module.exports = connection;
