const { inputUsername, inputPassword } = require("./signUpPage");

module.exports = {
    datatestid: {
        inputsignUsername: '//input[@id="sign-username"]', 
        inputsignPassword: '//input[@id="sign-password"]', 
        signButton: '//button[contains(text(), "Sign up")]' 
    }
}