import CompetitionPage from '../../pages/competitionPage';
import LoginPage from '../../pages/loginPage';
import dataText from '../../dataText';
import WinnerSelectionPage from '../../pages/winnerSelectionPage';
import HomePage from '../../pages/homePage';
import ProfilePage from '../../pages/profilePage';
import { ICustomWorld } from '../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// const currentDate = new Date();
// const currentDateDateString = currentDate.toDateString();
// const currentDateOSText = `${currentDate}ابدأ المسابقة`;
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 2);
const currentDateOS = `Thu 19 Jan 2023`;
const currentDateOSRev = `Thu 19 Jan 2023`;
const tomorrowOS = `Thu 19 Jan 2023`;
// const tomorrowText = `14-01-2023`;
// const yesterday = new Date();
const yesterdayOS = `Tue 17 Jan 2023`;
const tomorrowCompetitionMessage = 'عذراً، المسابقة لم تبدأ بعد، ستبدأ بتاريخ  19/01/2023';
Given('the user is authenticated with updated profile', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  const loginPage = new LoginPage(this.page);
  const homePage = new HomePage(this.page);
  await loginPage.goto();
  await loginPage.formEmailInput.type(competitionPage.competitionAdminUserEmail());
  await loginPage.formPasswordInput.type(competitionPage.competitionAdminUserPassword());
  await loginPage.formSubmitButton.click();
  await this.page.waitForURL(homePage.homePageFullUrlWithHome(), { waitUntil: 'networkidle' });
});

Given('the user is on the competition page', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);

  await competitionPage.goToQuizPage();
});

Given('there is a competition that is running', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);

  await competitionPage.gotoCreateCompetition();
  await expect(
    competitionPage.competitionInCompetitionPage().filter({ hasText: currentDateOS }),
  ).toHaveText(currentDateOS);
});

Given('the user did not give the competition any attempts', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  const winnerSelectionPage = new WinnerSelectionPage(this.page);
  await winnerSelectionPage.goto();
  await competitionPage.competitionSelect().selectOption(currentDateOSRev);
  await this.page.evaluate(() => {
    expect(
      document.body.innerText.includes(competitionPage.alreadyAnsweredTheQuestionUserText()),
    ).toBe(false);
  });
});

Given(
  'there is no competition that has been set up in the system',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);

    await competitionPage.gotoCreateCompetition();
    await this.page.evaluate(() => {
      expect(document.body.innerText.includes(dataText.ar.competition.competitionDeleteText)).toBe(
        false,
      );
    });
  },
);

Given(
  "there is a competition that it's running date is before the current date",
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);

    await competitionPage.gotoCreateCompetition();
    await expect(competitionPage.competitionInCompetitionPage()).toHaveText(yesterdayOS);
  },
);

Given(
  "there is a competition that it's running date is after the current date",
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);

    await competitionPage.gotoCreateCompetition();
    await expect(
      competitionPage.competitionInCompetitionPage().filter({ hasText: tomorrowOS }),
    ).toHaveText(tomorrowOS);
  },
);

Given('the user already gave the competition an attempt', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  const winnerSelectionPage = new WinnerSelectionPage(this.page);
  await winnerSelectionPage.goto();
  await competitionPage.competitionSelect().selectOption(currentDateOSRev);
  await expect(competitionPage.alreadyAnsweredTheQuestionUser()).toHaveText(
    competitionPage.alreadyAnsweredTheQuestionUserText(),
  );
});
Given(
  'the user answered all the multi-choice questions with correct answers',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await competitionPage.competitionQuestionAnswerGroups().click();
  },
);

Given('the user answered all the multi-choice questions', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await competitionPage.competitionQuestionAnswerGroups().click();
});

When(
  'the user filled the fatwa reference number of every answer with the correct numbers',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    competitionPage
      .competitionQuestionAnswerRef()
      .first()
      .type(competitionPage.competitionQuestionAnswerRefAnswers()[0]);
  },
);

When('the user submits the questions form', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await competitionPage.competitionSubmitCompetitionClick();
});

Given(
  'the user did not fill the fatwa reference number of every answer with the correct numbers',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await competitionPage.competitionQuestionAnswerGroups().click();
  },
);

