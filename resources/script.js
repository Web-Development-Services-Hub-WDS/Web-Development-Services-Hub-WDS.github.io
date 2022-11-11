// Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validate Data
function validateForm() {
    
    clearMessages();
    let errorFlag = false;
    
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = ture;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email";
        email.classList.add("error-border");
        errorFlag = ture;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Clear error / success messages 
function clearMessages(){
    for(let i = 0; i < errorNodes.lenght; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}