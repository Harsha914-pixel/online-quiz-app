let score = 0;
let timeLeft = 60;

let selectedAnswers = {};

function startTimer() {

    const timer = setInterval(() => {

        document.getElementById("timer").innerText =
            "Time Left: " + timeLeft;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            alert("Time Over!");

            finishQuiz();
        }

    }, 1000);
}

async function loadQuiz() {

    const res = await fetch(
        "http://localhost:5000/api/quiz"
    );

    const data = await res.json();

    window.quizData = data;

    let output = "";

    data.forEach((q, index) => {

        output += `
            <div class="questionBox">

                <h3>${index + 1}. ${q.question}</h3>

                ${q.options.map(option => `

                    <button
                        onclick="selectAnswer(
                            ${index},
                            '${option}',
                            this
                        )">
                        ${option}
                    </button>

                `).join("")}

            </div>
        `;
    });

    output += `
        <br>
        <button onclick="finishQuiz()">
            Finish Quiz
        </button>
    `;

    document.getElementById(
        "quizBox"
    ).innerHTML = output;
}

function selectAnswer(
    questionIndex,
    selectedOption,
    button
) {

    const questionBox =
        button.closest(".questionBox");

    const buttons =
        questionBox.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.classList.remove(
            "option-selected"
        );
    });

    button.classList.add(
        "option-selected"
    );

    selectedAnswers[
        questionIndex
    ] = selectedOption;
}

function finishQuiz() {

    score = 0;

    window.quizData.forEach(
        (question, index) => {

            if (
                selectedAnswers[index] ===
                question.answer
            ) {
                score++;
            }
        }
    );

    localStorage.setItem(
        "score",
        score
    );

    window.location.href =
        "result.html";
}

loadQuiz();
startTimer();