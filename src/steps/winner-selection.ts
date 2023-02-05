import Competition from '../../pages/competitionPage';
import WinnerSelectionPage from '../../pages/winnerSelectionPage';
import LoginPage from '../../pages/loginPage';
import dataText from '../../dataText';
import { ICustomWorld } from '../support/custom-world';
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const expiredCompetition = 'Wed 19 Jan 2023';

Given('the user is authenticated as the admin', async function (this: ICustomWorld) {
  const competition = new Competition(this.page);
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.formEmailInput.type(competition.competitionAdminUserEmail());
  await loginPage.formPasswordInput.type(competition.competitionAdminUserPassword());
  await loginPage.formSubmitButton.click();
  await this.page.waitForTimeout(500);
});

Given('the admin is on the winner selection page', async function (this: ICustomWorld) {
  const winnerSelectionPage = new WinnerSelectionPage(this.page);
  await winnerSelectionPage.goto();
});

Given('there is an expired competition', async function (this: ICustomWorld) {
  const winnerSelectionPage = new WinnerSelectionPage(this.page);
  await winnerSelectionPage.winnerSelectionCompetitionDropdown().selectOption(expiredCompetition);
});

Given(
  'there are competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition',
  async function (this: ICustomWorld) {
    const winnerSelectionPage = new WinnerSelectionPage(this.page);
    expect(
      await this.page.waitForSelector(
        winnerSelectionPage.winnerSelectionFirstQualifiedCompetitorSelector(),
        { state: 'attached' },
      ),
    ).not.toBeNull();
  },
);

Then(
  'the admin will be able to see the competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition',
  async function (this: ICustomWorld) {
    const winnerSelectionPage = new WinnerSelectionPage(this.page);
    await expect(
      winnerSelectionPage.winnerSelectionFirstQualifiedCompetitorLocator(),
    ).toBeVisible();
  },
);

Then(
  'the admin will be able to select a number of competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition',
  async function (this: ICustomWorld) {
    const winnerSelectionPage = new WinnerSelectionPage(this.page);
    const buttons = await this.page.$$(
      winnerSelectionPage.winnerSelectionSelectingTheWinnersButtonSelector(),
    );
    buttons.forEach((el) => el.click());
    await expect(winnerSelectionPage.winnerSelectionSelectingTheWinnersButtonLocator()).toHaveText(
      dataText.ar.winnerSelection.winnerSelectionSelectedTheWinnerButton,
    );
  },
);
