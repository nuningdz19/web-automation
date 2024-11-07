const locators = require('./signUpLocators')

class SignUpPage {
    inputUsername(username) {
        cy.wait(2000)
        cy.xpath(locators.datatestid.inputsignUsername).type(username);
        cy.wait(2000)
    }

    inputPassword(password) {
        cy.xpath(locators.datatestid.inputsignPassword).type(password);
        cy.wait(2000)
    }

    clicksignupButton() {
        cy.xpath(locators.datatestid.signButton).click();
    }
    
    ceksignupsukses() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
          });
          
    }
}

module.exports = new SignUpPage();