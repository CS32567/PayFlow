const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./database/payflow.db",
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(
        "Connected to SQLite database"
      );
    }
  }
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS transfers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender TEXT,
      receiver TEXT,
      amount INTEGER,
      status TEXT,
      created_at TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      merchant TEXT,
      amount INTEGER,
      status TEXT,
      created_at TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS wallets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      balance INTEGER
    )
  `);
});

module.exports = db;