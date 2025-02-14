document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.getElementById("signinForm");

    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                alert("Sign-in successful");
                window.location.href = "../pages/home.html"; 
            } else {
                const errorData = await response.json();
                alert(`Sign-in failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("An error occurred during sign-in");
        }
    });
});

