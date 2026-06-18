const finalScore = localStorage.getItem("score");

document.getElementById("score").innerText =
    "Your Score: " + finalScore;

const userName =
    localStorage.getItem("userName");

fetch("http://localhost:5000/api/results", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userName,
        score: Number(finalScore)
    })
});