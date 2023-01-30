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
// import HomePage from '../pages/homePage';
import dataText from '../../dataText';
// import LogOutPage from '../pages/logoutPage';
import { ICustomWorld } from '../support/custom-world';
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const navigation = new Navigation(undefined);
// const logoutPage = new LogOutPage();

// const homePage = new HomePage();

Given('the user is "not authenticated"', () => {
  navigation.checkUnauthenticated();
});

Given('the user is "authenticated"', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.formEmailInput.type(loginPage.registeredEmail());
  await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
  await loginPage.formSubmitButton.click();
  this.page.waitForTimeout(6000);
});

Given(
  'the user is on the {string} page',
  async function (this: ICustomWorld, page: keyof typeof navigation.pagesObject) {
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
    const navigation = new Navigation(this.page);
    await navigation.menuButton.click();
    await navigation.menuList
      .getByText(dataText.ar.navigation[pageNav])
      .click()
      .then(() => {
        if (pageNav === 'logout') {
          navigation.checkUnauthenticated();
        } else {
          expect(this.page?.url()).toEqual(navigation.pagesObject()[pageNav]);
          // .should('include', navigation.pagesObject()[pageNav]);
        }
      });
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

// When('the user clicks on the logo', () => {
//   navigation.Logo().click();
// });

// Then('the user will navigate to the home page', () => {
//   cy.url().should('eq', homePage.homePageFullUrl());
// });

// Then('the user will be able to navigate to the social media accounts of islamqa', () => {
//   navigation.footer().scrollIntoView();
//   navigation.footerInstagramIcon().should('be.visible');
//   navigation.footerInstagramIcon().click();
//   navigation.footerYoutubeIcon().should('be.visible');
//   navigation.footerYoutubeIcon().click();
//   navigation.footerFacebookIcon().should('be.visible');
//   navigation.footerFacebookIcon().click();
//   navigation.footerSoundCloudIcon().should('be.visible');
//   navigation.footerSoundCloudIcon().click();
// });
