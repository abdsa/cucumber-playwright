// import dataText from "../../dataText";

import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';
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
}
export default SignUpPage;
