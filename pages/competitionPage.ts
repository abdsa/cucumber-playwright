import { config } from '../src/support/config';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
class CompetitionPage {
  // goToQuizPage() {
  //   if (page === quizIslamqaUrl) {
  //     cy.visit('/quiz');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     cy.visit(
  //       'https://islamqa-quiz.bubbleapps.io/version-test/start/thu-19-jan-2023-1674095614766x278860928117899260',
  //     );
  //     // cy.get(".GroupItem .Button").click();
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     cy.visit('https://atq.outsystemscloud.com/IslamQA_Quiz/competition?Competition=43');
  //     cy.wait(500);
  //   }
  // }

  competitionPageUrl() {
    if (page === quizIslamqaUrl) {
      return `${page}quiz`;
    }
    if (page === quizIslamqaUrlOS) {
      return `${page}Start`;
    }
    if (page === quizIslamqaUrlBubble) {
      return `${page}competition`;
    }
  }

  competitionAdminUserEmail() {
    if (page === quizIslamqaUrlOS) {
      return 'ammar7377@gmail.com';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'atalzubaidi@gmail.com';
    }
  }
  competitionAdminUserPassword() {
    if (page === quizIslamqaUrlOS) {
      return 'ammartz@123';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'Ammar123';
    }
  }
  competitionProfileNotUpdatedUserEmail() {
    return 'lelovix217@unicsite.com';
  }
  competitionProfileNotUpdatedUserPassword() {
    return '1Liketheweb';
  }

  competitionProfileUpdatedUserEmail() {
    return 'nocovab842@tohup.com';
    // "cahele8496@tohup.com"
  }
  competitionProfileUpdatedUserPassword() {
    return '1Liketheweb';
  }
  competitionStartCompetitionButton() {
    return 'button';
  }
  // competitionQuestions() {
  //   if (page === quizIslamqaUrlOS) {
  //     cy.get(
  //       "div[data-list-item][data-not-scrollable][style='margin-bottom: 10px; padding: 10px;']",
  //     );
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.GroupItem:visible');
  //   }
  // }
  competitionQuestionAnswer() {
    if (page === quizIslamqaUrlOS) {
      return "div:nth-child(1) div div div [type='radio']";
    }
    if (page === quizIslamqaUrlBubble) {
      return '.RadioButtons > label';
    }
  }
  // competitionQuestionAnswerGroups() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get(
  //       "div[data-list][class='display-flex column-gap-m OSFillParent'][style='position: relative;']",
  //     );
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       "[class^='bubble-element GroupItem bubble-r-container flex column group-item entry-']",
  //     );
  //   }
  // }
  // competitionQuestionAnswerRef() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("[type='number']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("[placeholder='الرقم المرجعي']");
  //   }
  // }
  competitionQuestionAnswerRefAnswers() {
    return ['4', '6', '8', '10'];
  }

  // competitionSubmitCompetitionClick() {
  //   if (page === quizIslamqaUrl) {
  //     this.competitionSubmitCompetition().click();
  //   }
  //   if (page === quizIslamqaUrlOS) {
  //     this.competitionSubmitCompetition().click();
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     this.competitionSubmitCompetition().click();
  //     cy.wait(2000);
  //   }
  // }

  // competitionSubmitCompetition() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('button');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.Button:visible');
  //   }
  // }
  // profileUpdatePopUp() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.popup-dialog');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.bubble-element.Popup.bubble-r-container.flex.column:visible');
  //   }
  // }

  profileUpdatePopUpForm() {
    if (page === quizIslamqaUrlOS) {
      return 'form';
    }
    if (page === quizIslamqaUrlBubble) {
      return '.bubble-element.Group.bubble-r-container.flex.column';
    }
  }
  // feedBackMessage() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.feedback-message-text');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.Popup:visible', { timeout: 6000 });
  //   }
  // }
  // quizErrorMessage() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.full-width > span');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy
  //       .get('.bubble-element.Group.bubble-r-container.flex.row .bubble-element.Text')
  //       .wait(1000);
  //   }
  // }

  createCompetitionPage() {
    if (page === quizIslamqaUrlOS) {
      return '/CreateComp';
    }
    if (page === quizIslamqaUrlBubble) {
      return '/competition-admin';
    }
  }

  // competitionInCompetitionPage() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("tr > [data-header='Comp Date'] > div > span");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.RepeatingGroup .bubble-element.Text:first-child():visible');
  //   }
  // }

  pastCompetition() {
    return '/competition?Competition=26';
  }
  futureCompetition() {
    return '/competition?Competition=29';
  }

  // competitionSelect() {
  //   return cy.get('select');
  // }
  // alreadyAnsweredTheQuestionUser() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.ThemeGrid_Width8 > :nth-child(2)');
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       '[style="z-index: 4; align-self: flex-start; min-width: 200px; max-width: 200px; order: 11; min-height: 45px; width: 200px; flex-grow: 1; height: max-content; margin: 10px 0px 0px; white-space: pre-wrap; overflow: visible; font-family: var(--font_default); font-size: 18px; font-weight: 400; color: rgb(0, 0, 0); text-align: center; line-height: 1.4; border-radius: 0px; word-break: break-word;"]',
  //     );
  //   }
  // }
  alreadyAnsweredTheQuestionUserText() {
    if (page === quizIslamqaUrlOS) {
      return 'ammar';
    }
    if (page === quizIslamqaUrlBubble) {
      return 'عمار الزبيدي 2';
    }
  }
  // questionNotAnswered() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("form [data-list-item][class='unanswered']");
  //   }
  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get(
  //       "[style='z-index: 3; align-self: flex-end; min-width: 100%; max-width: 100%; order: 2; min-height: 50px; max-height: 100px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 20px 0px 0px; grid-template-columns: repeat(4, 1fr); font-family: var(--font_default); font-size: 14px; font-weight: bold; color: rgb(0, 0, 0); text-align: right; background: none rgba(255, 0, 0, 0.2);']",
  //     );
  //   }
  // }
  usedEmailWithOutdatedProfile() {
    return 'lelovix217@unicsite.com';
  }

  // formNameInput() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Input_NameVar');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("[placeholder='الاسم الثلاثي']");
  //   }
  // }

  formFillName() {
    return 'exampleName';
  }

  formFillNameUpdatedUser() {
    return 'عبدالرحمن عامر الصباغ';
  }

  formFillPhoneNumberUpdatedUser() {
    return '05522548343';
  }

  // phoneNumberInput() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Input_PhoneVar');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("[placeholder='رقم هاتفك الشخصي']");
  //   }
  // }
  // countrySelect() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Dropdown1');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('select');
  //   }
  // }

  formFillCountryUpdatedUserOSValue() {
    return Math.floor(Math.random() * 245) + 1;
  }

  // profileFormUpdateInQuiz() {
  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get("button[type='submit']");
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.bubble-element.Popup.bubble-r-container.flex.column:visible .Button:visible');
  //   }
  // }
}

export default CompetitionPage;
