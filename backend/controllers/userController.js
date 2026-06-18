const User = require("../models/User");

const registerUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};

const loginUser = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(user){
        res.json({
            success: true
        });
    } else {
        res.json({
            success: false
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};