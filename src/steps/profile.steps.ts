import ProfilePage from '../../pages/profilePage';
import LoginPage from '../../pages/loginPage';
import dataText from '../../dataText';
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('the user is authenticated with outdated profile', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  const profilePage = new ProfilePage(this.page);
  await loginPage.goto();
  await loginPage.formEmailInput.type(profilePage.usedEmailWithOutdatedProfile());
  await loginPage.formPasswordInput.type(loginPage.registeredEmailPassword());
  await loginPage.formSubmitButton.click();
  await this.page.waitForTimeout(2000);
});

Given('the user is on the profile page', async function (this: ICustomWorld) {
  const profilePage = new ProfilePage(this.page);
  await profilePage.goto();
});

Then('the user will see an update profile form', async function (this: ICustomWorld) {
  const profilePage = new ProfilePage(this.page);
  await expect(profilePage.profileUpdateForm()).toBeVisible();
});
Given(
  'the user filled the update profile form with valid values',
  async function (this: ICustomWorld) {
    const profilePage = new ProfilePage(this.page);
    await profilePage.formNameInputLocator().clear();
    await profilePage.formNameInputLocator().type(profilePage.formFillNameUpdatedUser());
    await profilePage.phoneNumberInputLocator().clear();
    await profilePage.phoneNumberInputLocator().type(profilePage.formFillPhoneNumberUpdatedUser());
    await profilePage.selectCountry();
  },
);

Then(
  'the user will see a message that indicates that the profile was successfully updated',
  async function (this: ICustomWorld) {
    const profilePage = new ProfilePage(this.page);
    await expect(profilePage.statusMessage(true)).toBeVisible();
    await expect(profilePage.statusMessage(true)).toHaveText(
      dataText.ar.profile.profileUpdateSuccessMessage,
    );
  },
);

// I tested the required inputs only on submit. I am not going to test the as-you-go case.
// Because it is the only necessary way to test this scenario
// Other ways could be removed or changed, and in my opinion the on submit way is the only necessary way to test
// I don't know how to test the as-you-go case without creating a new scenario
// Another reason: the OS version doesn't have as-you-go validation

When('the user submits the update profile form', async function (this: ICustomWorld) {
  const profilePage = new ProfilePage(this.page);
  await profilePage.profileFormUpdate().click();
});

Given(
  'the user filled the name field with more than 255 characters',
  async function (this: ICustomWorld) {
    const profilePage = new ProfilePage(this.page);
    await profilePage.formNameInputLocator().clear();
    await profilePage.formNameInputLocator().type(profilePage.form255Char());
  },
);

Then(
  'the user will see a message that indicates that the phone number is invalid',
  async function (this: ICustomWorld) {
    const profilePage = new ProfilePage(this.page);
    await expect(profilePage.formInputError()).toBeVisible();
    await expect(profilePage.formInputError()).toHaveText(
      dataText.ar.profile.profileForm310CharErrorMessage,
    );
  },
);

Then(
  'the user will see a message that indicates that the name is invalid',
  async function (this: ICustomWorld) {
    const profilePage = new ProfilePage(this.page);
    await expect(profilePage.statusMessage(false)).toBeVisible();
    expect(
      dataText.ar.profile.profileForm255CharOnSubmitFailMessage.indexOf(
        await profilePage.statusMessage(false).textContent(),
      ),
    ).not.toEqual(-1);
  },
);
Then('the user will be redirected to the login page', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page);
  await this.page.waitForTimeout(5000);
  expect(this.page.url()).toEqual(loginPage.loginPageUrl());
});
