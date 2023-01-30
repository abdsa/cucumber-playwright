import { config } from '../src/support/config';

const page = config.BASE_URL;

class TermsPage {
  termsPageUrl() {
    return `${page}terms`;
  }
}

export default TermsPage;
