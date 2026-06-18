function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (
        username === "admin" &&
        password === "admin123"
    ) {

        document.getElementById(
            "loginBox"
        ).style.display = "none";

        document.getElementById(
            "adminPanel"
        ).style.display = "block";

        loadQuestions();
        loadScores();

    } else {

        alert("Invalid Admin Login");
    }
}
async function addQuestion() {

    const question = document.getElementById("question").value;

    const options = [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value,
        document.getElementById("option4").value
    ];

    const answer = document.getElementById("answer").value;

    const response = await fetch(
        "http://localhost:5000/api/admin/add-question",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question,
                options,
                answer
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    loadQuestions();
}

async function loadQuestions() {

    const response = await fetch(
        "http://localhost:5000/api/admin/questions"
    );

    const questions = await response.json();

    let html = "";

    questions.forEach((q) => {

        html += `
        <div>
            <h4>${q.question}</h4>

            <button onclick="editQuestion('${q._id}')">
                Edit
            </button>

            <button onclick="deleteQuestion('${q._id}')">
                Delete
            </button>

            <hr>
        </div>
        `;
    });

    document.getElementById("questionList").innerHTML = html;
}

async function deleteQuestion(id) {

    const response = await fetch(
        `http://localhost:5000/api/admin/delete-question/${id}`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    alert(data.message);

    loadQuestions();
}

async function editQuestion(id) {

    const question = prompt("Enter New Question");

    const option1 = prompt("Option 1");
    const option2 = prompt("Option 2");
    const option3 = prompt("Option 3");
    const option4 = prompt("Option 4");

    const answer = prompt("Correct Answer");

    if (!question) return;

    const response = await fetch(
        `http://localhost:5000/api/admin/update-question/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question,
                options: [
                    option1,
                    option2,
                    option3,
                    option4
                ],
                answer
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    loadQuestions();
}

async function loadScores() {

    const response = await fetch(
        "http://localhost:5000/api/results/all"
    );

    const results = await response.json();

    let html = "";

    results.forEach((user, index) => {

        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.userName}</td>
            <td>${user.score}</td>
        </tr>
        `;
    });

    document.getElementById(
        "scoreTable"
    ).innerHTML = html;
}