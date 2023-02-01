import { config } from '../src/support/config';
import { Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class SignInPageWithResetPasswordPage {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }
  onAuthenticatedLogoutButton() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('button.bg-primary-color');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator("button[type='button']");
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.Button:visible');
    }
  }
}

export default SignInPageWithResetPasswordPage;
