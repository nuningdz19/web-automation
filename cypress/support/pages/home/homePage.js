class HomePage{

    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    clikLoginMenu() {
        cy.xpath('//a[@id="login2"]').click();
    }
    clikSignUpMenu() {
        cy.xpath('//a[@id="signin2"]').click();
    }

}

module.exports = new HomePage();