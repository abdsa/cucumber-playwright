import { ICustomWorld } from '../support/custom-world';
// import { config } from '../support/config';
import HomePage from '../../pages/homePage';

import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the user is on the home page', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.goto();
});
Then('the user will see the welcome section', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.welcomeSection).toBeVisible();
});
Then('the user will see the description of the competition', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.descriptionSection).toBeVisible();
});

Then(
  'the user will see the instructions in how to do the competition',
  async function (this: ICustomWorld) {
    const homePage = new HomePage(this.page);
    await expect(homePage.instructionsSection).toBeVisible();
  },
);

Then(
  'the user will see the prize that will be given in the competition',
  async function (this: ICustomWorld) {
    const homePage = new HomePage(this.page);
    await expect(homePage.prizeSection).toBeVisible();
  },
);
