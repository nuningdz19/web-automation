const homePage = require ('../support/pages/home/homePage'); 
const signUpPage = require('../support/pages/signUp/signUpPage');

describe('SignUp', () => {
  beforeEach( () => {
    homePage.goToHomePage();
    homePage.clikSignUpMenu();
  })
  it('with user 1', () => {
    signUpPage.inputUsername('test91080002');
    signUpPage.inputPassword('test91080002');
    signUpPage.clicksignupButton();
    signUpPage.ceksignupsukses();
  })
})