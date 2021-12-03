//Lägg till alla element
let loginInput = document.getElementById("loginInput");
let loginPwInput = document.getElementById("loginPwInput");
let loginBtn = document.getElementById("loginBtn");
let linkLogin = document.getElementById("linkLogin");

let regInput = document.getElementById("regInput");
let regPwInput = document.getElementById("regPwInput");
let regBtn = document.getElementById("regBtn");
let linkReg = document.getElementById("linkReg");

let divLoggedIn = document.getElementById("divLoggedIn");
let divTryAgain = document.getElementById("divTryAgain");

//Döljer element
registerForm.style.display = "none";
divLoggedIn.style.display = "none";
divTryAgain.style.display = "none";

//Skiftar mellan "logga in" och "registrera dig"
linkLogin.addEventListener("click", ()=>{
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
});

linkReg.addEventListener("click", ()=>{
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
});

//Logga in och logga
let h2 = document.createElement("h2");
let logoutBtn = document.createElement("button");

loginBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    let usernameInput = loginInput.value;
    let passwordInput = loginPwInput.value;

    if(usernameInput == "1" && passwordInput == "1"){
        loginForm.style.display = "none";
        divLoggedIn.style.display = "flex";

        localStorage.setItem(usernameInput, passwordInput);

        divLoggedIn.append(h2);
        h2.innerHTML = "Välkommen, " + usernameInput + "!<br><br>";

        divLoggedIn.append(logoutBtn);
        logoutBtn.innerHTML = "Logga ut";

        logoutBtn.addEventListener("click", ()=>{
            divLoggedIn.style.display = "none";
            loginForm.style.display = "flex";
            location.reload();
        });
    }else{
        loginForm.style.display = "none";
        divTryAgain.style.display = "flex";

        divTryAgain.append(h2);
        h2.innerHTML = "Fel användarnamn eller lösenord, försök igen<br><br>";

       divTryAgain.append(logoutBtn);
        logoutBtn.innerHTML = "försök igen";

        logoutBtn.addEventListener("click", ()=>{
            divTryAgain.style.display = "none";
            loginForm.style.display = "flex";
            location.reload();
        });
    };
});

//Registrera ett konto
