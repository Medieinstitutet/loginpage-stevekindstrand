//Hämtar element från index
let loginInput = document.getElementById("loginInput");
let loginPwInput = document.getElementById("loginPwInput");
let loginBtn = document.getElementById("loginBtn");
let linkLogin = document.getElementById("linkLogin");

let regInput = document.getElementById("regInput"); //Används ej än
let regPwInput = document.getElementById("regPwInput"); //Används ej än
let regBtn = document.getElementById("regBtn"); //Används ej än
let linkReg = document.getElementById("linkReg"); 

let divLoggedIn = document.getElementById("divLoggedIn");
let divTryAgain = document.getElementById("divTryAgain");

//Skapar nya element som hämtas när man loggar in eller skriver in fel användarnamn/lösenord
let h2 = document.createElement("h2");
let logoutBtn = document.createElement("button");

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

//Skapar en "logga ut" knapp 
logoutBtn.addEventListener("click", ()=>{
    divLoggedIn.style.display = "none";
    loginForm.style.display = "flex";
    location.reload();

    localStorage.clear(); //Rensar local storage när man trycker på "logga ut"
});

//Skapar tre inloggningar
let objUsers = [
    {
        usernameInput: "janne",
        passwordInput: "test"
    },
    {
        usernameInput: "admin",
        passwordInput: "admin"     
    },
    {
        usernameInput: "0",
        passwordInput: "0"     
    }
];

/*--------------------
Logga in och logga ut
--------------------*/
loginBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    let usernameInput = loginInput.value;
    let passwordInput = loginPwInput.value;
    
    for(i = 0; objUsers.length; i++){
        if(usernameInput == objUsers[i].usernameInput && passwordInput == objUsers[i].passwordInput){

            loginForm.style.display = "none";
            divLoggedIn.style.display = "flex";

            divLoggedIn.append(h2);
            h2.innerHTML = "Välkommen, " + usernameInput + "!<br><br>";

            divLoggedIn.append(logoutBtn);
            logoutBtn.innerHTML = "Logga ut";

            //local storage
            localStorage.setItem("username", usernameInput); //Visar inloggad användare (användarnamn) i local storage
            localStorage.setItem("password", passwordInput); //Visar inloggad användare (lösenord) i local storage

            let userName = localStorage.getItem("username"); //Hämtar inloggad användare (användarnamn) från local storage till console
            let userPassword = localStorage.getItem("password"); //Hämtar inloggad användare (lösenord) från local storage till console
            console.log(userName);
            console.log(userPassword);
            //

            return;

        }else{
            loginForm.style.display = "none";
            divTryAgain.style.display = "flex";
        
            divTryAgain.append(h2);
            h2.innerHTML = "Fel användarnamn eller lösenord, försök igen<br><br>";
        
            divTryAgain.append(logoutBtn);
            logoutBtn.innerHTML = "försök igen";
        }};
    });

/*--------------------
Registrera en användare
--------------------*/

//Sparar existerande användare i local storage
const objJSON = JSON.stringify(objUsers);
localStorage.setItem("all users", objJSON);