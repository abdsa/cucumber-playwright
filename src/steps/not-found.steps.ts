import NotFoundPage from '../../pages/notFoundPage';
import { ICustomWorld } from '../support/custom-world';
import { Given, Then } from '@cucumber/cucumber';
// OS version doesn't have a custom 404 page.

Given(
  'the user navigated to a page that could not be found in the site',
  async function (this: ICustomWorld) {
    const notFoundPage = new NotFoundPage(this.page);
    await notFoundPage.visitInvalidRoute();
  },
);
Then(
  'the user will see the message that indicates that the page could not be found',
  async function (this: ICustomWorld) {
    const notFoundPage = new NotFoundPage(this.page);
    await notFoundPage.checkNotFoundMessage();
  },
);
