import { ICustomWorld } from '../support/custom-world';
import { StaticPages } from '../../pages/static-pages';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(
  'the user will see the content of the {string} page',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function (this: ICustomWorld, _staticPage: string) {
    const staticPages = new StaticPages(this.page);
    await expect(staticPages.pageContent).toBeVisible();
  },
);
