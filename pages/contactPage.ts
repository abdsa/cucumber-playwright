import { config } from '../src/support/config';
import { Locator, Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class ContactPage {
  readonly formNameInput!: Locator;
  readonly formEmailInput!: Locator;
  readonly formMessageSubjectInput!: Locator;
  readonly formMessageInput!: Locator;
  readonly contactForm!: Locator;

  readonly formInputError!: Locator;
  readonly formSubmitButton!: Locator;
  readonly statusMessageTrue!: Locator;
  readonly statusMessageFalse!: Locator;
  readonly page: Page | undefined;

  constructor(page: Page | undefined) {
    this.page = page;
    if (page) {
      this.formNameInput = page.locator(this.formNameInputSelector());
      this.formEmailInput = page.locator(this.formEmailInputSelector());
      this.formMessageSubjectInput = page.locator(this.formMessageSubjectInputSelector());
      this.formMessageInput = page.locator(this.formMessageInputSelector());
      this.contactForm = page.locator(this.contactFormSelector());
      this.formInputError = page.locator(this.formInputErrorSelector());
      this.formSubmitButton = page.locator(this.formSubmitButtonSelector());
      this.statusMessageTrue = page.locator(this.statusMessageSelector(true));
      this.statusMessageFalse = page.locator(this.statusMessageSelector(false));
    }
  }

  async goto() {
    await this.page?.goto(this.contactPageUrl());
  }
  inputsObject() {
    return {
      email: this.formEmailInput,
      name: this.formNameInput,
      subject: this.formMessageSubjectInput,
      message: this.formMessageInput,
    };
  }

  contactPageUrl() {
    return `${page}contact`;
  }

  contactFormSelector() {
    if (page === quizIslamqaUrl) {
      return '.form-section';
    }
    if (page === quizIslamqaUrlOS) {
      return '#b1-MainContent > .full-width-vw';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.bubble-element.Group.bubble-r-container.flex.column';
    }
    return '';
  }
  formNameInputSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      return "input[placeholder='الاسم الكامل']";
    } else {
      return "input[placeholder='الإسم الكامل']";
    }
  }

  formEmailInputSelector() {
    return "input[placeholder='البريد الإلكتروني']";
  }
  formMessageSubjectInputSelector() {
    return "input[placeholder='موضوع الرسالة']";
  }

  formInputErrorSelector() {
    if (page === quizIslamqaUrl) {
      return '.text-xs:visible';
    }
    if (page === quizIslamqaUrlOS) {
      return '.feedback-message-text';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.validation-message';
      // Writing this for now. The problem is that the validation errors don't have the same rules in the style attribute
      // so I can select all of them with one selector
      // The validation 255 characters error doesn't show for the message input
    }
    return '';
  }

  formMessageInputSelector() {
    return 'textarea';
  }

  formFillEmail() {
    return 'example@gmail.com';
  }

  formFillName() {
    return 'exampleName';
  }

  formFillMessageSubject() {
    return 'exampleMessageSubject';
  }

  formFillMessage() {
    return 'exampleMessage';
  }

  form255Char() {
    return 'fjdklfjlaksdjfkldasjfkl;asdjfkldsjfklsadjfklsadjflkasdjsdkalfjs;dklfjsadkl;jfsdkl;fjsdkl;afjsadkl;fj@fjdklfjlaksdjfkldasjfkl;asdjfkldsjfklsadjfklsadjflkasdjsdkalfjs;dklfjsadkl;jfsdkl;fjsdkl;afjsadkl;fjfjdklfjlaksdjfkldasjfkl;asdjfkldsjfklsadjfklsadjflkasdjsdkalfjs;dklfjsadkl;jfsdkl;fjsdkl;afjsadkl;fj';
  }

  formSubmitButtonSelector() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
      return "button[type='submit']";
    } else {
      return "[style='align-self: flex-start; min-width: 100%; max-width: 100%; order: 7; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;'] > .row > .bubble-element";
    }
  }
  statusMessageSelector(isPopup: boolean) {
    if (page === quizIslamqaUrl) {
      return "[role='status']";
    }
    if (page === quizIslamqaUrlOS) {
      return '.feedback-message-text';
    }
    if (page === quizIslamqaUrlBubble) {
      if (isPopup) {
        return '.Popup';
      }
      if (!isPopup) {
        return '';
        // '.validation-message''الرجاء ادخال 255 حرف كحد أقصى';
      }
    }
    return '';
  }

  contactFormInvalidEmail() {
    return 'example@hello';
  }
  // violateRequiredRule(input: string) {
  //   if (input === 'email') {
  //     this.formNameInput().type(this.formFillName());
  //     this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //     this.formMessageInput().type(this.formFillMessage());
  //     this.formSubmitButton().click();
  //   }
  //   if (input === 'name') {
  //     this.formEmailInput().type(this.formFillEmail());
  //     this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //     this.formMessageInput().type(this.formFillMessage());
  //     this.formSubmitButton().click();
  //   }
  //   if (input === 'subject') {
  //     this.formNameInput().type(this.formFillName());
  //     this.formEmailInput().type(this.formFillEmail());
  //     this.formMessageInput().type(this.formFillMessage());
  //     this.formSubmitButton().click();
  //   }
  //   if (input === 'message') {
  //     this.formNameInput().type(this.formFillName());
  //     this.formEmailInput().type(this.formFillEmail());
  //     this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //     this.formSubmitButton().click();
  //   }
  // }
  // violateEmailRule() {
  //   this.formEmailInput().type(this.contactFormInvalidEmail());
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.formNameInput().type(this.formFillName());
  //     this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //     this.formMessageInput().type(this.formFillMessage());
  //     this.formSubmitButton().click();
  //   }
  // }
  // violate255Rule(input: string) {
  //   if (input !== 'message') {
  //     if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
  //       this.inputsObject()[input].type(this.form255Char());
  //     }
  //     if (page === quizIslamqaUrlOS) {
  //       if (input === 'email') {
  //         this.formNameInput().type(this.formFillName());
  //         this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //         this.formMessageInput().type(this.formFillMessage());
  //         this.inputsObject()[input].type(this.form255Char());
  //         this.formSubmitButton().click();
  //       }
  //       if (input === 'name') {
  //         this.formEmailInput().type(this.formFillEmail());
  //         this.formMessageSubjectInput().type(this.formFillMessageSubject());
  //         this.formMessageInput().type(this.formFillMessage());
  //         this.inputsObject()[input].type(this.form255Char());
  //         this.formSubmitButton().click();
  //       }
  //       if (input === 'subject') {
  //         this.formNameInput().type(this.formFillName());
  //         this.formEmailInput().type(this.formFillEmail());
  //         this.formMessageInput().type(this.formFillMessage());
  //         this.inputsObject()[input].type(this.form255Char());
  //         this.formSubmitButton().click();
  //       }
  //     }
  //   }
  // }
}

export default ContactPage;
