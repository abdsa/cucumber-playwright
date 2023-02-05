import WinnersPage from '../../pages/winnersPage';
import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';

Then(
  'the user will be able to see a list of winners with their names, countries, and competition date of any expired competition',
  async function (this: ICustomWorld) {
    const winnersPage = new WinnersPage(this.page);
    await expect(winnersPage.winnerName()).toBeVisible();
    await expect(winnersPage.winnerCountry()).toBeVisible();
    await expect(winnersPage.winnerCompetition()).toBeVisible();
  },
);
