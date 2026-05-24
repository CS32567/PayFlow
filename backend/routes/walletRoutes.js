const express = require("express");

const router = express.Router();

const db = require("../database/db");

router.post("/add-money", (req, res) => {
  const { name, balance } =
    req.body;

  db.run(
    `
    INSERT INTO wallets
    (name, balance)
    VALUES (?, ?)
    `,
    [name, balance],
    function (err) {
      if (err) {
        console.log(err.message);

        return res.status(500).json({
          message:
            "Failed to add money",
        });
      }

      res.json({
        message:
          "Money added successfully",
      });
    }
  );
});

router.post("/transfer", (req, res) => {
  const { sender, receiver, amount } =
    req.body;

  if (amount > 25000) {
    db.run(
      `
      INSERT INTO transfers
      (sender, receiver, amount, status, created_at)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        sender,
        receiver,
        amount,
        "Failed",
        new Date().toLocaleString(),
      ]
    );

    return res.json({
      message:
        "Transfer failed due to insufficient balance",
    });
  }

  db.run(
    `
    INSERT INTO transfers
    (sender, receiver, amount, status, created_at)
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      sender,
      receiver,
      amount,
      "Success",
      new Date().toLocaleString(),
    ],
    function (err) {
      if (err) {
        console.log(err.message);

        return res.status(500).json({
          message: "Transfer failed",
        });
      }

      res.json({
        message:
          "Transfer successful",
      });
    }
  );
});

router.post("/pay", (req, res) => {
  const { merchant, amount } =
    req.body;

  db.run(
    `
    INSERT INTO payments
    (merchant, amount, status, created_at)
    VALUES (?, ?, ?, ?)
    `,
    [
      merchant,
      amount,
      "Success",
      new Date().toLocaleString(),
    ],
    function (err) {
      if (err) {
        console.log(err.message);

        return res.status(500).json({
          message: "Payment failed",
        });
      }

      res.json({
        message:
          "Payment successful",
      });
    }
  );
});

router.get("/history", (req, res) => {
  db.all(
    `
    SELECT
      sender AS name,
      amount,
      status,
      created_at,
      'Transfer' AS type
    FROM transfers

    UNION ALL

    SELECT
      merchant AS name,
      amount,
      status,
      created_at,
      'Payment' AS type
    FROM payments
    `,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          message:
            "Failed to fetch history",
        });
      }

      res.json(rows);
    }
  );
});

router.get("/summary", (req, res) => {
  db.get(
    `
    SELECT
      (SELECT COUNT(*) FROM transfers)
        AS totalTransfers,

      (SELECT COUNT(*) FROM payments)
        AS totalPayments,

      (SELECT IFNULL(SUM(amount),0)
        FROM transfers)
        AS transferAmount,

      (SELECT IFNULL(SUM(amount),0)
        FROM payments)
        AS paymentAmount
    `,
    [],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message:
            "Failed to fetch summary",
        });
      }

      res.json(row);
    }
  );
});

router.get("/wallet-balance", (req, res) => {
  db.get(
    `
    SELECT IFNULL(SUM(balance),0)
      AS totalBalance
    FROM wallets
    `,
    [],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message:
            "Failed to fetch balance",
        });
      }

      res.json(row);
    }
  );
});

module.exports = router;