const loginButton = document.getElementsByClassName("login-button")[0];
const email = document.getElementById("email");
const pass = document.getElementById("password");
const loginBox = document.getElementsByClassName("login-box")[0];
const loginInput = document.getElementsByClassName("login-input")[0];

loginButton.addEventListener("click", () => {
    if (email.value != "" && pass.value != "") {
        alert("Log in success !!!")
        loginBox.style.boxShadow = "0px 0px 15px 1px #009120"
        loginBox.style.border = "2px solid #009120"
        loginBox.style.color = "#009120"
        loginInput.style.border = "2px solid #009120"
        loginButton.style.border = "2px solid #009120"
        loginButton.style.color = "#009120"
        email.style.border = "2px solid #009120"
        pass.style.border = "2px solid #009120"
    }
    else {
        alert("Something wrong! pls check your email and password ")
    }
});

// function login () {
//   if (email !== 0 && pass !== 0) {
//     alert("Log in success !!!")
//   }
//   else {
//     alert("Something wrong! pls check your email and password ")
//   }
// };

// login();