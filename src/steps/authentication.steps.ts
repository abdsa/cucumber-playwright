// import HomePage from '../../pages/homePage';
import SignUpPage from '../../pages/signUpPage';
// import RegisterSucceededPage from '../../pages/registerSucceededPage';
// import dataText from '../../dataText';
// import LogOutPage from '../../pages/logoutPage';
// import ResetPasswordPage from '../../pages/resetPasswordPage';
// import SignInPageWithResetPasswordPage from '../../pages/loginPageWithResetPasswordPage';
// import LoginPage from '../../pages/loginPage';
import Navigation from '../../pages/navigation';
import { ICustomWorld } from '../support/custom-world';
import dataText from '../../dataText';
import LoginPage from '../../pages/loginPage';
import HomePage from '../../pages/homePage';
import LogOutPage from '../../pages/logoutPage';
import SignInPageWithResetPasswordPage from '../../pages/loginPageWithResetPasswordPage';
import ResetPasswordPage from '../../pages/resetPasswordPage';
import RegisterSucceededPage from '../../pages/registerSucceededPage';
import Validation from '../../pages/Validation';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// const homePage = new HomePage();
// const registerSucceededPage = new RegisterSucceededPage();
// const loginPage = new LoginPage();
// const logoutPage = new LogOutPage();
// const resetPasswordPage = new ResetPasswordPage();
// const loginPageWithResetPasswordPage = new SignInPageWithResetPasswordPage();
// const navigation = new Navigation();

Given('the user is not authenticated', async function (this: ICustomWorld) {
  const navigation = new Navigation(this.page);
  await navigation.checkUnauthenticated();
});

Then('the user will see a sign up form', async function (this: ICustomWorld) {
  const signUpPage = new SignUpPage(this.page);
  await this.page.waitForSelector(signUpPage.signUpFormSelector());
  expect(signUpPage.signUpForm).toBeVisible();
});

// successful sign up

// Given("the user filled the email input with correct email that never used before", () => {
//     authentication.signUpFormEmailInput().type(authentication.signInFormFill())
// })

// Given("the user filled the password input with correct format password", () => {
//     authentication.signUpSignInFormPasswordInput().type(authentication.signUpSignInFormFillPassword())
// })

// Given("the user filled the confirmation password input that match the previous password", () => {
//     authentication.signUpFormConfirmPasswordInput().type(authentication.signUpFormFillConfirmPassword())
// })

// When("the user tries to create an account with an email of length 255 characters", () => {
//     /*I have to test it manually due to reCaptcha after submit click*/
//     authentication.signUpFormSignInFormOnSubmitButton().click()
// })

// Then("the user will be redirected to register-succeeded page", () => {
//     cy.wait(1000)
//     cy.url(.should("include", "register-succeeded")
// })

// Then("the user will see a success message of registration", () => {
//     authentication.signUpFormSucceededMessage().should("not.be.empty")
//     authentication.signUpFormSucceededMessage().should("be.visible")
//     authentication.signUpFormSucceededMessage().should("have.text", authentication.signUpFormSucceededMessageText())
// })

// Then("the user will receive an activate link to his email", () => {
/*I have to test it manually due to reCaptcha after submit click*/
// })

Given('the user filled the login form with valid values', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.formEmailInput.type(loginPage.registeredEmail());
  await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
});

Then('the user will be redirected to the home page', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await this.page.waitForTimeout(5000);
  expect(this.page.url()).toEqual(homePage.homePageFullUrlWithHome());
});

Given(
  'the user violated the {string} rule for {string} field',
  async function (this: ICustomWorld, validityRule: string, inputField: string) {
    const validation = new Validation(this.page);
    if (validityRule === 'required') {
      await validation.violateRequiredRule(inputField);
    }
    if (validityRule === 'email') {
      await validation.violateEmailRule();
    }
    if (validityRule === 'minLength_8') {
      await validation.violateMinLength8Rule();
    }
    if (validityRule === 'upper-lower-number') {
      await validation.violateUpperLowerNumberRule();
    }
    if (validityRule === 'match password') {
      await validation.violateMatchPasswordRule();
    }
  },
);

