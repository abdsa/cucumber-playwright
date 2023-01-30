import { config } from '../src/support/config';

const page = config.BASE_URL;

class FaqPage {
  faqPageUrl() {
    return `${page}faq`;
  }
}

export default FaqPage;
