const homePage = require ('../support/pages/home/homePage'); 
const signUpPage = require('../support/pages/signUp/signUpPage');

describe('SignUp', () => {
  beforeEach( () => {
    homePage.goToHomePage();
    homePage.clikSignUpMenu();
  })
  it('with user 1', () => {
    signUpPage.inputUsername('test9108');
    signUpPage.inputPassword('test9108');
    signUpPage.clicksignupButton();
    signUpPage.ceksignupsukses();
  })
})