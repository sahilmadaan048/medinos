const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { Client } = require("pg");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

const dbPassword = process.env.DB_PASSWORD;

const con = new Client({
  host: "localhost",
  user: "postgres",
  database: "simple-note-db",
  port: 5432,
  password: dbPassword,
});

con.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err.stack));

// POST /notes - create new note
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const id = uuidv4();

  try {
    const result = await con.query(
      "INSERT INTO notes (id, title, content) VALUES ($1, $2, $3) RETURNING *",
      [id, title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Insert error:", err.message);
    res.status(500).json({ error: "Failed to add note" });
  }
});

// GET /notes - get all notes
app.get("/notes", async (req, res) => {
  try {
    const result = await con.query("SELECT * FROM notes ORDER BY title ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// DELETE /notes/:id - delete note by ID
app.delete("/notes/:id", async (req, res) => {
  try {
    const result = await con.query("DELETE FROM notes WHERE id = $1 RETURNING *", [req.params.id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Note deleted" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ error: "Failed to delete note" });
  }
});

// PUT /notes/:id - update note by ID
app.put("/notes/:id", async (req, res) => {
  const { title, content } = req.body;

  try {
    const current = await con.query("SELECT * FROM notes WHERE id = $1", [req.params.id]);

    if (current.rowCount === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    const updatedTitle = title !== undefined ? title : current.rows[0].title;
    const updatedContent = content !== undefined ? content : current.rows[0].content;

    const result = await con.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [updatedTitle, updatedContent, req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).json({ error: "Failed to update note" });
  }
});

app.listen(port, () => {
  console.log(`Note API running on http://localhost:${port}`);
});
