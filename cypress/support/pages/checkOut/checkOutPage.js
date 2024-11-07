const locators = require('./checkOutLocator')

class CheckOutPage{
    
    gotToChart() {
        cy.wait(2000)
        cy.xpath(locators.datatestid.ButtonCart).click();
    }

    checkoutItem(){
        cy.wait(2000)
        cy.get('.col-lg-1 > .btn').click()
    }

    fillCheckoutData(){
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputName).type("nuning");
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputCountry).type("japan");
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputCity).type("sapporo");
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputCc).type("312312803");
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputMonth).type("march");
        cy.wait(2000);
        cy.xpath(locators.datatestid.inputYear).type("2024");
        cy.wait(2000);
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2000)
        cy.get('.sweet-alert > h2').should('contain',"Thank you for your purchase!")
        cy.wait(2000)
        cy.get('.confirm').click()
    }
}
module.exports = new CheckOutPage();