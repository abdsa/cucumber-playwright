import { config } from '../src/support/config';
import { Page } from '@playwright/test';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class ResetPasswordPage {
  readonly page: Page | undefined;
  constructor(page: Page | undefined) {
    this.page = page;
  }
  resetPasswordPageUrl() {
    if (page === quizIslamqaUrl) {
      return `${page}forget-password`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}resetpw`;
    }
    if (page === quizIslamqaUrlBubble) {
      return `${page}reset-password`;
    }
  }

  async goto() {
    await this.page.goto(this.resetPasswordPageUrl());
  }

  // resetPasswordForm() {
  //   return page === quizIslamqaUrl ? cy.get("form") : cy.get("input");
  // }

  // formEmailInput() {
  //   return cy.get("input");
  // }

  // resetPasswordFormLoginLink() {
  //   return cy.get(".hyperlink-text");
  // }

  // resetPasswordFormUnregisteredEmail() {
  //   return "fasdjfsldkf@gmail.com";
  // }

  // resetPasswordFormOnRequestButton() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("button[type='submit']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("button[type='button']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(".Button:visible");
  //   }
  // }

  // statusMessage(isPopup: boolean) {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get(".go2072408551");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".feedback-message-text");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     if (isPopup) {
  //       return cy.get(".Popup");
  //     } else {
  //       return cy.get(".validation-message");
  //     }
  //   }
  // }

  // resetPasswordFormTitle() {
  //   return cy.get("h1");
  // }

  // resetFormInvalidEmail() {
  //   return "example@hello";
  // }
  // resetPasswordRegisteredEmail() {
  //   return "abd.sab111@gmail.com";
  // }

  // formInputError(validityRuleForBubble: "email" | "required") {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get(".text-xs:visible");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".feedback-message-text");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     if (validityRuleForBubble === "email") {
  //       return cy
  //         .get(".validation-message")
  //         .contains("الرجاء إدخال بريد إلكتروني صحيح");
  //     }
  //     if (validityRuleForBubble === "required") {
  //       return cy.get(".validation-message").contains("هذا الحقل مطلوب");
  //     }
  //   }
  // }

  // violateRequiredRule() {
  //   this.resetPasswordFormOnRequestButton().click();
  // }
  // violateEmailRule() {
  //   this.formEmailInput().type(this.resetFormInvalidEmail());
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.resetPasswordFormOnRequestButton().click();
  //   }
  // }
}

export default ResetPasswordPage;
