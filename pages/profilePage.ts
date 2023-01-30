// import dataText from "../../dataText";

import { config } from '../src/support/config';

const page = config.BASE_URL;
// const quizIslamqaUrl = 'https://quiz.islamqa.info/';
// const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
// const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';

class ProfilePage {
  // inputsObject() {
  //   return {
  //     name: this.formNameInput(),
  //     country: this.countrySelect(),
  //     phone_number: this.phoneNumberInput(),
  //   };
  // }

  profilePageUrl() {
    return `${page}profile`;
  }

  // profileUpdateForm() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
  //     return cy.get('form');
  //   } else {
  //     return cy.get(
  //       '[style="align-self: flex-start; min-width: 100%; max-width: 100%; order: 7; min-height: 280px; height: max-content; flex-grow: 0; flex-shrink: 0; width: 100%; margin: 0px; justify-content: flex-start; overflow: visible; background-color: rgb(255, 255, 255); border-radius: 0px; padding: 60px 36px;"]',
  //     );
  //   }
  // }

  // formNameInput() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("[name='name']");
  //   }

  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Input_NameVar');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("[placeholder='الاسم الثلاثي']");
  //   }
  // }

  // phoneNumberInput() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("[name='tel']");
  //   }

  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Input_PhoneVar');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get("[placeholder='رقم هاتفك الشخصي']");
  //   }
  // }

  // profileFormCountryInput() {
  //   return cy.get('#react-select-2-input');
  // }

  // profileFormDescription() {
  //   return cy.get('.shadow-lg');
  // }

  // formFillPhoneNumber() {
  //   return '05313433311';
  // }
  // statusMessage(isPopup: boolean) {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get("[role='status']");
  //   }

  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.feedback-message-text');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     if (isPopup) {
  //       return cy.get('.Popup');
  //     }
  //     if (!isPopup) {
  //       return cy.get('.validation-message');
  //     }
  //   }
  // }

  // form255Char() {
  //   return 'exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!exampleGenreal!!!@fjsdkfj.com';
  // }

  // formInputError() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get('.text-xs:visible');
  //   }

  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('.feedback-message-text');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('.validation-message');
  //   }
  // }

  // profileFormCheckCountrySelectValue() {
  //   if (page === quizIslamqaUrl) {
  //     this.countryInputValueLabel().should('not.have.text', '');
  //   }

  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     cy.get('select').find('option:selected').should('not.have.text', 'جاري التحميل...');
  //   }
  // }

  // countryInputValueLabel() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get('.css-qc6sy-singleValue');
  //   }
  // }
  // usedEmailWithOutdatedProfile() {
  //   return 'wedare6336@fandua.com';
  //   // Don't use this email for other purposes
  //   // main: nayehor942@tohup.com
  //   // Bubble and Outsystems: wedare6336@fandua.com
  // }
  // profileFormUpdate() {
  //   if (page === quizIslamqaUrl || page === quizIslamqaUrlOS) {
  //     return cy.get("button[type='submit']");
  //   } else {
  //     return cy.get('.Button:visible');
  //   }
  // }
  // profileFormUpdateInQuiz() {
  //   return cy.get('.full-width > button');
  // }
  // formFillName() {
  //   return 'exampleName';
  // }
  // formFillNameUpdatedUser() {
  //   return 'عبدالرحمن عامر الصباغ';
  // }
  // formFillCountryUpdatedUser() {
  //   return cy.get('#react-select-2-option-99');
  // }

  // formFillCountryUpdatedUserOSValue() {
  //   return Math.floor(Math.random() * 245) + 1;
  // }

  // formFillPhoneNumberUpdatedUser() {
  //   return '05522548343';
  // }

  // countrySelect() {
  //   if (page === quizIslamqaUrl) {
  //     return cy.get('#country');
  //   }

  //   if (page === quizIslamqaUrlOS) {
  //     return cy.get('#Dropdown1');
  //   }

  //   if (page === quizIslamqaUrlBubble) {
  //     return cy.get('select');
  //   }
  // }
  // violateRequiredRule(input: string) {
  //   if (input !== 'country') {
  //     this.selectCountry();
  //   }
  //   if (input === 'name') {
  //     this.phoneNumberInput().type(this.formFillPhoneNumber());
  //   }

  //   if (input === 'country') {
  //     this.formNameInput().type(this.formFillName());
  //     this.phoneNumberInput().type(this.formFillPhoneNumber());
  //   }
  //   if (input === 'phone_number') {
  //     this.formNameInput().type(this.formFillName());
  //   }
  //   this.profileFormUpdate().click();
  // }

  // selectCountry() {
  //   if (page === quizIslamqaUrl) {
  //     this.countrySelect().click();
  //     this.formFillCountryUpdatedUser().click();
  //   } else {
  //     this.countrySelect().select(this.formFillCountryUpdatedUserOSValue());
  //   }
  // }

  // violateMax_99Rule() {
  //   if (page === quizIslamqaUrl) {
  //     this.phoneNumberInput().type(dataText.ar.profile.profileFormPhoneNumberInputMax310);
  //   }
  //   if (page === quizIslamqaUrlOS || page === quizIslamqaUrlBubble) {
  //     this.formNameInput().type(this.formFillName());
  //     this.selectCountry();
  //     this.phoneNumberInput().type(dataText.ar.profile.profileFormPhoneNumberInputMax310);
  //     this.profileFormUpdate().click();
  //   }
  // }
}

export default ProfilePage;
