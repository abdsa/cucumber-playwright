import { config } from '../src/support/config';
import { Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class ResetPasswordPage {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }
  resetPasswordPageUrl() {
    if (page === quizIslamqaUrl) {
      return `${page}forget-password`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}resetpw`;
    }
    if (page === quizIslamqaUrlBubble) {
      return `${page}reset-password`;
    }
  }

  async goto() {
    await this.page.goto(this.resetPasswordPageUrl());
  }

  resetPasswordForm() {
    return page === quizIslamqaUrl ? this.page.locator('form') : this.page.locator('input');
  }

  formEmailInput() {
    return this.page.locator('input');
  }

  resetPasswordFormLoginLink() {
    return this.page.locator('.hyperlink-text');
  }

  resetPasswordFormUnregisteredEmail() {
    return 'fasdjfsldkf@gmail.com';
  }

  resetPasswordFormOnRequestButton() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("button[type='submit']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator("button[type='button']");
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.Button:visible');
    }
  }

  statusMessage(isPopup: boolean) {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.go2072408551');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }
    if (page === quizIslamqaUrlBubble) {
      if (isPopup) {
        return this.page.locator('.Popup');
      } else {
        return this.page.locator('.validation-message');
      }
    }
  }

  resetPasswordFormTitle() {
    return this.page.locator('h1');
  }

  resetFormInvalidEmail() {
    return 'example@hello';
  }
  resetPasswordRegisteredEmail() {
    return 'abd.sab111@gmail.com';
  }

  formInputError(validityRuleForBubble: 'email' | 'required') {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.text-xs:visible');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }
    if (page === quizIslamqaUrlBubble) {
      if (validityRuleForBubble === 'email') {
        return this.page
          .locator('.validation-message')
          .filter({ hasText: 'الرجاء إدخال بريد إلكتروني صحيح' });
      }
      if (validityRuleForBubble === 'required') {
        return this.page.locator('.validation-message').filter({ hasText: 'هذا الحقل مطلوب' });
      }
    }
  }

  violateRequiredRule() {
    this.resetPasswordFormOnRequestButton().click();
  }
  violateEmailRule() {
    this.formEmailInput().type(this.resetFormInvalidEmail());
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      this.resetPasswordFormOnRequestButton().click();
    }
  }
}

export default ResetPasswordPage;
