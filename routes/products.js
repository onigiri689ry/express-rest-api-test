const express = require("express");
const router = express.Router();

const pool = require("../db/pool");

router.get("/", function (req, res, next) {
  pool.query("SELECT * FROM products", function (error, result) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
  });
});

//データid検索API
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  pool.query("SELECT * FROM products WHERE id = $1", [id], function (
    error,
    result
  ) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
  });
});

module.exports = router;