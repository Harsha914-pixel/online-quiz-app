const express = require("express");
const router = express.Router();

const {
    getQuiz
} = require("../controllers/quizController");

router.get("/", getQuiz);

module.exports = router;