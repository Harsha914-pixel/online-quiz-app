const Result = require("../models/Result");

const saveResult = async (req, res) => {
    const result = await Result.create(req.body);
    res.json(result);
};

const getLeaderboard = async (req, res) => {
    try {
        const results = await Result
            .find()
            .sort({ score: -1 });

        res.json(results);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
const getAllResults = async (req, res) => {
    try {
        const results = await Result.find()
            .sort({ score: -1 });

        res.json(results);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    saveResult,
    getLeaderboard,
    getAllResults

};