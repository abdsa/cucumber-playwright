import dataText from '../dataText';
import { config } from '../src/support/config';
import { Locator, Page, expect } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';

class NotFoundPage {
  readonly page: Page | undefined;
  readonly notFoundMessage!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.notFoundMessage = page.locator(this.notFoundPageMessageSelector());
    }
  }
  invalidRoute() {
    return `${page}invalid`;
  }

  notFoundPageMessageSelector() {
    if (page === quizIslamqaUrl) {
      return '.font-normal';
    }
    return '';
  }
  async checkNotFoundMessage() {
    if (page === quizIslamqaUrl) {
      await expect(this.notFoundMessage).toBeVisible();
      await expect(this.notFoundMessage).toHaveText(dataText.ar.notFound.notFoundPageMessage);
    }
  }

  async visitInvalidRoute() {
    if (page === quizIslamqaUrl) {
      await this.page?.goto(this.invalidRoute());
    } else {
      const response = await this.page?.goto(this.invalidRoute());
      expect(response?.ok()).toBe(false);
    }
  }
}

export default NotFoundPage;
