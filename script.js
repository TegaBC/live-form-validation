const inputs = document.querySelectorAll("input");
const formSubmit = document.querySelector("#submit")
const passwordField = document.querySelector("#password")
const passwordConfirmField = document.querySelector("#password-confirm")

inputs.forEach((item, index) =>{
    item.addEventListener("focus", () => {
        item.classList.add("live-validation")
    })
})

function checkPasswordMatch(){
    console.log("Running validation")
    if (passwordField.value == passwordConfirmField.value){
        return true
    }
   // passwordConfirmField.setCustomValidity("Passwords do not match")
    return false
}

formSubmit.addEventListener("submit", () => {
    return checkPasswordMatch()
})

