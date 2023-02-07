// In the Outsystems version, the app redirects the user to the "/InvalidPermissions" page when the user tries
// to navigate to the "/terms" page

import ContactPage from './contactPage';
// import HomePage from './homePage';

import FaqPage from './faqPage';
import CompetitionPage from './competitionPage';
import WinnersPage from './winnersPage';
import RightAnswersPage from './rightAnswersPage';
import ProfilePage from './profilePage';
import ResetPasswordPage from './resetPasswordPage';
import TermsPage from './termsPage';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import { config } from '../src/support/config';
import { Locator, Page, expect } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
const faqPage = new FaqPage();
const competitionPage = new CompetitionPage(undefined);
const contactPage = new ContactPage(undefined);
const profilePage = new ProfilePage(undefined);
const winnersPage = new WinnersPage(undefined);
const rightAnswersPage = new RightAnswersPage(undefined);
const termsPage = new TermsPage();
const resetPasswordPage = new ResetPasswordPage(undefined);
const loginPage = new LoginPage(undefined);
const signUpPage = new SignUpPage(undefined);
class Navigation {
  readonly page: Page | undefined;
  readonly menuButtonMain!: Locator;
  readonly menuButtonOS!: Locator;
  readonly menuButtonBubble!: Locator;
  readonly menuList!: Locator;
  readonly menuListItem!: Locator;
  readonly menuListItemStartCompetition!: Locator;
  readonly logo!: Locator;
  readonly footerInstagramIcon!: Locator;
  readonly footerFacebookIcon!: Locator;
  readonly footerSoundCloudIcon!: Locator;
  readonly footerYoutubeIcon!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.menuButtonMain = page.getByRole('button', { name: 'menu-svg' });
      this.menuButtonBubble = page.locator('div:nth-child(2) > .bubble-element').first();
      this.menuButtonOS = page.getByRole('button', { name: 'Toggle the Menu' });
      this.menuList = page.locator(this.menuListSelector());
      this.menuListItem = page.locator(this.menuListItemSelector());
      this.menuListItemStartCompetition = page.locator(this.menuListItemStartCompetitionSelector());
      this.logo = page.locator(this.Logo());
      this.footerFacebookIcon = page.locator(this.footerFacebookIconSelector());
      this.footerSoundCloudIcon = page.locator(this.footerSoundCloudIconSelector());
      this.footerYoutubeIcon = page.locator(this.footerYoutubeIconSelector());
      this.footerInstagramIcon = page.locator(this.footerInstagramIconSelector());
    }
  }
  pagesObject() {
    return {
      home: this.homePage(),
      about: faqPage.faqPageUrl(),
      'start competition': competitionPage.competitionPageUrl(),
      'terms and conditions': termsPage.termsPageUrl(),
      winners: winnersPage.winnersPageUrl(),
      'right answers': rightAnswersPage.rightAnswersPageUrl(),
      contact: contactPage.contactPageUrl(),
      profile: profilePage.profilePageUrl(),
      'reset password': resetPasswordPage.resetPasswordPageUrl(),
      login: loginPage.loginPageUrl(),
      'sign up': signUpPage.signUpPageUrl(),
    };
  }
  homePage() {
    if (page === quizIslamqaUrl) {
      return page;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}home`;
    }
    if (page === quizIslamqaUrlBubble) {
      return page;
    }
  }
  Logo() {
    if (page === quizIslamqaUrl) {
      return 'a.cursor-pointer > img';
    }
    if (page === quizIslamqaUrlOS) {
      return '.header-content > .ThemeGrid_MarginGutter';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.bubble-element.Image.clickable-element';
    }
  }

  menuButtonSelector() {
    if (page === quizIslamqaUrl) {
      return this.menuButtonMain;
    }
    if (page === quizIslamqaUrlOS) {
      return this.menuButtonOS;
    }
    if (page === quizIslamqaUrlBubble) {
      return this.menuButtonBubble;
    }
  }

  menuListSelector() {
    if (page === quizIslamqaUrl) {
      return 'nav > .flex-col';
    }
    if (page === quizIslamqaUrlOS) {
      return '#b2-PageLinks';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.slideable-menu';
    }
    return '';
  }

  menuListItemSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return 'a';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'div';
    }
    return '';
  }

  menuListItemButton() {
    return 'button';
  }

  menuListItemStartCompetitionSelector() {
    if (page === quizIslamqaUrl) {
      return 'button';
    }
    if (page === quizIslamqaUrlOS) {
      return 'a';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'div';
    }
    return '';
  }

  footerInstagramIconSelector() {
    if (page === quizIslamqaUrl) {
      return "a[href='https://www.instagram.com/islamqa/']";
    }
    if (page === quizIslamqaUrlOS) {
      return '.fa-instagram';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 3; align-self: flex-start; min-width: 40px; max-width: 40px; order: 1; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; padding: 5px; text-align: center; background: none; border: none; display: block; color: rgb(255, 255, 255); border-radius: 4px; cursor: pointer;"]';
    }
  }

  footerSoundCloudIconSelector() {
    if (page === quizIslamqaUrl) {
      return "a[href='https://soundcloud.com/islamqa']";
    }
    if (page === quizIslamqaUrlOS) {
      return '.fa-cloud';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 4; align-self: flex-start; min-width: 40px; max-width: 40px; order: 2; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; padding: 5px 0px; text-align: center; background: none; border: none; display: block; color: rgb(255, 255, 255); border-radius: 4px; cursor: pointer;"]';
    }
  }

  footerYoutubeIconSelector() {
    if (page === quizIslamqaUrl) {
      return "a[href='https://www.youtube.com/channel/UCNiLZ4Nq_eh1YeItHqahtVg']";
    }
    if (page === quizIslamqaUrlOS) {
      return '.fa-youtube-play';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 4; align-self: flex-start; min-width: 40px; max-width: 40px; order: 3; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; padding: 5px; text-align: center; background: none; border: none; display: block; color: rgb(255, 255, 255); border-radius: 4px; cursor: pointer;"]';
    }
  }
  footerFacebookIconSelector() {
    if (page === quizIslamqaUrl) {
      return "a[href='https://www.facebook.com/IslamQAcom']";
    }
    if (page === quizIslamqaUrlOS) {
      return '.fa-facebook';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 4; align-self: flex-start; min-width: 40px; max-width: 40px; order: 4; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; padding: 5px; text-align: center; background: none; border: none; display: block; color: rgb(255, 255, 255); border-radius: 4px; cursor: pointer;"]';
    }
  }

  footerTwitterIcon() {
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 4; align-self: flex-start; min-width: 40px; max-width: 40px; order: 3; min-height: 40px; max-height: 40px; width: 40px; flex-grow: 1; height: 40px; margin: 0px; padding: 5px; text-align: center; background: none; border: none; display: block; color: rgb(255, 255, 255); border-radius: 4px; cursor: pointer;"]';
    }
  }
  footer() {
    if (page === quizIslamqaUrlBubble) {
      return '[style="z-index: 7; align-self: flex-start; min-width: 100%; max-width: 100%; order: 11; min-height: 260px; max-height: 260px; height: 260px; flex-grow: 1; width: 100%; margin: 0px; justify-content: center; overflow: visible; background-color: var(--color_primary_contrast_default); border-radius: 0px;"]';
    } else {
      return 'footer';
    }
  }

  async checkUnauthenticated() {
    if (page === quizIslamqaUrl) {
      await this.page?.goto(`${page}quiz`, { waitUntil: 'networkidle' });
      // await this.page.waitForTimeout(2000);
      expect(this.page?.url()).toEqual(`${page}login`);
    }

    if (page === quizIslamqaUrlBubble) {
      await this.page?.goto(`${page}competition`, { waitUntil: 'networkidle' });
      expect(this.page?.url()).toEqual(`${page}login`);
    }
    if (page === quizIslamqaUrlOS) {
      await this.page?.goto(`${page}competition`, { waitUntil: 'networkidle' });
      // await this.page?.waitForTimeout(2000);
      // await this.page.waitForNavigation();
      expect(this.page?.url()).toEqual(`${page}Login`);
    }
  }

  async goto(pageName: keyof typeof this.pagesObject) {
    await this.page?.goto(this.pagesObject()[pageName]);
  }
}

export default Navigation;
