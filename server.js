const express = require("express");
const db = require("./db");
const app = express();

app.get("/api/employees", (req, res) => {
  const sql = `
    SELECT e.full_name, d.dept_name 
    FROM employees e 
    JOIN departments d ON e.dept_id = d.dept_id
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
