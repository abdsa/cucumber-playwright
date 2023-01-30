import { config } from '../src/support/config';

const page = config.BASE_URL;
// const quizIslamqaUrl = "https://quiz.islamqa.info/";
// const quizIslamqaUrlOS = "https://atq.outsystemscloud.com/IslamQA_Quiz/";
// const quizIslamqaUrlBubble = "https://islamqa-quiz.bubbleapps.io/version-test/";
class WinnersPage {
  winnersPageUrl() {
    return `${page}winners`;
  }
  // winnerName() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("h2[data-sut-winner-name='true']");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(
  //       ".display-flex > [style='font-size: 18px; font-weight: 500;']"
  //     );
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="z-index: 2; align-self: center; min-width: 200px; max-width: 200px; order: 3; min-height: 28px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: var(--font_default); font-size: 18px; font-weight: 500; color: rgb(0, 0, 0); text-align: center; line-height: 1.4; border-radius: 0px; word-break: break-word;"]'
  //     );
  //   }
  // }

  // winnerCountry() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("p.font-normal");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(
  //       ".display-flex > [style='color: rgb(128, 128, 128); font-size: 16px;']"
  //     );
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="z-index: 3; align-self: center; min-width: 200px; max-width: 200px; order: 4; min-height: 28px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: var(--font_default); font-size: 16px; font-weight: 400; color: rgb(128, 128, 128); text-align: center; line-height: 1.4; border-radius: 0px; word-break: break-word;"]'
  //     );
  //   }
  // }

  // winnerCompetition() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("h2.sub-heading.text-primary-color");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(
  //       ".display-flex > [style='color: rgb(31, 138, 147); font-size: 18px; font-weight: 500;']"
  //     );
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="z-index: 3; align-self: center; min-width: 200px; max-width: 200px; order: 5; min-height: 28px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 200px; margin: 0px; white-space: pre-wrap; overflow: visible; font-family: var(--font_default); font-size: 18px; font-weight: 500; color: var(--color_primary_contrast_default); text-align: center; line-height: 1.4; border-radius: 0px; word-break: break-word;"]'
  //     );
  //   }
  // }
}

export default WinnersPage;
