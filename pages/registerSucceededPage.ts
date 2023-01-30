import { config } from '../src/support/config';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class RegisterSucceededPage {
  registerSucceededPageUrl() {
    if (page === quizIslamqaUrl) {
      return `${page}register-succeeded`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}registersuccessful`;
    }
    if (page === quizIslamqaUrlBubble) {
      return `${page}successful-registeration`;
    }
  }

  // registerSucceededPageSignInButton() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("button[type='submit']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".btn > span");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(".Button:visible");
  //   }
  // }

  // registrationSucceededPageSuccessMessage() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("[data-sut-registeration-succeeded='true']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("span[style='font-size: 24px;']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="align-self: center; min-width: 100%; max-width: 100%; order: 1; min-height: 45px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; white-space: pre-wrap; overflow: visible; word-break: break-word; font-family: var(--font_default); font-size: 24px; font-weight: 600; color: rgb(0, 0, 0); text-align: center; line-height: 1.4; border-radius: 0px;"]'
  //     );
  //   }
  // }
}

export default RegisterSucceededPage;
