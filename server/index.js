const express = require('express');
const app = express();
const port = 8001;
const morgan = require('morgan');
const cors = require('cors');
const pool = require('./db')
app.use(cors());
app.use(express.json()); //req.body
app.use(morgan('dev'));

app.listen(port, () => { console.log(`Tool swap app running on port ${port}.`); });

//list tools
app.get("/tools", async (req, res) => {
  try {
    console.log(req);
    const getAllTools = await pool.query(
      // `SELECT movie_id, movie_title, movie_year, movie_genre_id, movie_imdb, genre_title
      // FROM movies JOIN genres ON genres.genre_id = movies.movie_genre_id
      // ORDER BY movie_id DESC`
      `SELECT * FROM tools`
    );
    res.json(getAllTools.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//list users
app.get("/users", async (req, res) => {
  try {
    console.log(req);
    const getAllusers = await pool.query(
      // `SELECT movie_id, movie_title, movie_year, movie_genre_id, movie_imdb, genre_title
      // FROM movies JOIN genres ON genres.genre_id = movies.movie_genre_id
      // ORDER BY movie_id DESC`
      `SELECT * FROM users`
    );
    res.json(getAllusers.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//delete a tool
app.delete("/tools/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("deleted tool id:", id);
    const deleteStep = await pool.query(
      "DELETE FROM tools WHERE tool_id = $1 RETURNING *", [id]
    )
    res.json("The tool has been deleted")
  } catch (err) {
    console.error(err.message)
  }
})









//list users /users K done
//add a tool /tools with post K
//delete a tool /tools/delete/:id
//edit the tool /tools/edit/:id

//list categories /categories
//add a category /coegries with post
//delete a category /categories/delete/:id
//edit a cat. /categories/edit/:id
