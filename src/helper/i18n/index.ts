import { createI18n } from '@i18n-chain/react';
import { LOCALE_CODE } from '@/helper/constants';
import en from './t.en.js';
import zh from './t.zh.js';

//key: all supported items for head component or broswer  value: for i18n setting
export const LOCALE_MAPPING = {
  [LOCALE_CODE.ZH]: 'zhCN',
  [LOCALE_CODE.EN]: 'enGB',
};

//create i18n instance
const i18n = createI18n({
  defaultLocale: {
    key: LOCALE_MAPPING[LOCALE_CODE.EN],
    values: en,
  },
});

// define language list
i18n.define(LOCALE_MAPPING[LOCALE_CODE.ZH], zh);

export default i18n;
