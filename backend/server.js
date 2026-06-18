const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quizDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/results", require("./routes/resultRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});