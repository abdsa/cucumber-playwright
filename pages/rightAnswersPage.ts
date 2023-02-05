import { config } from '../src/support/config';
import { Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class RightAnswersPage {
  readonly page: Page | undefined;

  constructor(page: Page | undefined) {
    this.page = page;
  }
  rightAnswersPageUrl() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      return `${page}right-answers`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}right_answers`;
    }
  }
  rightAnswersExpiredCompetitionSelectContainerSelect() {
    return this.page.locator('select');
  }

  rightAnswerSingle() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('div.flex.flex-col.mb-5');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator("div[style='text-align: right; padding: 0px;']");
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        "[class^='bubble-element GroupItem bubble-r-container flex column group-item entry-']",
      );
    }
  }
}

export default RightAnswersPage;
