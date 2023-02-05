import { config } from '../src/support/config';
import { Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class WinnerSelectionPage {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }

  async goto() {
    this.page.goto(this.winnerSelectionUrl());
  }
  winnerSelectionUrl() {
    if (page === quizIslamqaUrlOS) {
      return '/winnerselection';
    }

    if (page === quizIslamqaUrlBubble) {
      return '/selectwinner';
    }
  }
  winnerSelectionCompetitionDropdown() {
    return this.page.locator('select');
  }

  winnerSelectionFirstQualifiedCompetitor() {
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.list-item');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.entry-1');
    }
  }

  winnerSelectionSelectingTheWinnersButton() {
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('button');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.RepeatingGroup .clickable-element:visible');
    }
  }
}

export default WinnerSelectionPage;
