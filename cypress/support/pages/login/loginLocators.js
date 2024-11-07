const { inputUsername, inputPassword } = require("./loginPage");

module.exports = {
    datatestid: {
        inputUsername: '//input[@id="loginusername"]', 
        inputPassword: '//input[@id="loginpassword"]', 
        loginButton: '//button[contains(text(), "Log in")]' 
    }
}