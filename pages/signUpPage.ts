// import dataText from "../../dataText";
import LoginPage from './loginPage';

import { config } from '../src/support/config';
import dataText from '../dataText';
import { Locator, Page, expect } from '@playwright/test';
const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
// const loginPage = new LoginPage();

class SignUpPage {
  readonly page;
  readonly signUpForm!: Locator;
  readonly formEmailInput!: Locator;
  readonly formPasswordInput!: Locator;
  readonly formConfirmPasswordInput!: Locator;
  readonly formSubmitButton!: Locator;

  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.signUpForm = page.locator(this.signUpFormSelector());
      this.formEmailInput = page.locator(this.formEmailInputSelector());
      this.formPasswordInput = page.locator(this.formPasswordInputSelector());
      this.formConfirmPasswordInput = page.locator(this.formConfirmPasswordInputSelector());
      this.formSubmitButton = page.locator(this.formSubmitButtonSelector());
    }
  }
  signUpFormSelector() {
    if (page === quizIslamqaUrl) {
      return '.form-section';
    }
    if (page === quizIslamqaUrlOS) {
      return '.text-rtl';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 5; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]';
    }
  }

  signUpPageUrl() {
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      return `${page}register`;
    }
    if (page === quizIslamqaUrl) {
      return `${page}signup`;
    }
  }
  async goto() {
    await this.page?.goto(this.signUpPageUrl());
  }

  signUpPageOnAuthenticatedMessage() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[data-signup-page-message='true']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.display-flex > span');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="z-index: 6; align-self: center; min-width: 200px; max-width: 200px; order: 2; min-height: 45px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: var(--font_default); font-size: 18px; font-weight: 500; color: rgb(0, 0, 0); text-align: center; line-height: 1.4; border-radius: 0px;"]',
      );
    }
  }

  formEmailInputLoginPage() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("input[type='email']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('#Input_UsernameVal');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator("input[placeholder='البريد الإلكتروني']");
    }
  }

  formEmailInputSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return "input[type='email']";
    }

    if (page === quizIslamqaUrlBubble) {
      return "input[placeholder='البريد الإلكتروني']";
    }
  }

  formPasswordInputSelector() {
    return "input[placeholder='كلمة السر']";
  }
  formConfirmPasswordInputSelector() {
    return "input[placeholder='إعادة كلمة السر']";
  }
  unregisteredEmail() {
    return 'jello@gmail.com';
  }
  form255Char() {
    return 'fsdjlfkjsdalkfjsadkljfsdkfjlksdajfklsdakldsjfklsdaklsadklsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd@gmail.com';
  }

  unregisteredEmailPassword() {
    return 'hellooolloll1L';
  }

  formInputErrorLoginPage(validityRuleForOS: 'email' | 'required') {
    if (page === quizIslamqaUrlOS) {
      if (validityRuleForOS === 'required') {
        return this.page.locator('.validation-message');
      }
      if (validityRuleForOS === 'email') {
        return this.page.locator('.feedback-message-text');
      }
    }
  }

  formInputError(
    validityRuleForBubble:
      | 'email'
      | 'required'
      | 'minLength_8'
      | 'upper-lower-number'
      | '255Character'
      | '',
  ) {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.text-xs:visible');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }
    if (page === quizIslamqaUrlBubble) {
      if (validityRuleForBubble === '') {
        return this.page.locator('.validation-message');
      }
      if (validityRuleForBubble === 'required') {
        return this.page.getByText('هذا الحقل مطلوب');
      }
      if (validityRuleForBubble === 'email') {
        return this.page.locator('.validation-message');
      }
      if (validityRuleForBubble === 'minLength_8') {
        return this.page.getByText('كلمة المرور يجب ان تتكون من:');
      }
      if (validityRuleForBubble === 'upper-lower-number') {
        return this.page.getByText('كلمة المرور يجب ان تتكون من:');
      }
      if (validityRuleForBubble === '255Character') {
        return this.page
          .locator('.validation-message')
          .filter({ hasText: 'الحد الأقصى هو 255 حرف' });
      }
    }
  }

  formSubmitButtonSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return "button[type='submit']";
    }
    if (page === quizIslamqaUrlBubble) {
      return '.Button:visible';
    }
  }
  invalidEmail() {
    return 'fdsasfdadsfasdsdaf@gjk';
  }

  shortPassword() {
    return 'fkjd';
  }
  invalidFormattedPassword() {
    return 'fkjddfdfd';
  }
  async violateRequiredRule(input: string) {
    const loginPage = new LoginPage(this.page);
    if (this.page.url() === loginPage.loginPageUrl()) {
      if (input === 'email') {
        await this.formPasswordInput.type(this.unregisteredEmailPassword());
      }
      if (input === 'password') {
        await this.formEmailInputLoginPage().type(this.unregisteredEmail());
      }
      await this.formSubmitButton.click();
    }
    if (this.page.url() === this.signUpPageUrl()) {
      if (input === 'email') {
        if (page === quizIslamqaUrl) {
          await this.formEmailInput.type(this.unregisteredEmail());
          await this.formEmailInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await this.formPasswordInput.type(this.unregisteredEmailPassword());
          await this.formConfirmPasswordInput.type(this.unregisteredEmailPassword());
          await this.formSubmitButton.click();
        }
      }
      if (input === 'password') {
        if (page === quizIslamqaUrl) {
          await this.formPasswordInput.type(this.unregisteredEmail());
          await this.formPasswordInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await this.formEmailInput.type(this.unregisteredEmail());
          await this.formConfirmPasswordInput.type(this.unregisteredEmailPassword());
          await this.formSubmitButton.click();
        }
      }
      if (input === 'confirm_password') {
        if (page === quizIslamqaUrl) {
          await this.formConfirmPasswordInput.type(this.unregisteredEmail());
          await this.formConfirmPasswordInput.clear();
        }
        if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
          await this.formEmailInput.type(this.unregisteredEmail());
          await this.formPasswordInput.type(this.unregisteredEmailPassword());
          await this.formSubmitButton.click();
        }
      }
    }
  }
  async violateEmailRule() {
    const loginPage = new LoginPage(this.page);
    if (page === quizIslamqaUrl) {
      await this.formEmailInputLoginPage().type(this.invalidEmail());
    }
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await this.formEmailInputLoginPage().type(this.invalidEmail());
        await this.formPasswordInput.type(this.unregisteredEmailPassword());
        await this.formSubmitButton.click();
      }
      if (this.page.url() === this.signUpPageUrl()) {
        await this.formEmailInput.type(this.invalidEmail());
        await this.formPasswordInput.type(this.unregisteredEmailPassword());
        await this.formConfirmPasswordInput.type(this.unregisteredEmailPassword());
        await this.formSubmitButton.click();
      }
    }
  }

  async violateMinLength8Rule() {
    await this.formPasswordInput.type(this.shortPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await this.formEmailInput.type(this.unregisteredEmail());
      await this.formConfirmPasswordInput.type(this.shortPassword());
      await this.formSubmitButton.click();
    }
  }

  async violateUpperLowerNumberRule() {
    await this.formPasswordInput.type(this.invalidFormattedPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await this.formEmailInput.type(this.unregisteredEmail());
      await this.formConfirmPasswordInput.type(this.invalidFormattedPassword());
      await this.formSubmitButton.click();
    }
  }

  async violateMatchPasswordRule() {
    await this.formPasswordInput.type(this.unregisteredEmailPassword());
    await this.formConfirmPasswordInput.type(this.shortPassword());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await this.formEmailInput.type(this.unregisteredEmail());
      await this.formSubmitButton.click();
    }
  }

  async showNotMatchedPasswordsError() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      await expect(this.formInputError('')).toBeVisible();
      expect(
        dataText.ar.signUpPage.confirmPasswordInputNotMatchedErrorMessage.indexOf(
          await this.formInputError('').textContent(),
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
    if (page === quizIslamqaUrl) {
      await expect(this.formInputError('')).toBeVisible();
      expect(
        dataText.ar.signUpPage.requiredErrorMessage.indexOf(
          await this.formInputError('').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (page === quizIslamqaUrlOS) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await expect(this.formInputErrorLoginPage('required')).toBeVisible();
        expect(
          dataText.ar.loginPage.requiredErrorMessage.indexOf(
            await this.formInputErrorLoginPage('required').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === this.signUpPageUrl()) {
        await expect(this.formInputError('')).toBeVisible();
        expect(
          dataText.ar.signUpPage.requiredErrorMessage.indexOf(
            await this.formInputError('').textContent(),
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
      if (this.page.url() === this.signUpPageUrl()) {
        await expect(this.formInputError('required')).toBeVisible();
        expect(
          dataText.ar.signUpPage.requiredErrorMessage.indexOf(
            await this.formInputError('required').textContent(),
          ),
        ).not.toEqual(-1);
      }
    }
  }
  async showInvalidEmailMessage() {
    const loginPage = new LoginPage(this.page);
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      await expect(this.formInputError('email')).toBeVisible();
      expect(
        dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
          await this.formInputError('email').textContent(),
        ),
      ).not.toEqual(-1);
    }
    if (page === quizIslamqaUrlOS) {
      if (this.page.url() === loginPage.loginPageUrl()) {
        await expect(this.formInputErrorLoginPage('email')).toBeVisible();
        expect(
          dataText.ar.loginPage.emailInputInvalidEmailErrorMessage.indexOf(
            await this.formInputErrorLoginPage('email').textContent(),
          ),
        ).not.toEqual(-1);
      }
      if (this.page.url() === this.signUpPageUrl()) {
        await expect(this.formInputError('email')).toBeVisible();
        expect(
          dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
            await this.formInputError('email').textContent(),
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
      await expect(this.formInputError('255Character')).toBeVisible();
      await expect(this.formInputError('255Character')).toHaveText(
        dataText.ar.signUpPage.emailInput255CharacterErrorMessage[2],
      );
    }
  }
  async showEmailNotActivatedMessage() {
    const loginPage = new LoginPage(this.page);
    if (page === quizIslamqaUrl) {
      await expect(loginPage.statusMessage()).toBeVisible();
      await expect(loginPage.statusMessage()).toHaveText(
        dataText.ar.loginPage.emailInputNotActivatedMessage[0],
      );
    }
    if (page === quizIslamqaUrlBubble) {
      await expect(this.formInputError('')).toBeVisible();
      await expect(this.formInputError('')).toHaveText(
        dataText.ar.loginPage.emailInputNotActivatedMessage[1],
      );
    }
  }
}
export default SignUpPage;
