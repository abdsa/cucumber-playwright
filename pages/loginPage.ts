import { config } from '../src/support/config';
import { Page, Locator, expect } from '@playwright/test';

const page = config.BASE_URL;

const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class LoginPage {
  readonly page: Page | undefined;
  readonly formEmailInput!: Locator;
  readonly formPasswordInput!: Locator;
  readonly formSubmitButton!: Locator;
  readonly statusMessageOS!: Locator;
  readonly statusMessageMain!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.formEmailInput = page.locator(this.formEmailInputSelector());
      this.formPasswordInput = page.locator(this.formPasswordInputSelector());
      this.formSubmitButton = page.locator(this.formSubmitButtonSelector());
      this.statusMessageOS = page
        .locator('div')
        .filter({ hasText: 'البريد الإلكتروني مستخدم' })
        .nth(1);
      this.statusMessageMain = page.locator("[role='status']");
    }
  }
  async goto() {
    await this.page?.goto(this.loginPageUrl());
  }
  loginForm() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.form-section');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator("[style='padding: 200px 0px;']");
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 6; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]',
      );
    }
  }

  loginPageUrl() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      return `${page}login`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}Login`;
    }
    return '';
  }

  formEmailInputSelector() {
    return "input[placeholder='البريد الإلكتروني']";
  }

  loginSuccessMessageLocator() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.go3958317564');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.Popup:visible');
    }
  }

  loginSuccessMessageSelector() {
    if (page === quizIslamqaUrl) {
      return '.go3958317564';
    }
    if (page === quizIslamqaUrlOS) {
      return '.feedback-message-text';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.Popup:visible';
    }
  }

  formPasswordInputSelector() {
    return "input[type='password']";
  }

  formSubmitButtonSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return "button[type='submit']";
    } else {
      return '.Button:visible';
    }
  }

  // signUpFormSucceededMessage() {
  //   return cy.get('[data-sut-registeration-succeeded="true"]');
  // }

  // formInputError() {
  //   return cy.get('.text-xs:visible');
  // }

  signUpFormFillInvalidPasswordLength() {
    return 'example';
  }
  notMatchedEmail() {
    return 'example@hello.com';
  }
  signUpFormFillInvalidPasswordNoCaps() {
    return 'examples';
  }

  signUpFormFillValidPasswordNoCaps() {
    return 'exampleS1';
  }

  registeredEmail() {
    return 'abd.sab111@gmail.com';
  }

  notActivatedAccountEmail() {
    return 'fdsafsd@gmail.com';
  }

  registeredEmailPassword() {
    return '1Liketheweb';
  }

  notMatchedEmailPassword() {
    return 'jkljlkjfkljks';
  }

  statusMessage() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[role='status']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 6; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]',
      );
    }
  }
  // wait() {
  //   if (page === quizIslamqaUrl) {
  //     await sleep(5000);
  //   } else {
  //     cy.wait(500);
  //   }
  // }

  async showDoesntMatchAnyAccountMessage(message: string) {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      await expect(this.statusMessage()).toHaveText(message);
    }

    //   if (page === quizIslamqaUrlBubble) {
    //     // Without this wait, the test ends without testing the alert text
    //     cy.wait(1000);
    //     cy.on('window:alert', (str) => {
    //       expect(str).to.equal(message);
    //     });
    //   }
    // }
  }
}
export default LoginPage;
