async function loadLeaderboard() {

    const response = await fetch(
        "http://localhost:5000/api/results/leaderboard"
    );

    const results = await response.json();
    console.log(results);

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
        "leaderboardBody"
    ).innerHTML = html;
}

loadLeaderboard();