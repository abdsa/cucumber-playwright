// Given('the user is on the {string} page', async function (this: ICustomWorld, page: string) {
//   if (page === 'terms and conditions' || page === 'faq') {
//     const staticPages = new StaticPages(this.page);
//     staticPages.goto(page);
//   }
// });

/* There are failing tests for these reasons in the OS system:

1- A page is not available yet.
2- Cypress sees double elements.

*/
import LoginPage from '../../pages/loginPage';
import Navigation from '../../pages/navigation';
import dataText from '../../dataText';
import LogOutPage from '../../pages/logoutPage';
import { ICustomWorld } from '../support/custom-world';
import HomePage from '../../pages/homePage';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const navigation = new Navigation(undefined);

Given('the user is "not authenticated"', () => {
  navigation.checkUnauthenticated();
});

Given('the user is "authenticated"', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.formEmailInput.type(loginPage.registeredEmail());
  await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
  await loginPage.formSubmitButton.click();
  this.page.waitForTimeout(10000);
});

Given(
  'the user is on the {string} page',
  async function (this: ICustomWorld, page: keyof typeof navigation.pagesObject) {
    // const logoutPage = new LogOutPage(page);
    await this.page.goto(navigation.pagesObject()[page]);

    // if (page === 'logout') {
    //   logoutPage.logout();
    // } else {
    //   cy.visit(navigation.pagesObject()[page]);
    // }
  },
);

Then(
  'the user will able to navigate to the {string} page',
  async function (this: ICustomWorld, pageNav: keyof typeof dataText.ar.navigation) {
    if (pageNav === 'logout') {
      const logoutPage = new LogOutPage(this.page);
      await logoutPage.logout();
    } else {
      const navigation = new Navigation(this.page);
      await navigation.menuButtonSelector().click();
      await navigation.menuList
        .getByText(dataText.ar.navigation[pageNav])
        .click()
        .then(() => {
          expect(this.page?.url()).toEqual(navigation.pagesObject()[pageNav]);
          // .should('include', navigation.pagesObject()[pageNav]);
        });
    }
  },
);
//     .find(
//       pageNav === 'start competition' || pageNav === 'profile'
//         ? navigation.menuListItemStartCompetition()
//         : navigation.menuListItem(),
//     )
//     .contains(dataText.ar.navigation[pageNav])
//     .click()
//     .then(() => {
//       if (pageNav === 'logout') {
//         navigation.checkUnauthenticated();
//       } else {
//         cy.url().should('include', navigation.pagesObject()[pageNav]);
//       }
//     });
// });

When('the user clicks on the logo', async function (this: ICustomWorld) {
  const navigation = new Navigation(this.page);
  await navigation.logo.click();
});

Then('the user will navigate to the home page', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  expect(this.page.url()).toEqual(homePage.homePageFullUrl());
});

Then(
  'the user will be able to navigate to the social media accounts of islamqa',
  async function (this: ICustomWorld) {
    // navigation.footer().scrollIntoView();
    expect(navigation.footerInstagramIcon).toBeVisible();
    await navigation.footerInstagramIcon.click();
    expect(navigation.footerYoutubeIcon).toBeVisible();
    await navigation.footerYoutubeIcon.click();
    expect(navigation.footerFacebookIcon).toBeVisible();
    await navigation.footerFacebookIcon.click();
    expect(navigation.footerSoundCloudIcon).toBeVisible();
    await navigation.footerSoundCloudIcon.click();
  },
);
