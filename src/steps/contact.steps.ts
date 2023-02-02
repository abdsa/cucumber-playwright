import ContactPage from '../../pages/contactPage';
import dataText from '../../dataText';
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('the user is on the contact page', async function (this: ICustomWorld) {
  const contactPage = new ContactPage(this.page);
  await contactPage.goto();
});

When('the user sends a message successfully', async function (this: ICustomWorld) {
  const contactPage = new ContactPage(this.page);

  await contactPage.formNameInput.type(contactPage.formFillName());
  await contactPage.formMessageSubjectInput.type(contactPage.formFillMessageSubject());
  await contactPage.formEmailInput.type(contactPage.formFillEmail());
  await contactPage.formMessageInput.type(contactPage.formFillMessage());
  await contactPage.formSubmitButton.click();
});

Given(
  'the user has inputted more than 255 characters in the {string} input field',
  async function (this: ICustomWorld, inputField: string) {
    const contactPage = new ContactPage(this.page);
    await contactPage.violate255Rule(inputField);
  },
);

When('the user submits the contact us form', async function (this: ICustomWorld) {
  const contactPage = new ContactPage(this.page);
  await contactPage.formSubmitButton.click();
});

Then(
  'the user will see a place where the user can contact the competition organizers',
  async function (this: ICustomWorld) {
    const contactPage = new ContactPage(this.page);
    await expect(contactPage.contactForm()).toBeVisible();
  },
);

Then(
  'the user will see a feedback message telling that the message was sent successfully',
  async function (this: ICustomWorld) {
    const contactPage = new ContactPage(this.page);
    await expect(contactPage.statusMessage(true)).toBeVisible();
    await expect(contactPage.statusMessage(true)).toHaveText(
      dataText.ar.contact.contactFormOnSubmitSuccessMessage,
    );
  },
);
Then(
  'the user shall see The given data was invalid that comes from the system',
  async function (this: ICustomWorld) {
    const contactPage = new ContactPage(this.page);
    await expect(contactPage.statusMessage(false)).toBeVisible();
    expect(
      dataText.ar.contact.contactForm255CharOnSubmitFailMessageText.indexOf(
        await contactPage.statusMessage(false).textContent(),
      ),
    ).not.toEqual(-1);
  },
);
