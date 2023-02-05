import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';
const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class HomePage {
  signInForm() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('#authSection');
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('#Register_Login');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 10; min-height: 0px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]',
      );
    }
  }
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

  homePageFullUrlWithHome() {
    if (page === quizIslamqaUrl) {
      return quizIslamqaUrl;
    }
    if (page === quizIslamqaUrlOS) {
      return `${quizIslamqaUrlOS}home`;
    }
    if (page === quizIslamqaUrlBubble) {
      return quizIslamqaUrlBubble;
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
  startCompetitionButton() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[data-sut-quiz-home-btn='true']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.register-btn');
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="z-index: 4; align-self: center; min-width: 350px; max-width: 350px; order: 2; min-height: 80px; max-height: 80px; height: 80px; flex-grow: 1; width: 350px; margin: 0px; justify-content: space-around; overflow: visible; border-radius: 5px;"] > .bubble-element',
      );
    }
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
  redirectToHomePageUrl() {
    if (page === quizIslamqaUrl) {
      return 'https://quiz.islamqa.info/';
    }
    if (page === quizIslamqaUrlOS) {
      return 'https://atq.outsystemscloud.com/IslamQA_Quiz/Login';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'https://islamqa-quiz.bubbleapps.io/version-test/login';
    }
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
  quizWinsNumber() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[data-number-wins-quiz='true']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator(
        "[style='gap: 6rem; margin-bottom: 0px; padding: 0px 0px 40px;'] > :nth-child(1)",
      );
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="z-index: 2; align-self: flex-start; min-width: 150px; max-width: 150px; order: 1; min-height: 150px; width: 150px; flex-grow: 1; height: max-content; margin: 0px; justify-content: center; overflow: visible; border-style: solid; border-width: 1px; border-color: rgb(229, 231, 235); border-radius: 9999px;"]',
      );
    }
  }
  quizLastResult() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[data-last-result-quiz='true']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator(
        "[style='gap: 6rem; margin-bottom: 0px; padding: 0px 0px 40px;'] > :nth-child(2)",
      );
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="z-index: 3; align-self: flex-start; min-width: 150px; max-width: 150px; order: 2; min-height: 150px; width: 150px; flex-grow: 1; height: max-content; margin: 0px; justify-content: center; overflow: visible; border-style: solid; border-width: 1px; border-color: rgb(229, 231, 235); border-radius: 9999px;"]',
      );
    }
  }

  joinsNumber() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[data-joins-number-quiz='true']");
    }
    if (page === quizIslamqaUrlOS) {
      return this.page.locator(
        "[style='gap: 6rem; margin-bottom: 0px; padding: 0px 0px 40px;'] > :nth-child(3)",
      );
    }
    if (page === quizIslamqaUrlBubble) {
      return this.page.locator(
        '[style="z-index: 3; align-self: flex-start; min-width: 150px; max-width: 150px; order: 3; min-height: 150px; width: 150px; flex-grow: 1; height: max-content; margin: 0px; justify-content: center; overflow: visible; border-style: solid; border-width: 1px; border-color: rgb(229, 231, 235); border-radius: 9999px;"]',
      );
    }
  }
  readonly page: Page | undefined;
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
