import RightAnswersPage from '../../pages/rightAnswersPage';
import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';
Then(
  'the user will be able to see the right answers of the questions of any expired competition',
  async function (this: ICustomWorld) {
    const rightAnswersPage = new RightAnswersPage(this.page);

    await expect(
      rightAnswersPage.rightAnswersExpiredCompetitionSelectContainerSelect(),
    ).toBeVisible();
    await expect(rightAnswersPage.rightAnswerSingle()).toBeVisible();
  },
);
