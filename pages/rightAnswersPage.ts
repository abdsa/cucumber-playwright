import { config } from '../src/support/config';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class RightAnswersPage {
  rightAnswersPageUrl() {
    if (page === quizIslamqaUrl || page === quizIslamqaUrlBubble) {
      return `${page}right-answers`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}right_answers`;
    }
  }
  // rightAnswersExpiredCompetitionSelectContainerSelect() {
  //   return cy.get("select");
  // }

  // rightAnswerSingle() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("div.flex.flex-col.mb-5");
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("div[style='text-align: right; padding: 0px;']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       "[class^='bubble-element GroupItem bubble-r-container flex column group-item entry-']"
  //     );
  //   }
  // }
}

export default RightAnswersPage;
