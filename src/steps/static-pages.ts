import { ICustomWorld } from '../support/custom-world';
import { StaticPages } from '../../pages/static-pages';
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// Given(
//   /^the user is on the (.*) page$/,
//   async function (this: ICustomWorld, staticPage: 'terms and conditions' | 'faq') {
//     const staticPages = new StaticPages(this.page);
//     staticPages.goto(staticPage);
//   },
// );

Given(
  'the user is on the {string} page',
  async function (this: ICustomWorld, staticPage: 'terms and conditions' | 'faq') {
    const staticPages = new StaticPages(this.page);
    staticPages.goto(staticPage);
  },
);

Then(
  'the user will see the content of the {string} page',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function (this: ICustomWorld, _staticPage: string) {
    const staticPages = new StaticPages(this.page);
    await expect(staticPages.pageContent).toBeVisible();
  },
);
