import { emailInput, passwordInput, loginForm, loginSubmit, logoutSubmit } from "./../selectors.js";

export const onSubmit = () => {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        fetch("http://localhost:1337/auth/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    localStorage.setItem("jwt", data.jwt);
                }
            })
            .then(() => {
                window.location.href = "/";
            });
    });
};

logoutSubmit.addEventListener("click", () => {
    localStorage.removeItem("jwt");
});
