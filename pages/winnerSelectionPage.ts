const page = Cypress.config("baseUrl");

const quizIslamqaUrlOS = "https://atq.outsystemscloud.com/IslamQA_Quiz/";
const quizIslamqaUrlBubble = "https://islamqa-quiz.bubbleapps.io/version-test/";

class WinnerSelectionPage {
  winnerSelectionUrl() {
    if (page === quizIslamqaUrlOS) {
      return "/winnerselection";
    }

    if (page === quizIslamqaUrlBubble) {
      return "/selectwinner";
    }
  }
  winnerSelectionCompetitionDropdown() {
    return cy.get("select");
  }

  winnerSelectionFirstQualifiedCompetitor() {
    if (page === quizIslamqaUrlOS) {
      return cy.get(".list-item");
    }

    if (page === quizIslamqaUrlBubble) {
      return cy.get(".entry-1");
    }
  }

  winnerSelectionSelectingTheWinnersButton() {
    if (page === quizIslamqaUrlOS) {
      return cy.get("button");
    }

    if (page === quizIslamqaUrlBubble) {
      return cy.get(".RepeatingGroup .clickable-element:visible");
    }
  }
}

export default WinnerSelectionPage;
