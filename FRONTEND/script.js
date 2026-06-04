// let email=document.querySelector("#email")
// let password=document.querySelector("#password")
// let form=document.querySelector("form")
// form.addEventListener("submit",(dets)=>{
//     dets.preventDefault();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//     let mail=emailPattern.test(email.value);
//     let pass=passwordPattern.test(password.value)
//     if(!mail){
//         document.querySelector("#emailError").textContent="email to sahi dalo"
//          document.querySelector("#emailError").style.color="red";
//     }
//     else{
//        document.querySelector("#emailError").textContent="valid"
//         document.querySelector("#emailError").style.color="green"
//     }
//     if(!pass){
//         document.querySelector("#passwordError").textContent="password to yad kar lete"
//          document.querySelector("#passwordError").style.color="red";
//     }
//     else{
//         document.querySelector("#passwordError").textContent="valid"
//         document.querySelector("#passwordError").style.color="green"
//     }
   

// })
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#validatorForm");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let mail = emailPattern.test(email.value);
    let pass = passwordPattern.test(password.value);

    // Email Validation
    if (!mail) {
        emailError.textContent = "Invalid Email";
        emailError.style.color = "red";

        email.classList.add("error");
        email.classList.remove("success");
    } else {
        emailError.textContent = "Valid Email ✔";
        emailError.style.color = "green";

        email.classList.add("success");
        email.classList.remove("error");
    }

    // Password Validation
    if (!pass) {
        passwordError.textContent =
            "Password must contain 8+ chars, uppercase, lowercase, number & special character";
        passwordError.style.color = "red";

        password.classList.add("error");
        password.classList.remove("success");
    } else {
        passwordError.textContent = "Strong Password ✔";
        passwordError.style.color = "green";

        password.classList.add("success");
        password.classList.remove("error");
    }

    // Success
    if (mail && pass) {
    setTimeout(() => {
        alert("Form Submitted Successfully!");
    }, 2000); // 2000 ms = 2 seconds
}786321
});