When('the user misses one or more multi-choice questions', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await competitionPage
    .competitionQuestionAnswerRef()
    .first()
    .type(competitionPage.competitionQuestionAnswerRefAnswers()[0]);
});

When('the user clicks on the start the competition button', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.startCompetitionButton().click();
});

Then('the user will navigate to a competition page', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  expect(this.page.url()).toEqual(competitionPage.competitionPageUrl());
});

Then(
  'the user will see a successful message for sending his answers',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await expect(competitionPage.feedBackMessage()).toHaveText(
      dataText.ar.competition.competitionNotFullGradeSuccessMessage,
    );
  },
);

Then(
  'the user will see a message that indicates that he has been qualified to win a prize.',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await expect(competitionPage.feedBackMessage()).toHaveText(
      dataText.ar.competition.competitionFullGradeSuccessMessage,
    );
  },
);

Then('the user will see a list of questions', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await expect(competitionPage.competitionQuestions()).toBeVisible();
});

Then('the user will be able to answer all the questions', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await competitionPage.competitionQuestionAnswerGroups().click();
  await competitionPage
    .competitionQuestionAnswerRef()
    .first()
    .type(competitionPage.competitionQuestionAnswerRefAnswers()[0]);
});

Then(
  'the user will see a message that indicates that there are no current competitions',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    expect(
      dataText.ar.competition.noRunningQuizzesMessage.indexOf(
        await competitionPage.quizErrorMessage().textContent(),
      ),
    ).not.toEqual(-1);
  },
);

Then(
  'the user will see a message that indicates that the competition date is before the current date',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    expect(
      dataText.ar.competition.noCurrentRunningQuizzesMessage.indexOf(
        await competitionPage.quizErrorMessage().textContent(),
      ),
    ).not.toEqual(-1);
  },
);

Then(
  'the user will see a message that indicates that the competition date is after the current date and the date of the competition',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await expect(competitionPage.quizErrorMessage()).toHaveText(tomorrowCompetitionMessage);
  },
);

Then(
  'the user will see a message that indicates that the user already answered the competition',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    expect(
      dataText.ar.competition.competitionAlreadyCompeted.indexOf(
        await competitionPage.quizErrorMessage().textContent(),
      ),
    ).not.toEqual(-1);
  },
);

Then(
  'the question will be highlighted to let the user know that question not answered yet',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await expect(competitionPage.questionNotAnswered()).toBeVisible();
  },
);

Then(
  'the user will see a modal that contains an update profile form',
  async function (this: ICustomWorld) {
    const competitionPage = new CompetitionPage(this.page);
    await expect(competitionPage.profileUpdatePopUp()).toBeVisible();
    await expect(competitionPage.profileUpdatePopUpForm()).toBeVisible();
  },
);

Then('the user will be able to update the profile', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  const profilePage = new ProfilePage(this.page);
  await competitionPage.formNameInput().type(competitionPage.formFillNameUpdatedUser());
  await competitionPage.phoneNumberInput().clear();
  await competitionPage.phoneNumberInput().type(competitionPage.formFillPhoneNumberUpdatedUser());
  await competitionPage
    .countrySelect()
    .selectOption({ index: competitionPage.formFillCountryUpdatedUserOSValue() });
  await competitionPage.profileFormUpdateInQuiz().click();
  await profilePage.goto();
  await profilePage.profileFormCheckCountrySelectValue();
  await this.page.evaluate(() => {
    expect(profilePage.formNameInput().value).not.toEqual('');
    expect(profilePage.phoneNumberInput().value).not.toEqual('');
  });
});

Then('the user will see the start the competition button', async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.startCompetitionButton()).toBeVisible();
});

Then("the user will see the user's number of wins", async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.quizWinsNumber()).toBeVisible();
});

Then("the user will see the user's last result", async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.quizLastResult()).toBeVisible();
});

Then("the user will see the user's number of attempts", async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page);
  await expect(homePage.joinsNumber()).toBeVisible();
});

Then('the user will be able submit the answers', async function (this: ICustomWorld) {
  const competitionPage = new CompetitionPage(this.page);
  await competitionPage.competitionSubmitCompetitionClick();
});
