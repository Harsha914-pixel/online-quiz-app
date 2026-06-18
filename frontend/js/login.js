async function login() {

    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const res = await fetch(
        "http://localhost:5000/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await res.json();

    console.log(result);

    if (result.success) {

        localStorage.setItem(
            "userName",
            data.email
        );

        window.location.href = "quiz.html";

    } else {

        alert("Invalid Login");

    }
}