const submit = document.querySelector(".submit button");
const fullName = document.querySelector(".f-name input");
const email = document.querySelector(".mail input");
const password = document.querySelector(".pass input");
const viewPass = document.querySelector(".pass i");
const login = document.querySelector(".login a");
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.parentElement.classList.add("focus");
    });
    input.addEventListener("blur", () => {
        input.parentElement.classList.remove("focus");
    });
});

viewPass.addEventListener("click", () => {
    if(password.type === "password") {
        password.type = "text";
        viewPass.classList.remove("fa-eye");
        viewPass.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        viewPass.classList.remove("fa-eye-slash");
        viewPass.classList.add("fa-eye");
    }
});

submit.addEventListener("click", (event) => {
    if(fullName.value === "" || fullName.value === null) {
        alert("Please Enter Your Name!");
        fullName.focus();
        event.preventDefault();
    } else if(email.value === "" || email.value === null) {
        alert("Please Enter Your Email!");
        email.focus();
        event.preventDefault();
    } else if(password.value === "" || password.value === null) {
        alert("Please Enter Your Password!");
        password.focus();
        event.preventDefault();
    } else if(password.value.length < 8) {
        alert("Password Must be at Least 8 Characters Long!");
        password.focus();
        event.preventDefault();
    } else if(password.value.includes(" ")) {
        alert("Password CANNOT Contain Spaces!");
        password.focus();
        event.preventDefault();
    }
});

login.addEventListener("click", () => {
    window.location.href = "D:/Code_PlayGround/Web/Form/login.html";
});