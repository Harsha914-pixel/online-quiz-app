const express = require("express");
const router = express.Router();

const {
    saveResult,
    getLeaderboard,
    getAllResults
} = require("../controllers/resultController");

router.post("/", saveResult);

router.get("/leaderboard", getLeaderboard);

router.get("/all",getAllResults);

module.exports = router;