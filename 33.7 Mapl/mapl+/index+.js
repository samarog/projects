import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "samarog",
  port: 5433,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

// console.log(users)

app.get("/", async (req, res) => {
  
const userdata = await db.query("SELECT * FROM users");
const users = userdata.rows
  const countries = await checkVisisted();
  const currentUser = await getCurrentUser();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
});

// adicionar país
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT flag FROM world_countries WHERE LOWER(name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.flag;
    try {
      await db.query(
        "INSERT INTO users_visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId] 
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

// mudar de user
app.post("/user", async (req, res) => {
  const userid = parseInt(req.body.user);

  if (req.body.user) {
    currentUserId = req.body.user;
    res.redirect("/")
    
  } else if (req.body.add) {

  res.render("new.ejs")

  }

  
});

app.post("/new", async (req, res) => {
const username = req.body.name;
const usercolor = req.body.color;

const result = await db.query('INSERT INTO users (name, color) VALUES($1, $2) RETURNING *', [username, usercolor])

// console.log(result.rows)

  const id = result.rows[0].id;
  currentUserId = id;

res.redirect('/')

  
});

// helpers

 async function getCurrentUser () {
      const result = await db.query("SELECT * FROM users");
      const users = result.rows
      return users.find(e => e.id == currentUserId)
  };

  async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM users_visited_countries WHERE user_id = $1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});