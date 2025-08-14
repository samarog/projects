# Mapl

A tiny Node.js web app that renders an interactive world map and lets you track countries you’ve visited. Built with Express, EJS templates, SQL, a bit of vanilla CSS, and two CSV files for data. Inspired by The App Brewery’s Angela Yu Full-Stack Bootcamp curriculum.

## Features
- Server‑rendered UI using EJS views
- Minimal styling with a single CSS file
- SQL‑backed data for world countries and visited countries
- Simple, hackable structure (good for learning or quick demos)

## Project structure
```
33.7 Mapl/
├─ index.js                 # App entry point (Express server)
├─ views/
│  └─ index.ejs             # Main page template
├─ public/
│  └─ styles/
│     └─ main.css           # App styles
├─ db/
│  ├─ world_countries.csv   # List of country names (source data) // import it to PostgreSQL
│  └─ visited_countries.csv # Mutable list of visited countries
├─ package.json
└─ package-lock.json
```

## Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (comes with Node)
- **PostgreSQL** for storing and retrieving data

## Quick start
```bash
npm install
npm start   # or: node index.js
```
Then open `http://localhost:3000` in your browser (or change the port in `index.js`).

## Configuration
Set environment variables in a `.env` file:
```bash

  user: process.env.PGUSER || "<your_pg_user>",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "<your_database>",
  password: process.env.PGPASSWORD || "<your_password>",
  port: Number(process.env.PGPORT) || 5432,

```

## Data files
- `db/world_countries.csv`: canonical list of countries.
- `db/visited_countries.csv`: your personal visited list.

## Views & styling
- Templates in `/views` (EJS)
- CSS in `/public/styles/main.css`

## Scripts
Check `package.json` for available npm scripts.

## Dependencies
Install with `npm install`. See `package.json` for details.

## Testing
Add tests in the future and run:
```bash
npm test
```

## License
MIT (or update as needed)

## Acknowledgments
- Country data from `/db` CSV files.
- Built for quick demos/learning.

## Author
- Gonçalo Amaro
