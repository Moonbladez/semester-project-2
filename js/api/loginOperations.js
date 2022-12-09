export const loginUser = async (email, password) => {
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
            window.location.reload();
        });
};

export const logoutUser = async () => {
    localStorage.removeItem("jwt");
    window.location.reload();
};
