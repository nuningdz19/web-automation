const homePage = require ('../support/pages/home/homePage'); 
const loginPage = require('../support/pages/login/loginPage');
const checkOutPage = require('../support/pages/checkOut/checkOutPage')

describe('CheckOut', () => {
  beforeEach( () => {
    homePage.goToHomePage();
    homePage.clikLoginMenu();
  })
  it('test checkout item', () => {
    loginPage.inputUsername('test9102');
    loginPage.inputPassword('test9102');
    loginPage.clickLoginButton();
    loginPage.cekloginsukses('test9102')
    checkOutPage.gotToChart()
    checkOutPage.checkoutItem()
    checkOutPage.fillCheckoutData()
  })


})