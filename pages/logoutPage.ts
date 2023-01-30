import { config } from '../src/support/config';

const page = config.BASE_URL;
// const quizIslamqaUrl = 'https://quiz.islamqa.info/';
// const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
// const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class LogOutPage {
  logoutPageUrl() {
    return `${page}logout`;
  }
  // appMenuOverlay() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(".app-menu-overlay");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(".invisible-div");
  //   }
  // }
  // menuButton() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("div[role='button'].menu-icon");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="align-self: flex-start; min-width: 0%; max-width: 960px; order: 3; min-height: 140px; max-height: 140px; width: 0%; flex-grow: 1; height: 140px; margin: 0px; justify-content: space-between; overflow: visible; border-radius: 0px; padding: 0px 24px;"] > .CustomElement > .bubble-element'
  //     );
  //   }
  // }
  // logoutMenuItem() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("div#b2-PageLinks a[href='#']");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("div").contains("تسجيل الخروج").wait(500);
  //   }
  // }
  // logout() {
  //   if (page === quizIslamqaUrl) {
  //     cy.visit(this.logoutPageUrl());
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     this.menuButton().eq(0).click();
  //     this.logoutMenuItem().click();
  //     this.appMenuOverlay().click();
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     this.menuButton().click();
  //     this.logoutMenuItem().click();
  //     this.appMenuOverlay().click();
  //     cy.log("Cannot know if not authenticated");
  //   }
  // }
}

export default LogOutPage;
