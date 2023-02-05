import ResetPasswordPage from '../../pages/resetPasswordPage';
import dataText from '../../dataText';
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('the user will see a reset password form', async function (this: ICustomWorld) {
  const resetPasswordPage = new ResetPasswordPage(this.page);
  await expect(resetPasswordPage.resetPasswordForm()).toBeVisible();
});

Given(
  "the user filled the reset password form with account details that don't match any account in the system",
  async function (this: ICustomWorld) {
    const resetPasswordPage = new ResetPasswordPage(this.page);
    await resetPasswordPage
      .formEmailInput()
      .type(resetPasswordPage.resetPasswordFormUnregisteredEmail());
  },
);

Given(
  'the user filled the reset password form with a registered email',
  async function (this: ICustomWorld) {
    const resetPasswordPage = new ResetPasswordPage(this.page);
    await resetPasswordPage.formEmailInput().type(resetPasswordPage.resetPasswordRegisteredEmail());
  },
);

When('the user submits the reset password form', async function (this: ICustomWorld) {
  const resetPasswordPage = new ResetPasswordPage(this.page);
  await resetPasswordPage.resetPasswordFormOnRequestButton().click();
});

Then(
  "the user will see a message that indicates that the email doesn't match any account in the system",
  async function (this: ICustomWorld) {
    const resetPasswordPage = new ResetPasswordPage(this.page);
    await expect(resetPasswordPage.statusMessage(false)).toBeVisible();
    expect(
      dataText.ar.resetPassword.resetPasswordFormUnregisteredEmailErrorMessage.indexOf(
        await resetPasswordPage.statusMessage(false).textContent(),
      ),
    ).not.toEqual(-1);
  },
);

Then(
  'the user will see a message that indicates that an email has been sent to the user email',
  async function (this: ICustomWorld) {
    const resetPasswordPage = new ResetPasswordPage(this.page);
    await expect(resetPasswordPage.statusMessage(true)).toBeVisible();

    expect(
      dataText.ar.resetPassword.resetPasswordFormResetSuccessMessage.indexOf(
        await resetPasswordPage.statusMessage(true).textContent(),
      ),
    ).not.toEqual(-1);
  },
);
