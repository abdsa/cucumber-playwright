import { config } from './src/support/config';

const page = config.BASE_URL;
const quizIslamqaUrl = 'https://quiz.islamqa.info/';
const quizIslamqaUrlOS = 'https://atq.outsystemscloud.com/IslamQA_Quiz/';
const quizIslamqaUrlBubble = 'https://islamqa-quiz.bubbleapps.io/version-test/';
let onAuthenticated = '';
let signInFormInvalidCredentials = '';
let profileUpdateSuccess = '';

if (page === quizIslamqaUrl) {
  onAuthenticated = 'انت مشترك معنا مسبقاً, يمكنك البدء بالمسابقة';
  signInFormInvalidCredentials = '\n بيانات الاعتماد هذه غير متطابقة مع البيانات المسجلة لدينا. \n';
  profileUpdateSuccess = 'تم التعديل بنجاح.';
}

if (page === quizIslamqaUrlOS) {
  onAuthenticated = 'يمكنك الآن المشاركة في المسابقة';
  signInFormInvalidCredentials = 'Invalid username or password.';
  profileUpdateSuccess = 'تم تحديث الملف الشخصي بنجاح';
}

if (page === quizIslamqaUrlBubble) {
  onAuthenticated = 'يمكنك بدء المسابقة';
  signInFormInvalidCredentials = 'لم نعثر على حساب ببيانات اعتماد تسجيل الدخول هذه';
  profileUpdateSuccess = 'تم التعديل بنجاح';
}
const locale = {
  ar: {
    code: 'ar',
    signUpPage: {
      onAuthenticatedMessage: onAuthenticated,
      requiredErrorMessage: [
        'هذا الحقل مطلوب',
        'البريد الإلكتروني مطلوب',
        'كلمة المرور مطلوبة',
        'إعادة كلمة المرور مطلوبة',
      ],
      confirmPasswordInputNotMatchedErrorMessage: [
        'يجب أن تكون كلمة السر مطابقة ',
        'كلمة السر غير متطابقة',
        'كلمتي المرور غير متطابقتين!',
      ],
      emailInputInvalidEmailErrorMessage: [
        'البريد الألكتروني غير صحيح',
        'الرجاء إدخال بريد إلكتروني صحيح',
      ],
      passwordInputMinLength8ErrorMessage: [
        'يجب أن تتألف كلمة السر من 8 محارف على الأقل',
        'كلمة السر يجب أن تحتوي على الأقل 8 أحرف',
        'كلمة المرور يجب ان تتكون من:',
      ],
      passwordInputInvalidFormattedPasswordErrorMessage: [
        'يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام',
        'كلمة السر يجب أن تحتوي على أرقام وحروف إنجليزية صغيرة وكبيرة',
        'كلمة المرور يجب ان تتكون من:',
      ],
      emailInputUsedEmailErrorMessage: [
        ' قيمة الحقل email مُستخدمة من قبل ',
        'البريد الإلكتروني مستخدم',
        'هذا البريد الإلكتروني مستخدم:',
      ],
      emailInput255CharacterErrorMessage: [
        `
        يجب أن يكون email عنوان بريد إلكتروني صحيح البُنية 
       يجب أن لا يتجاوز طول النّص email 255 حروفٍ/حرفًا `,
        'البريد الإلكتروني يجب أن يكون أقل من 255 حرف',
        'الحد الأقصى هو 255 حرف',
      ],
    },
    loginPage: {
      signInFormInvalidCredentialsMessage: signInFormInvalidCredentials,
      loginSuccessMessage: '.تم تسجيل الدخول بنجاح.',
      requiredErrorMessage: [
        'هذا الحقل مطلوب',
        'البريد الإلكتروني مطلوب',
        'كلمة المرور مطلوبة',
        'إعادة كلمة المرور مطلوبة',
        'يرجى إدخال عنوان بريد إلكتروني',
        'يرجى إدخال كلمة مرور',
        'This field is required.',
      ],
      emailInputInvalidEmailErrorMessage: [
        'البريد الألكتروني غير صحيح',
        'الرجاء إدخال بريد إلكتروني صحيح',
        'Invalid username or password.',
      ],
      emailInputNotActivatedMessage: [
        `\n هذا الحساب غير مفعل بعد! \n`,
        'الرجاء تفعيل الحساب للتمكن من تسجيل الدخول',
      ],
    },
    // الرجاء إدخال بريد إلكتروني صحيح
    registerSucceeded: {
      registrationSucceededPageSuccessMessage:
        page === quizIslamqaUrl
          ? 'لقد أكملت عملية التسجيل بنجاح، قم بالضغط على الرابط المرسل إلى بريدك الإلكتروني لتفعيل حسابك.تأكد من صندوق البريد المهمل في حال لم تجدها في صندوق الوارد'
          : 'تم التسجيل بنجاح',
    },
    notFound: {
      notFoundPageMessage: 'الصفحة المطلوبة غير موجودة',
      notFoundPageMessageOS: '404 - File or directory not found.',
    },
    contact: {
      contactFormNameInputPlaceholder: 'الاسم الكامل',
      contactFormEmailInputPlaceholder: 'البريد الإلكتروني',
      contactFormMessageSubjectInputPlaceholder: 'موضوع الرسالة',
      contactFormMessageInputPlaceholder: 'نص الرسالة',
      contactFormOnSubmitSuccessMessage:
        page === quizIslamqaUrl
          ? 'شكراً لك على اتصالك بنا، سنقوم بالرد على رسالتكم بأقرب وقت ممكن.'
          : 'تم إرسال رسالتك بنجاح',
      contactFormHeading: 'نرحب بكل استفسار أو تعليقات فيما يخص التسجيل أو المشاركة في المسابقة',
      contactForm255CharOnSubmitFailMessageText: [
        'The given data was invalid.',
        'الحد الأقصى للـ(الاسم الكامل) هو 255 حرف',
        'الحد الأقصى للـ(البريد الإلكتروني) هو 255 حرف',
        'الحد الأقصى لـ(موضوع الرسالة) هو 255 حرف',
        '',
        'الرجاء ادخال 255 حرف كحد أقصى',
      ],
      requiredErrorMessage: [
        'هذا الحقل مطلوب',
        'حقل (البريد الإلكتروني) مطلوب',
        'حقل (الاسم الكامل) مطلوب',
        'حقل (موضوع الرسالة) مطلوب',
        'حقل (نص الرسالة) مطلوب',
      ],
      invalidEmailErrorMessage: [
        'البريد الألكتروني غير صحيح',
        'الرجاء إدخال بريد إلكتروني صحيح',
        'الرجاء ادخال ايميل صحيح',
      ],
      requiredEmailErrorMessage:
        page === quizIslamqaUrl ? 'هذا الحقل مطلوب' : 'الرجاء إدخال بريد إلكتروني صحيح',
      requiredMessageSubjectErrorMessage:
        page === quizIslamqaUrl ? 'هذا الحقل مطلوب' : 'حقل (موضوع الرسالة) مطلوب',
      requiredMessageErrorMessage:
        page === quizIslamqaUrl ? 'هذا الحقل مطلوب' : 'حقل (نص الرسالة) مطلوب',
    },
    navigation: {
      home: 'الصفحة الرئيسية',
      about: 'الأسئلة الشائعة',
      'start competition': 'ابدأ المسابقة',
      'terms and conditions': 'الشروط والأحكام',
      winners: 'الفائزون',
      'right answers': 'الإجابات الصحيحة',
      contact: 'تواصل معنا',
      profile: 'الملف الشخصي',
      'reset password': 'تغيير كلمة السر',
      logout: 'تسجيل الخروج',
      login: 'تسجيل الدخول',
      'sign up': 'إنشاء حساب',
    },
    profile: {
      profileFormPhoneNumberInputPlaceholder: 'رقم هاتفك الشخصي ',
      profileFormNameInputPlaceholder: 'اسمك الثلاثي',
      profileFormDescription:
        'الرجاء إدخال المعلومات الصحيحة المذكورة على بطاقتك الشخصية, لتجنب إلغاء الجائزة في حالة كون المعلومات غير متطابقة ‎',
      profileUpdateSuccessMessage: profileUpdateSuccess,
      profileFormPhoneNumberInputMax310:
        '0531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105313433311053134333110531343331105',
      profileForm255CharOnSubmitFailMessage: [
        '\n يجب أن لا يتجاوز طول النّص name 255 حروفٍ/حرفًا \n',
        'الحد الأقصى للـ(الاسم الثلاثي) هو 255 حرف',
        'الحد الأقصى: 255 حرف',
      ],
      profileForm310CharErrorMessage: [
        'هذا الحقل مطلوب',
        'String or binary data would be truncated.\r\nThe statement has been terminated.',
      ],
      requiredErrorMessage: [
        'هذا الحقل مطلوب',
        'حقل (الاسم الثلاثي) مطلوب',
        'الرجاء اختيار الدولة',
        'حقل (رقم الجوال) مطلوب',
      ],
    },
    resetPassword: {
      resetPasswordFormUnregisteredEmailErrorMessage: [
        'لم يتم العثور على أيّ حسابٍ بهذا العنوان الإلكتروني',
        'عذرًا، هذا البريد الإلكتروني غير مسجل',
        'لا يوجد حساب بهذا البريد الإلكتروني',
      ],
      resetPasswordFormResetSuccessMessage: [
        'تم إرسال تفاصيل استعادة كلمة السر الخاصة بك إلى بريدك الإلكتروني',
        'تم إرسال رسالة تغيير كلمة السر',
        'تم إرسال رسالة إعادة تعيين كلمة المرور بنجاح',
      ],
      requiredErrorMessage: ['هذا الحقل مطلوب', 'البريد الإلكتروني مطلوب'],
      invalidEmailErrorMessage: ['البريد الألكتروني غير صحيح', 'الرجاء إدخال بريد إلكتروني صحيح'],
    },
    competition: {
      competitionAvailableCompetitionsDeleteActionButton: 'حذف',
      competitionAvailableCompetitionsAddQuestionsActionButton: 'إضافة أسئلة',
      competitionAlreadyCompeted: [
        'لقد قمت بالمشاركة في هذه المسابقة',
        'لقد قمت بالإجابة على مسابقة اليوم، حاول مرة أخرى غداً.',
      ],
      competitionFullGradeSuccessMessage:
        'مبارك، لقد أنهيت المسابقة وحصلت على نتيجة: 100%، سنتواصل معك في حال كنت أحد الرابحين لتوصيل جائزتك.',
      competitionNotFullGradeSuccessMessage: 'تم إرسال أجوبتك بنجاح',
      noRunningQuizzesMessage: [
        'عذرًا، لا توجد مسابقة في الوقت الحالي',
        'لا يوجد مسابقة في اليوم الحالي، حاول مرة أخرى غدًا',
        'عذرًا، لا يوجد مسابقة في الوقت الحالي',
      ],
      competitionDeleteText: 'حذف',
      noCurrentRunningQuizzesMessage: [
        'لا يوجد مسابقة في اليوم الحالي، حاول مرة أخرى غدًا',
        'لا يوجد مسابقة في اليوم الحالي، حاول مرة أخرى غداً',
      ],
      futureQuizMessage: 'عذراً، المسابقة لم تبدأ بعد، ستبدأ بتاريخ',
    },
    winnerSelection: {
      winnerSelectionSelectedTheWinnerButton: 'إزالة من الفائزينإزالة من الفائزينإزالة من الفائزين',
    },
  },
  en: {
    code: 'en',
    home: {
      welcomeSection: 'Hajj Competition',
      firstAccessAlert:
        'This application provides multi-language as well as offline functionality which can be accessed via the main menu',
      competitionDescription: `Daily competition starting from 25 (Dhu al-Qi'dah) for 10 days.Answer the questions correctly; you may win the prize.4 winnerseveryday.(SAR 500) for each winner.You earn more with knowledge by your daily search of the sites different answers.`,
      competitionInstructionsRegisterTitle: 'Register to Start',
      competitionInstructionsResearchAnswersTitle: 'Reference number',
      competitionInstructionsGetFullScoreToWinTitle: 'Win',
      competitionInstructionsRegisterDesc:
        'Register now and activate your account through the link in your email, then login and start the competiton.',
      competitionInstructionsResearchAnswersDesc:
        'Search for the answers on islamqa.info and copy the reference number of the question',
      competitionInstructionsGetFullScoreToWinDesc:
        'Getting a full score with typing the reference number qualifies you for winning the prize. By participating you may win the prize, but also you will win with the new islamic knowledge that you learned.',
      competitionInstructionsTitle: 'How to participate',
      competitionDescriptionTitle: 'IslamQA hajj competition 1443H',
      competitionPrizeTitle: 'Competition Prizes',
      competitionPrize: '500 Saudi Riyal',
    },
    authentication: {
      signUpPageHeaderTitle: 'Register',
    },
  },
};

export default locale;
