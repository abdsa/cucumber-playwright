// import dataText from "../../dataText";
// import LoginPage from "./loginPage";

import { config } from '../src/support/config';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
// const loginPage = new LoginPage();

class SignUpPage {
  // signUpForm() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get(".form-section");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".text-rtl");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 5; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]'
  //     );
  //   }
  // }

  signUpPageUrl() {
    if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
      return `${page}register`;
    }
    if (page === quizIslamqaUrl) {
      return `${page}signup`;
    }
  }

  // signUpPageOnAuthenticatedMessage() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("[data-signup-page-message='true']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".display-flex > span");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="z-index: 6; align-self: center; min-width: 200px; max-width: 200px; order: 2; min-height: 45px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: var(--font_default); font-size: 18px; font-weight: 500; color: rgb(0, 0, 0); text-align: center; line-height: 1.4; border-radius: 0px;"]'
  //     );
  //   }
  // }

  // formEmailInputLoginPage() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("input[type='email']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("#Input_UsernameVal");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("input[placeholder='البريد الإلكتروني']");
  //   }
  // }

  // formEmailInput() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
  //     return cy.get("input[type='email']");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("input[placeholder='البريد الإلكتروني']");
  //   }
  // }

  // formPasswordInput() {
  //   return cy.get("input[placeholder='كلمة السر']");
  // }
  // formConfirmPasswordInput() {
  //   return cy.get("input[placeholder='إعادة كلمة السر']");
  // }
  // unregisteredEmail() {
  //   return "jello@gmail.com";
  // }
  // unregisteredEmailPassword() {
  //   return "hellooolloll1L";
  // }

  // formInputErrorLoginPage(validityRuleForOS: "email" | "required") {
  //   if (page === quizIslamqaUrlOS) {
  //     if (validityRuleForOS === "required") {
  //       return cy.get(".validation-message");
  //     }
  //     if (validityRuleForOS === "email") {
  //       return cy.get(".feedback-message-text");
  //     }
  //   }
  // }

  // formInputError(
  //   validityRuleForBubble:
  //     | "email"
  //     | "required"
  //     | "minLength_8"
  //     | "upper-lower-number"
  //     | ""
  // ) {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get(".text-xs:visible");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".feedback-message-text");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     if (validityRuleForBubble === "required") {
  //       return cy.get(".validation-message").contains("هذا الحقل مطلوب");
  //     }
  //     if (validityRuleForBubble === "email") {
  //       return cy.get(".validation-message");
  //     }
  //     if (validityRuleForBubble === "minLength_8") {
  //       return cy.get("strong").contains(`كلمة المرور يجب ان تتكون من:`);
  //     }
  //     if (validityRuleForBubble === "upper-lower-number") {
  //       return cy.get("strong").contains(`كلمة المرور يجب ان تتكون من:`);
  //     }
  //   }
  // }

  // formSubmitButton() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
  //     return cy.get("button[type='submit']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(".Button:visible");
  //   }
  // }
  // invalidEmail() {
  //   return "fdsasfdadsfasdsdaf@gjk";
  // }

  // shortPassword() {
  //   return "fkjd";
  // }
  // invalidFormattedPassword() {
  //   return "fkjddfdfd";
  // }
  // violateRequiredRule(input: string) {
  //   cy.url().then((url) => {
  //     if (url.includes(loginPage.loginPageUrl())) {
  //       if (input === "email") {
  //         this.formPasswordInput().type(this.unregisteredEmailPassword());
  //       }
  //       if (input === "password") {
  //         this.formEmailInputLoginPage().type(this.unregisteredEmail());
  //       }
  //       this.formSubmitButton().click();
  //     }
  //     if (url.includes(this.signUpPageUrl())) {
  //       if (input === "email") {
  //         if (page === quizIslamqaUrl) {
  //           this.formEmailInput().type(this.unregisteredEmail());
  //           this.formEmailInput().clear();
  //         }
  //         if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //           this.formPasswordInput().type(this.unregisteredEmailPassword());
  //           this.formConfirmPasswordInput().type(
  //             this.unregisteredEmailPassword()
  //           );
  //           this.formSubmitButton().click();
  //         }
  //       }
  //       if (input === "password") {
  //         if (page === quizIslamqaUrl) {
  //           this.formPasswordInput().type(this.unregisteredEmail());
  //           this.formPasswordInput().clear();
  //         }
  //         if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //           this.formEmailInput().type(this.unregisteredEmail());
  //           this.formConfirmPasswordInput().type(
  //             this.unregisteredEmailPassword()
  //           );
  //           this.formSubmitButton().click();
  //         }
  //       }
  //       if (input === "confirm_password") {
  //         if (page === quizIslamqaUrl) {
  //           this.formConfirmPasswordInput().type(this.unregisteredEmail());
  //           this.formConfirmPasswordInput().clear();
  //         }
  //         if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //           this.formEmailInput().type(this.unregisteredEmail());
  //           this.formPasswordInput().type(this.unregisteredEmailPassword());
  //           this.formSubmitButton().click();
  //         }
  //       }
  //     }
  //   });
  // }
  // violateEmailRule() {
  //   if (page === quizIslamqaUrl) {
  //     this.formEmailInputLoginPage().type(this.invalidEmail());
  //   }
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     cy.url().then((url) => {
  //       if (url.includes(loginPage.loginPageUrl())) {
  //         this.formEmailInputLoginPage().type(this.invalidEmail());
  //         this.formPasswordInput().type(this.unregisteredEmailPassword());
  //         this.formSubmitButton().click();
  //       }
  //       if (url.includes(this.signUpPageUrl())) {
  //         this.formEmailInput().type(this.invalidEmail());
  //         this.formPasswordInput().type(this.unregisteredEmailPassword());
  //         this.formConfirmPasswordInput().type(
  //           this.unregisteredEmailPassword()
  //         );
  //         this.formSubmitButton().click();
  //       }
  //     });
  //   }
  // }

  // violateMinLength8Rule() {
  //   this.formPasswordInput().type(this.shortPassword());
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.formEmailInput().type(this.unregisteredEmail());
  //     this.formConfirmPasswordInput().type(this.shortPassword());
  //     this.formSubmitButton().click();
  //   }
  // }

  // violateUpperLowerNumberRule() {
  //   this.formPasswordInput().type(this.invalidFormattedPassword());
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.formEmailInput().type(this.unregisteredEmail());
  //     this.formConfirmPasswordInput().type(this.invalidFormattedPassword());
  //     this.formSubmitButton().click();
  //   }
  // }

  // violateMatchPasswordRule() {
  //   this.formPasswordInput().type(this.unregisteredEmailPassword());
  //   this.formConfirmPasswordInput().type(this.shortPassword());
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.formEmailInput().type(this.unregisteredEmail());
  //     this.formSubmitButton().click();
  //   }
  // }

  // showNotMatchedPasswordsError() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
  //     this.formInputError("").should("be.visible");
  //     this.formInputError("").then((el) => {
  //       expect(
  //         dataText.ar.signUpPage.confirmPasswordInputNotMatchedErrorMessage.indexOf(
  //           el.text()
  //         )
  //       ).to.be.not.equal(-1);
  //     });
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     cy.wait(2000);
  //     cy.on("window:alert", (str) => {
  //       expect(str).to.equal(
  //         dataText.ar.signUpPage.confirmPasswordInputNotMatchedErrorMessage[2]
  //       );
  //     });
  //   }
  // }
  // showRequiredMessage() {
  //   if (page === quizIslamqaUrl) {
  //     this.formInputError("").should("be.visible");
  //     this.formInputError("").then((el) => {
  //       expect(
  //         dataText.ar.signUpPage.requiredErrorMessage.indexOf(el.text())
  //       ).to.be.not.equal(-1);
  //     });
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     cy.url().then((url) => {
  //       if (url.includes(loginPage.loginPageUrl())) {
  //         this.formInputErrorLoginPage("required").should("be.visible");
  //         this.formInputErrorLoginPage("required").then((el) => {
  //           expect(
  //             dataText.ar.loginPage.requiredErrorMessage.indexOf(el.text())
  //           ).to.be.not.equal(-1);
  //         });
  //       }
  //       if (url.includes(this.signUpPageUrl())) {
  //         this.formInputError("").should("be.visible");
  //         this.formInputError("").then((el) => {
  //           expect(
  //             dataText.ar.loginPage.requiredErrorMessage.indexOf(el.text())
  //           ).to.be.not.equal(-1);
  //         });
  //       }
  //     });
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     cy.url().then((url) => {
  //       if (url.includes(loginPage.loginPageUrl())) {
  //         cy.wait(2000);
  //         cy.on("window:alert", (str) => {
  //           expect(dataText.ar.loginPage.requiredErrorMessage.includes(str)).to
  //             .be.true;
  //         });
  //       }
  //       if (url.includes(this.signUpPageUrl())) {
  //         this.formInputError("required").should("be.visible");
  //         this.formInputError("required").then((el) => {
  //           expect(
  //             dataText.ar.loginPage.requiredErrorMessage.indexOf(el.text())
  //           ).to.be.not.equal(-1);
  //         });
  //       }
  //     });
  //   }
  // }
  // showInvalidEmailMessage() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
  //     this.formInputError("email").should("be.visible");
  //     this.formInputError("email").then((el) => {
  //       expect(
  //         dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
  //           el.text()
  //         )
  //       ).to.be.not.equal(-1);
  //     });
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     cy.url().then((url) => {
  //       if (url.includes(loginPage.loginPageUrl())) {
  //         this.formInputErrorLoginPage("email").should("be.visible");
  //         this.formInputErrorLoginPage("email").then((el) => {
  //           expect(
  //             dataText.ar.loginPage.emailInputInvalidEmailErrorMessage.indexOf(
  //               el.text()
  //             )
  //           ).to.be.not.equal(-1);
  //         });
  //       }
  //       if (url.includes(this.signUpPageUrl())) {
  //         this.formInputError("email").should("be.visible");
  //         this.formInputError("email").then((el) => {
  //           expect(
  //             dataText.ar.signUpPage.emailInputInvalidEmailErrorMessage.indexOf(
  //               el.text()
  //             )
  //           ).to.be.not.equal(-1);
  //         });
  //       }
  //     });
  //   }
  // }
}
export default SignUpPage;
