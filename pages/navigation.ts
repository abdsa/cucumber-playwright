// Social media icons don't open a new tab in Bubble
// Can't type the 399 character in phone filed in profile form
// In the Outsystems version, the 255 error message for email field is not showing, instead the "invalid email error message" is showing
// There is no login success message in the bubble and the Outsystems version
// Cannot know if I am not authenticated

import ContactPage from './contactPage';
import { HomePage } from './homePage';

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
const homePage = new HomePage(undefined);
const faqPage = new FaqPage();
const competitionPage = new CompetitionPage();
const contactPage = new ContactPage(undefined);
const profilePage = new ProfilePage();
const winnersPage = new WinnersPage();
const rightAnswersPage = new RightAnswersPage();
const termsPage = new TermsPage();
const resetPasswordPage = new ResetPasswordPage();
const loginPage = new LoginPage(undefined);
const signUpPage = new SignUpPage();
class Navigation {
  readonly page: Page | undefined;
  readonly menuButton!: Locator;
  readonly menuList!: Locator;
  readonly menuListItem!: Locator;
  readonly menuListItemStartCompetition!: Locator;
  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.menuButton = page.getByRole('button', { name: 'menu-svg' });
      this.menuList = page.locator(this.menuListSelector());
      this.menuListItem = page.locator(this.menuListItemSelector());
      this.menuListItemStartCompetition = page.locator(this.menuListItemStartCompetitionSelector());
    }
  }
  pagesObject() {
    return {
      home: page,
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
      return 'button img';
    }
    if (page === quizIslamqaUrlOS) {
      return '.menu-icon';
    }
    if (page === quizIslamqaUrlBubble) {
      return '[style="align-self: flex-start; min-width: 0%; max-width: 960px; order: 3; min-height: 140px; max-height: 140px; width: 0%; flex-grow: 1; height: 140px; margin: 0px; justify-content: space-between; overflow: visible; border-radius: 0px; padding: 0px 24px;"] > .CustomElement > .bubble-element';
    }
    return '';
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

  footerInstagramIcon() {
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

  footerSoundCloudIcon() {
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

  footerYoutubeIcon() {
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
  footerFacebookIcon() {
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
      await this.page?.goto(`${page}/competition`);
      await this.page?.evaluate(() => {
        expect(localStorage.getItem('auth_info')).toBeNull();
      });
    }

    if (page === quizIslamqaUrlBubble) {
      await this.page?.goto(`${page}/competition`);
      expect(this.page?.url()).toEqual(`${page}login`);
    }
    if (page === quizIslamqaUrlOS) {
      await this.page?.goto(homePage.homePageFullUrl());
      await this.page?.evaluate(() => {
        expect(localStorage.getItem('$OS_Users$$ClientVars$$SESSION_USER_ID')).toEqual('0');
      });
    }
  }

  async goto(pageName: keyof typeof this.pagesObject) {
    await this.page?.goto(this.pagesObject()[pageName]);
  }
}

export default Navigation;
