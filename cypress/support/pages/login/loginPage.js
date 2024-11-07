const locators = require('./loginLocators')

class LoginPage {
    inputUsername(username) {
        cy.wait(2000)
        cy.xpath(locators.datatestid.inputUsername).type(username);
        cy.wait(2000)
    }

    inputPassword(password) {
        cy.xpath(locators.datatestid.inputPassword).type(password);
        cy.wait(2000)
    }

    clickLoginButton() {
        cy.xpath(locators.datatestid.loginButton).click();
    }

    cekloginsukses(username) {
        // cy.wait(2000)
        // cy.get('#nameofuser').should('contain', username);
        cy.get('#nameofuser').should('contain', username);
    }

}

module.exports = new LoginPage();