Then(
  'the user will see a {string} message because of {string} rule',
  async function (this: ICustomWorld, _errorMessage: string, validityRule: string) {
    const signUpPage = new SignUpPage(this.page);
    const validation = new Validation(this.page);

    if (validityRule === 'required') {
      await validation.showRequiredMessage();
    }
    if (validityRule === 'email') {
      await validation.showInvalidEmailMessage();
    }
    if (validityRule === 'minLength_8') {
      await expect(signUpPage.formInputError('minLength_8')).toBeVisible();
      expect(
        dataText.ar.signUpPage.passwordInputMinLength8ErrorMessage.indexOf(
          await signUpPage.formInputError('minLength_8').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (validityRule === 'upper-lower-number') {
      await expect(signUpPage.formInputError('upper-lower-number')).toBeVisible();
      expect(
        dataText.ar.signUpPage.passwordInputInvalidFormattedPasswordErrorMessage.indexOf(
          await signUpPage.formInputError('upper-lower-number').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (validityRule === 'match password') {
      await validation.showNotMatchedPasswordsError();
    }
  },
);

Given('the user is on the register-succeeded page', async function (this: ICustomWorld) {
  const registerSucceededPage = new RegisterSucceededPage(this.page);
  await registerSucceededPage.goto();
});

Given(
  'the user will see a message that indicates that the registration was successful',
  async function (this: ICustomWorld) {
    const registerSucceededPage = new RegisterSucceededPage(this.page);
    await expect(registerSucceededPage.registrationSucceededPageSuccessMessage()).toBeVisible();

    await expect(registerSucceededPage.registrationSucceededPageSuccessMessage()).toHaveText(
      dataText.ar.registerSucceeded.registrationSucceededPageSuccessMessage,
    );
  },
);

Then(
  'the user will see a button that navigates the user to the sign in page',
  async function (this: ICustomWorld) {
    const registerSucceededPage = new RegisterSucceededPage(this.page);
    const loginPage = new LoginPage(this.page);
    //  This wait is for Outsystems
    await this.page.waitForTimeout(1000);
    await expect(registerSucceededPage.registerSucceededPageSignInButton()).toBeVisible();
    await registerSucceededPage.registerSucceededPageSignInButton().click();
    await this.page.waitForTimeout(1000);
    expect(this.page.url()).toEqual(loginPage.loginPageUrl());
  },
);

Given('the user is authenticated', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  loginPage.goto();
  await loginPage.formEmailInput.type(loginPage.registeredEmail());
  await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
  await loginPage.formSubmitButton.click();
  // This wait is for slowing down cypress from navigating to the sign up page immediately after the submission of the form
  // After the submission of the form, the user is being redirected to the home page and being authenticated
  // Without waiting, cypress doesn't allow the website to redirect and authenticate.
  await this.page.waitForTimeout(2000);
});

Given('the user is on the sign up page', async function (this: ICustomWorld) {
  const signUpPage = new SignUpPage(this.page);
  await signUpPage.goto();
});

Then(
  'the user will see a message that indicates that the user can start the competition',
  async function (this: ICustomWorld) {
    const signUpPage = new SignUpPage(this.page);
    await expect(signUpPage.signUpPageOnAuthenticatedMessage()).toBeVisible();
    await expect(signUpPage.signUpPageOnAuthenticatedMessage()).toHaveText(
      dataText.ar.signUpPage.onAuthenticatedMessage,
    );
  },
);

Given('the user is on the login page', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

Then('the user will see a login form', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  expect(loginPage.loginForm()).toBeVisible();
});

Given('the user navigated to the logout page', async function (this: ICustomWorld) {
  const logoutPage = new LogOutPage(this.page);
  await logoutPage.logout();
});

Then('the user will logout', async function (this: ICustomWorld) {
  const navigation = new Navigation(this.page);
  await navigation.checkUnauthenticated();
});

Then('the user will see a button that logouts the user', async function (this: ICustomWorld) {
  const loginPageWithResetPasswordPage = new SignInPageWithResetPasswordPage(this.page);
  const navigation = new Navigation(this.page);
  await expect(loginPageWithResetPasswordPage.onAuthenticatedLogoutButton()).toBeVisible();
  await loginPageWithResetPasswordPage.onAuthenticatedLogoutButton().click();
  await this.page.waitForTimeout(2000);
  await navigation.checkUnauthenticated();
});

// // Did not find a reset password page in OS

Given('the user is on the reset password page', async function (this: ICustomWorld) {
  const resetPasswordPage = new ResetPasswordPage(this.page);
  resetPasswordPage.goto();
});

// Given('the user is on the home page', () => {
//   cy.visit(homePage.homePageUrl());
// });

Then(
  'the user will be able to see the login form inside the home page',
  async function (this: ICustomWorld) {
    const homePage = new HomePage(this.page);
    await expect(homePage.signInForm()).toBeVisible();
  },
);

Given(
  "the user filled the login form with account details that don't match any account in the system",
  async function (this: ICustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.formEmailInput.type(loginPage.notMatchedEmail());
    await loginPage.formPasswordInput.type(loginPage.notMatchedEmailPassword());
  },
);

When('the user submits the login form', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.formSubmitButton.click();
});

Then(
  "the user will see a message that indicates that the account details don't match any account in the system",
  async function (this: ICustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.showDoesntMatchAnyAccountMessage(
      dataText.ar.loginPage.signInFormInvalidCredentialsMessage,
    );
  },
);

// // Then("the user will see a success message", () => {
// //     authentication.statusMessage().should("exist")
// // })

// Then('the user will be able to see the registration form inside the home page', () => {
//   homePage.signUpForm().should('be.visible');
// });

Then('the user will see a login success message', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  this.page.waitForTimeout(5000);
  expect(loginPage.loginSuccessMessage()).toBeVisible();
});

Given(
  'the user tries to create an account with an email used before',
  async function (this: ICustomWorld) {
    const signUpPage = new SignUpPage(this.page);
    const loginPage = new LoginPage(this.page);
    await signUpPage.formEmailInput.type(loginPage.registeredEmail());
    await signUpPage.formPasswordInput.type(loginPage.registeredEmailPassword());
    await signUpPage.formConfirmPasswordInput.type(loginPage.registeredEmailPassword());
    await signUpPage.formSubmitButton.click();
  },
);
Then(
  'the user will see a feedback message telling that the email is used',
  async function (this: ICustomWorld) {
    const validation = new Validation(this.page);

    await this.page.waitForTimeout(2000);
    await validation.showUsedEmailMessage();
  },
);

When(
  'the user tries to create an account with an email of length 255 characters',
  async function (this: ICustomWorld) {
    const signUpPage = new SignUpPage(this.page);
    await signUpPage.formEmailInput.type(signUpPage.form255Char());
    await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
    await signUpPage.formConfirmPasswordInput.type(signUpPage.unregisteredEmailPassword());
    await signUpPage.formSubmitButton.click();
  },
);

Then(
  'the user shall see a error message of max 255 characters that comes from the system',
  async function (this: ICustomWorld) {
    const validation = new Validation(this.page);
    await this.page.waitForTimeout(2000);
    await validation.show255CharacterMessage();
  },
);

When(
  'the user tries to login with an account that is not activated',
  async function (this: ICustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.formEmailInput.type(loginPage.notActivatedAccountEmail());
    await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
    await loginPage.formSubmitButton.click();
  },
);

Then(
  'the user will see a feedback message telling that the account is not activated',
  async function (this: ICustomWorld) {
    const validation = new Validation(this.page);
    await validation.showEmailNotActivatedMessage();
  },
);
