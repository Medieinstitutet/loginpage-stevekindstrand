let linkLog = document.getElementById("linkLog");
let linkReg = document.getElementById("linkReg");

registerForm.style.display = "none";

linkLog.addEventListener("click", ()=>{
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
});

linkReg.addEventListener("click", ()=>{
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
});