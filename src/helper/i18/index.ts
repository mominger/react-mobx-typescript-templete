import { createI18n } from '@i18n-chain/react';
import en from './t.en.js';
import zh from './t.zh.js';

const i18n = createI18n({
  defaultLocale: {
    key: 'en',
    values: en,
  },
});
i18n.define('zh', zh);

//change language
// i18n.locale('en');

export default i18n;
