import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;
const db = new pg.Client({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "world",
  password: process.env.PGPASSWORD || "samarog",
  port: Number(process.env.PGPORT) || 5433,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = []; // array aqui, para prevenir leaks
  result.rows.map((e) => countries.push(e.country_code));
  console.log(countries);
  res.render("index.ejs", { total: countries.length, countries });
});

app.post("/add", async (req, res) => {
  const newCountry = req.body.country.trim();
  const newCountrySanitized = newCountry
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "); // case capital em todas as palavras: United Kingdom
  try {
    const { rows } = await db.query(
      `SELECT * FROM world_countries WHERE name = $1`, [newCountrySanitized]
    );
    const countryFlag = rows[0].flag;
    try {
      await db.query(
        `INSERT INTO visited_countries (country_code) VALUES ($1)`, [countryFlag]
      );
      res.redirect("/");
    } catch (error) {
      console.log("Country query failed: " + error);
      const result = await db.query(
        "SELECT country_code FROM visited_countries"
      );
      let countries = [];
      result.rows.map((e) => countries.push(e.country_code));
      res.render("index.ejs", {
        total: countries.length,
        countries,
        error: "Country already visited.",
      });
    }
  } catch (error) {
    console.log("Country query failed: " + error);
    const result = await db.query("SELECT country_code FROM visited_countries");
    let countries = [];
    result.rows.map((e) => countries.push(e.country_code));
    res.render("index.ejs", {
      total: countries.length,
      countries,
      error: "Country doesn't exist.",
    });
  }
});

app.post("/delete", async (req, res) => {
  await db.query(`DELETE FROM visited_countries`);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
