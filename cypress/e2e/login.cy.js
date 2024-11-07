const homePage = require ('../support/pages/home/homePage'); 
const loginPage = require('../support/pages/login/loginPage');

describe('Login', () => {
  beforeEach( () => {
    homePage.goToHomePage();
    homePage.clikLoginMenu();
  })
  it('with user 1', () => {
    loginPage.inputUsername('test9102');
    loginPage.inputPassword('test9102');
    loginPage.clickLoginButton();
    loginPage.cekloginsukses('test9102');
  })
})