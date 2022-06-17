//---------------------------------------------------------------------------------------------------------------------

const createProduct = (email, password) => {
    const url =
        "https://ecommerceplayeras-default-rtdb.firebaseio.com/usuarios.json";

    const product = {
        email: email,
        password: password

    };

    let productId = "";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((product) => {
            productId = product.email;
            window.location.href = `/NewLogin.html?usuarioId=${productId}`;
        });
};

const getData = () => {
    const nombreE = document.querySelector("#email").value;
    const passwordE = document.querySelector("#password").value;

    createProduct(nombreE, passwordE);
};

const submitBtn = document.getElementById("register-btn");

submitBtn.addEventListener("click", getData);