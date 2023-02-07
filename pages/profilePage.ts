import { config } from '../src/support/config';
import { Page, expect } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class ProfilePage {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }
  // inputsObject() {
  //   return {
  //     name: this.formNameInput(),
  //     country: this.countrySelect(),
  //     phone_number: this.phoneNumberInput(),
  //   };
  // }
  async goto() {
    await this.page.goto(this.profilePageUrl(), { waitUntil: 'networkidle' });
  }
  profilePageUrl() {
    return `${page}profile`;
  }

  profileUpdateForm() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return this.page.locator('form');
    } else {
      return this.page.locator(
        '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 7; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]',
      );
    }
  }

  formNameInput(): HTMLInputElement {
    if (page === quizIslamqaUrl) {
      return document.querySelector("[name='name']");
    }

    if (page === quizIslamqaUrlOS) {
      return document.querySelector('#Input_NameVar');
    }

    if (page === quizIslamqaUrlBubble) {
      return document.querySelector("[placeholder='الاسم الثلاثي']");
    }
  }
  formNameInputLocator() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[name='name']");
    }

    if (page === quizIslamqaUrlOS) {
      return this.page.locator('#Input_NameVar');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator("[placeholder='الاسم الثلاثي']");
    }
  }

  formNameInputSelector() {
    if (page === quizIslamqaUrl) {
      return "[name='name']";
    }

    if (page === quizIslamqaUrlOS) {
      return '#Input_NameVar';
    }

    if (page === quizIslamqaUrlBubble) {
      return "[placeholder='الاسم الثلاثي']";
    }
  }

  phoneNumberInput(): HTMLInputElement {
    if (page === quizIslamqaUrl) {
      return document.querySelector("[name='tel']");
    }

    if (page === quizIslamqaUrlOS) {
      return document.querySelector('#Input_PhoneVar');
    }

    if (page === quizIslamqaUrlBubble) {
      return document.querySelector("[placeholder='رقم هاتفك الشخصي']");
    }
  }

  phoneNumberInputLocator() {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[name='tel']");
    }

    if (page === quizIslamqaUrlOS) {
      return this.page.locator('#Input_PhoneVar');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator("[placeholder='رقم هاتفك الشخصي']");
    }
  }

  profileFormCountryInput() {
    return this.page.locator('#react-select-2-input');
  }

  profileFormDescription() {
    return this.page.locator('.shadow-lg');
  }

  formFillPhoneNumber() {
    return '05313433311';
  }
  statusMessage(isPopup: boolean) {
    if (page === quizIslamqaUrl) {
      return this.page.locator("[role='status']");
    }

    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }

    if (page === quizIslamqaUrlBubble) {
      if (isPopup) {
        return this.page.locator('.Popup');
      }
      if (!isPopup) {
        return this.page.locator('.validation-message');
      }
    }
  }

  form255Char() {
    return 'exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!@fjsdkfj.com';
  }

  formInputError() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.text-xs:visible');
    }

    if (page === quizIslamqaUrlOS) {
      return this.page.locator('.feedback-message-text');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('.validation-message');
    }
  }

  async profileFormCheckCountrySelectValue() {
    if (page === quizIslamqaUrl) {
      await expect(this.countryInputValueLabel()).not.toHaveText('');
    }

    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      await expect(this.page.locator('select option:selected')).not.toHaveText('جاري التحميل...');
    }
  }

  countryInputValueLabel() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('.css-qc6sy-singleValue');
    }
  }
  usedEmailWithOutdatedProfile() {
    return 'gojideb639@breazeim.com';
    // Don't use this email for other purposes
    // OS: wedare366@faunda
    // main: gojideb639@breazeim.com
    // Bubble and Outsystems: wedare6336@fandua.com
  }
  profileFormUpdate() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return this.page.locator("button[type='submit']");
    } else {
      return this.page.locator('.Button:visible');
    }
  }
  profileFormUpdateInQuiz() {
    return this.page.locator('.full-width > button');
  }
  formFillName() {
    return 'exampleName';
  }
  formFillNameUpdatedUser() {
    return 'عبدالرحمن عامر الصباغ';
  }
  formFillCountryUpdatedUser() {
    return this.page.locator('#react-select-2-option-99');
  }

  formFillCountryUpdatedUserOSValue() {
    return Math.floor(Math.random() * 245) + 1;
  }

  formFillPhoneNumberUpdatedUser() {
    return '05522548343';
  }

  countrySelect() {
    if (page === quizIslamqaUrl) {
      return this.page.locator('#country');
    }

    if (page === quizIslamqaUrlOS) {
      return this.page.locator('#Dropdown1');
    }

    if (page === quizIslamqaUrlBubble) {
      return this.page.locator('select');
    }
  }
  violateRequiredRule(input: string) {
    if (input !== 'country') {
      this.selectCountry();
    }
    if (input === 'name') {
      this.phoneNumberInputLocator().type(this.formFillPhoneNumber());
    }

    if (input === 'country') {
      this.formNameInputLocator().type(this.formFillName());
      this.phoneNumberInputLocator().type(this.formFillPhoneNumber());
    }
    if (input === 'phone_number') {
      this.formNameInputLocator().type(this.formFillName());
    }
    this.profileFormUpdate().click();
  }

  async selectCountry() {
    if (page === quizIslamqaUrl) {
      await this.countrySelect().click();
      await this.formFillCountryUpdatedUser().click();
    } else {
      await this.countrySelect().selectOption({ index: this.formFillCountryUpdatedUserOSValue() });
    }
  }
}

export default ProfilePage;
