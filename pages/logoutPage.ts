import Navigation from './navigation';
import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class LogOutPage {
  readonly menuButtonMain!: Locator;
  readonly menuButtonOS!: Locator;
  readonly menuButtonBubble!: Locator;
  readonly page: Page | undefined;
  readonly logoutMenuItemBubble!: Locator;
  readonly logoutMenuItemOS!: Locator;

  readonly appMenuOverlayBubble!: Locator;
  readonly appMenuOverlayOS!: Locator;

  constructor(page: Page | undefined) {
    this.page = page;
    this.menuButtonMain = page.getByRole('button', { name: 'menu-svg' });
    this.menuButtonOS = page.getByRole('button', { name: 'Toggle the Menu' });
    this.menuButtonBubble = page.locator('div:nth-child(2) > .bubble-element').first();
    this.logoutMenuItemBubble = page.getByText('تسجيل الخروج');
    this.logoutMenuItemOS = page.locator(this.logoutMenuItemSelector());
    this.appMenuOverlayBubble = page.locator('.invisible-div');
    this.appMenuOverlayOS = page.locator('#b1-Navigation').getByRole('button');
  }

  logoutPageUrl() {
    return `${page}logout`;
  }
  async goto() {
    await this.page?.goto(this.logoutPageUrl());
  }
  // appMenuOverlay() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".app-menu-overlay");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(".invisible-div");
  //   }
  // }
  menuButton() {
    if (page === quizIslamqaUrlOS) {
      return "div[role='button'].menu-icon";
    }

    // if (page === quizIslamqaUrlBubble) {
    //   return cy.get(
    //     '[style="align-self: flex-start; min-width: 0%; max-width: 960px; order: 3; min-height: 140px; max-height: 140px; width: 0%; flex-grow: 1; height: 140px; margin: 0px; justify-content: space-between; overflow: visible; border-radius: 0px; padding: 0px 24px;"] > .CustomElement > .bubble-element',
    //   );
    // }
  }
  logoutMenuItemSelector() {
    if (page === quizIslamqaUrlOS) {
      return "div#b2-PageLinks a[href='#']";
    }

    // if (page === quizIslamqaUrlBubble) {
    //   return cy.get("div").contains("تسجيل الخروج").wait(500);
    // }
  }
  async logout() {
    if (page === quizIslamqaUrl) {
      await this.goto();
    }
    if (page === quizIslamqaUrlOS) {
      const navigation = new Navigation(this.page);
      await this.menuButtonOS.click();
      await this.logoutMenuItemOS.click();
      await navigation.checkUnauthenticated();
    }
    if (page === quizIslamqaUrlBubble) {
      const navigation = new Navigation(this.page);
      await this.menuButtonBubble.click();
      await this.logoutMenuItemBubble.click();
      // await this.appMenuOverlayBubble.click();
      await navigation.checkUnauthenticated();
    }
  }
}

export default LogOutPage;
