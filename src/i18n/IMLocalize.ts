import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import en from './messages/en';
import hi from './messages/hi';
import bn from './messages/bn';
import kn from './messages/kn';
import ml from './messages/ml';
import mr from './messages/mr';
import ta from './messages/ta';
import te from './messages/te';
import gu from './messages/gu';

const LANGUAGES = {
    en,
    hi,
    bn,
    kn,
    ml,
    mr,
    ta,
    te,
    gu
};

const LANG_CODES = Object.keys(LANGUAGES);


const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {
            // if error fetching stored data or no language was stored
            // display errors when in DEV mode as console statements
            if (err || !language) {
                if (err) {
                    console.log('Error fetching Languages from asyncstorage ', err);
                } else {
                    console.log('No language is set, choosing English as fallback');
                }
                const findBestAvailableLanguage =
                    RNLocalize.findBestAvailableLanguage(LANG_CODES);

                callback(findBestAvailableLanguage.languageTag || 'en');
                return;
            }
            callback(language);
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        AsyncStorage.setItem('user-language', language);
    }
};

i18n
    // detect language
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        compatibilityJSON: 'v3',
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        defaultNS: 'common'
    });