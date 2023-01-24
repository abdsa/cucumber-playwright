import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

export class StaticPages {
  pagesObject() {
    return {
      'terms and conditions': `${page}terms`,
      faq: `${page}faq`,
    };
  }

  pageContentSelector(): string {
    if (page === quizIslamqaUrl) {
      return '.rounded-lg';
    }
    if (page === quizIslamqaUrlOS) {
      return '.display-flex.flex-direction-column.ThemeGrid_Width8';
    }
    if (page === quizIslamqaUrlBubble) {
      return "[style='align-self: flex-end; min-width: 100%; max-width: 100%; order: 1; min-height: 10px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: var(--font_default); font-size: 18px; font-weight: 400; color: rgb(0, 0, 0); text-align: right; line-height: 1.4; border-radius: 0px;']";
    }
    return '';
  }

  readonly page: Page | undefined;
  readonly pageContent!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.pageContent = page.locator(this.pageContentSelector());
    }
  }
  async goto(page: 'terms and conditions' | 'faq') {
    await this.page?.goto(this.pagesObject()[page]);
  }
}
