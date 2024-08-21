import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Static imports for JSON files
import enPage1 from './locales/en/page1.json';
import enPage2 from './locales/en/page2.json';
import enPage3 from './locales/en/page3.json';
import enPage4 from './locales/en/page4.json';
import enPage5 from './locales/en/page5.json';
import enPage6 from './locales/en/page6.json';
import enPage7 from './locales/en/page7.json';

import frPage1 from './locales/fr/page1.json';
import frPage2 from './locales/fr/page2.json';
import frPage3 from './locales/fr/page3.json';
import frPage4 from './locales/fr/page4.json';
import frPage5 from './locales/fr/page5.json';
import frPage6 from './locales/fr/page6.json';
import frPage7 from './locales/fr/page7.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources: {
      en: {
        page1: enPage1,
        page2: enPage2,
        page3: enPage3,
        page4: enPage4,
        page5: enPage5,
        page6: enPage6,
        page7: enPage7,
      },
      fr: {
        page1: frPage1,
        page2: frPage2,
        page3: frPage3,
        page4: frPage4,
        page5: frPage5,
        page6: frPage6,
        page7: frPage7,
      },
    },
  }, (err, t) => {
    if (err) {
      console.error('i18next initialization failed', err);
    } else {
      console.log('i18next initialized successfully');
    }
  });

export default i18next;
