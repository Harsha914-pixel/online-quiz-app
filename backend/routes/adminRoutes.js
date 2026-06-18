const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");


router.post("/add-question", async (req, res) => {
    try {
        const { question, options, answer } = req.body;

        const newQuestion = new Quiz({
            question,
            options,
            answer
        });

        await newQuestion.save();

        res.json({ message: "Question Added Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/questions", async (req, res) => {
    try {
        const questions = await Quiz.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.delete("/delete-question/:id", async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.json({ message: "Question Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/update-question/:id", async (req, res) => {
    try {
        const { question, options, answer } = req.body;

        await Quiz.findByIdAndUpdate(req.params.id, {
            question,
            options,
            answer
        });

        res.json({
            message: "Question Updated Successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});
module.exports = router;