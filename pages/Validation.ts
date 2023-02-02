// import dataText from "../../dataText";
import LoginPage from './loginPage';

import ContactPage from './contactPage';
import SignUpPage from './signUpPage';
import { config } from '../src/support/config';
import dataText from '../dataText';
import { Page, expect } from '@playwright/test';
const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
// const loginPage = new LoginPage();

class Validation {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }
  async violateRequiredRule(input: string) {
    const loginPage = new LoginPage(this.page);
    const contactPage = new ContactPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    if (this.page.url() === contactPage.contactPageUrl()) {
      if (input === 'email') {
        await contactPage.formNameInput.type(contactPage.formFillName());
        await contactPage.formMessageSubjectInput.type(contactPage.formFillMessageSubject());
        await contactPage.formMessageInput.type(contactPage.formFillMessage());
      }
      if (input === 'name') {
        await contactPage.formEmailInput.type(signUpPage.unregisteredEmail());
        await contactPage.formMessageSubjectInput.type(contactPage.formFillMessageSubject());
        await contactPage.formMessageInput.type(contactPage.formFillMessage());
      }
      if (input === 'subject') {
        await contactPage.formEmailInput.type(signUpPage.unregisteredEmail());
        await contactPage.formNameInput.type(contactPage.formFillName());
        await contactPage.formMessageInput.type(contactPage.formFillMessage());
      }
      if (input === 'message') {
        await contactPage.formEmailInput.type(signUpPage.unregisteredEmail());
        await contactPage.formNameInput.type(contactPage.formFillName());
        await contactPage.formMessageSubjectInput.type(contactPage.formFillMessageSubject());
      }
      await signUpPage.formSubmitButton.click();
    }
    if (this.page.url() === loginPage.loginPageUrl()) {
      if (input === 'email') {
        await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
      }
      if (input === 'password') {
        await signUpPage.formEmailInputLoginPage().type(signUpPage.unregisteredEmail());
      }
      await signUpPage.formSubmitButton.click();
    }
    if (this.page.url() === signUpPage.signUpPageUrl()) {
      if (input === 'email') {
        if (page === quizIslamqaUrl) {
          await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
          await signUpPage.formEmailInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
          await signUpPage.formConfirmPasswordInput.type(signUpPage.unregisteredEmailPassword());
          await signUpPage.formSubmitButton.click();
        }
      }
      if (input === 'password') {
        if (page === quizIslamqaUrl) {
          await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmail());
          await signUpPage.formPasswordInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
          await signUpPage.formConfirmPasswordInput.type(signUpPage.unregisteredEmailPassword());
          await signUpPage.formSubmitButton.click();
        }
      }
      if (input === 'confirm_password') {
        if (page === quizIslamqaUrl) {
          await signUpPage.formConfirmPasswordInput.type(signUpPage.unregisteredEmail());
          await signUpPage.formConfirmPasswordInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
          await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
          await signUpPage.formSubmitButton.click();
        }
      }
    }
  }
  async violateEmailRule() {
    const loginPage = new LoginPage(this.page);
    const contactPage = new ContactPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    if (page === quizIslamqaUrl) {
      await signUpPage.formEmailInputLoginPage().type(signUpPage.invalidEmail());
    }
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await signUpPage.formEmailInputLoginPage().type(signUpPage.invalidEmail());
        await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
        await signUpPage.formSubmitButton.click();
      }
      if (this.page.url() === signUpPage.signUpPageUrl()) {
        await signUpPage.formEmailInput.type(signUpPage.invalidEmail());
        await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
        await signUpPage.formConfirmPasswordInput.type(signUpPage.unregisteredEmailPassword());
        await signUpPage.formSubmitButton.click();
      }
      if (this.page.url() === contactPage.contactPageUrl()) {
        // eslint-disable-next-line no-console
        await contactPage.formEmailInput.type(contactPage.contactFormInvalidEmail());
        await contactPage.formNameInput.type(contactPage.formFillName());
        await contactPage.formMessageSubjectInput.type(contactPage.formFillMessageSubject());
        await contactPage.formMessageInput.type(contactPage.formFillMessage());
        await signUpPage.formSubmitButton.click();
      }
    }
  }

  async violateMinLength8Rule() {
    const signUpPage = new SignUpPage(this.page);
    await signUpPage.formPasswordInput.type(signUpPage.shortPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
      await signUpPage.formConfirmPasswordInput.type(signUpPage.shortPassword());
      await signUpPage.formSubmitButton.click();
    }
  }

  async violateUpperLowerNumberRule() {
    const signUpPage = new SignUpPage(this.page);
    await signUpPage.formPasswordInput.type(signUpPage.invalidFormattedPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
      await signUpPage.formConfirmPasswordInput.type(signUpPage.invalidFormattedPassword());
      await signUpPage.formSubmitButton.click();
    }
  }

  async violateMatchPasswordRule() {
    const signUpPage = new SignUpPage(this.page);
    await signUpPage.formPasswordInput.type(signUpPage.unregisteredEmailPassword());
    await signUpPage.formConfirmPasswordInput.type(signUpPage.shortPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await signUpPage.formEmailInput.type(signUpPage.unregisteredEmail());
      await signUpPage.formSubmitButton.click();
    }
  }

  async showNotMatchedPasswordsError() {
    const signUpPage = new SignUpPage(this.page);
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      await expect(signUpPage.formInputError('')).toBeVisible();
      expect(
        dataText.ar.signUpPage.confirmPasswordInputNotMatchedErrorMessage.indexOf(
          await signUpPage.formInputError('').textContent(),
        ),
      ).not.toEqual(-1);
    }

    if (page === quizIslamqaUrlBubble) {
      await this.page.waitForTimeout(2000);
      this.page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual(
          dataText.ar.signUpPage.confirmPasswordInputNotMatchedErrorMessage[2],
        );
      });
    }
  }
  async showRequiredMessage() {
    const loginPage = new LoginPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    const contactPage = new ContactPage(this.page);
    if (page === quizIslamqaUrl) {
      await expect(signUpPage.formInputError('')).toBeVisible();
      expect(
        dataText.ar.signUpPage.requiredErrorMessage.indexOf(
          await signUpPage.formInputError('').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (page === quizIslamqaUrlOS) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await expect(signUpPage.formInputErrorLoginPage('required')).toBeVisible();
        expect(
          dataText.ar.loginPage.requiredErrorMessage.indexOf(
            await signUpPage.formInputErrorLoginPage('required').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === signUpPage.signUpPageUrl()) {
        await expect(signUpPage.formInputError('')).toBeVisible();
        expect(
          dataText.ar.signUpPage.requiredErrorMessage.indexOf(
            await signUpPage.formInputError('').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === contactPage.contactPageUrl()) {
        await expect(contactPage.formInputError).toBeVisible();
        expect(
          dataText.ar.contact.requiredErrorMessage.indexOf(
            await contactPage.formInputError.textContent(),
          ),
        ).not.toEqual(-1);
      }
    }
    if (page === quizIslamqaUrlBubble) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        this.page.waitForTimeout(2000);
        this.page.on('dialog', async (dialog) => {
          expect(
            dataText.ar.loginPage.requiredErrorMessage.includes(dialog.message()),
          ).toBeTruthy();
        });
      }
      if (
        this.page.url() === signUpPage.signUpPageUrl() ||
        this.page.url() === contactPage.contactPageUrl()
      ) {
        await expect(signUpPage.formInputError('required')).toBeVisible();
        expect(
          dataText.ar.signUpPage.requiredErrorMessage.indexOf(
            await signUpPage.formInputError('required').textContent(),
          ),
        ).not.toEqual(-1);
      }
    }
  }
  async showInvalidEmailMessage() {
    const loginPage = new LoginPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    const contactPage = new ContactPage(this.page);
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      await expect(signUpPage.formInputError('email')).toBeVisible();
      expect(
        dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
          await signUpPage.formInputError('email').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (page === quizIslamqaUrlOS) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await expect(signUpPage.formInputErrorLoginPage('email')).toBeVisible();
        expect(
          dataText.ar.loginPage.emailInputInvalidEmailErrorMessage.indexOf(
            await signUpPage.formInputErrorLoginPage('email').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === signUpPage.signUpPageUrl()) {
        await expect(signUpPage.formInputError('email')).toBeVisible();
        expect(
          dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
            await signUpPage.formInputError('email').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === contactPage.contactPageUrl()) {
        await expect(contactPage.formInputError).toBeVisible();
        expect(
          dataText.ar.contact.invalidEmailErrorMessage.indexOf(
            await signUpPage.formInputError('email').textContent(),
          ),
        ).not.toEqual(-1);
      }
    }
  }
  async showUsedEmailMessage() {
    const loginPage = new LoginPage(this.page);

    if (page === quizIslamqaUrl) {
      // cy.wait(8000)
      await expect(loginPage.statusMessageMain).toBeVisible();
    }
    if (page === quizIslamqaUrlOS) {
      await expect(loginPage.statusMessageOS).toBeVisible();
    }
    if (page === quizIslamqaUrlBubble) {
      // Without this wait, the test ends without testing the alert text
      this.page.waitForTimeout(1000);
      this.page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual(dataText.ar.signUpPage.emailInputUsedEmailErrorMessage[2]);
        dialog.accept();
      });
    }
  }
  async show255CharacterMessage() {
    const loginPage = new LoginPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    if (page === quizIslamqaUrl) {
      // cy.wait(8000)
      await expect(loginPage.loginSuccessMessage()).toBeVisible();
      await expect(loginPage.loginSuccessMessage()).toHaveText(
        dataText.ar.signUpPage.emailInput255CharacterErrorMessage[0],
      );
    }
    if (page === quizIslamqaUrlOS) {
      await expect(loginPage.statusMessage()).toBeVisible();
      await expect(loginPage.statusMessage()).toHaveText(
        dataText.ar.signUpPage.emailInput255CharacterErrorMessage[1],
      );
    }
    if (page === quizIslamqaUrlBubble) {
      // Without this wait, the test ends without testing the alert text
      await expect(signUpPage.formInputError('255Character')).toBeVisible();
      await expect(signUpPage.formInputError('255Character')).toHaveText(
        dataText.ar.signUpPage.emailInput255CharacterErrorMessage[2],
      );
    }
  }
  async showEmailNotActivatedMessage() {
    const loginPage = new LoginPage(this.page);
    const signUpPage = new SignUpPage(this.page);
    if (page === quizIslamqaUrl) {
      await expect(loginPage.statusMessage()).toBeVisible();
      await expect(loginPage.statusMessage()).toHaveText(
        dataText.ar.loginPage.emailInputNotActivatedMessage[0],
      );
    }
    if (page === quizIslamqaUrlBubble) {
      await expect(signUpPage.formInputError('')).toBeVisible();
      await expect(signUpPage.formInputError('')).toHaveText(
        dataText.ar.loginPage.emailInputNotActivatedMessage[1],
      );
    }
  }
}
export default Validation;
