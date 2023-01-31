import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';
const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class HomePage {
  welcomeSectionSelector() {
    if (page === quizIslamqaUrl) {
      return "[data-sut-hero-section='true']";
    }
    if (page === quizIslamqaUrlOS) {
      return "[role='banner']";
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="align-self: center; min-width: 100%; max-width: 100%; order: 2; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: center; overflow: visible; border-radius: 5px;"]';
    }
    return '';
  }

  homePageFullUrl() {
    if (page === quizIslamqaUrl) {
      return quizIslamqaUrl;
    }
    if (page === quizIslamqaUrlOS) {
      return quizIslamqaUrlOS;
    }
    if (page === quizIslamqaUrlBubble) {
      return quizIslamqaUrlBubble;
    }
    return '';
  }

  descriptionSectionSelector() {
    if (page === quizIslamqaUrl) {
      return "[data-sut-description-section='true']";
    }
    if (page === quizIslamqaUrlOS) {
      return '#Description';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 5; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"] > .Group';
    }
    return '';
  }
  instructionsSectionSelector() {
    if (page === quizIslamqaUrl) {
      return "[data-sut-instruction-section='true']";
    }
    if (page === quizIslamqaUrlOS) {
      return '#Rules';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 3; align-self: center; min-width: 0px; max-width: 960px; order: 2; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 32px 0px; justify-content: flex-start; overflow: hidden auto; background-color: rgb(255, 255, 255); border-radius: 0px;"]';
    }
    return '';
  }

  prizeSectionSelector() {
    if (page === quizIslamqaUrl) {
      return "[data-sut-prize-section='true']";
    }
    if (page === quizIslamqaUrlOS) {
      return '#Prize';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 2; align-self: center; min-width: 0px; max-width: 960px; order: 1; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: calc(100% - 0px); margin: 0px; justify-content: flex-start; overflow: visible; border-radius: 5px; padding: 24px;"]';
    }
    return '';
  }
  readonly page;
  readonly welcomeSection!: Locator;
  readonly descriptionSection!: Locator;
  readonly instructionsSection!: Locator;
  readonly prizeSection!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.welcomeSection = page.locator(this.welcomeSectionSelector());
      this.descriptionSection = page.locator(this.descriptionSectionSelector());
      this.prizeSection = page.locator(this.instructionsSectionSelector());
      this.instructionsSection = page.locator(this.prizeSectionSelector());
    }
  }
  async goto() {
    await this.page?.goto(this.homePageFullUrl());
  }
}
export default HomePage;
