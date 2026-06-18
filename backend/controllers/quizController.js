const Quiz = require("../models/Quiz");

const getQuiz = async (req, res) => {
    const questions = await Quiz.find();
    res.json(questions);
};

module.exports = {
    getQuiz
};