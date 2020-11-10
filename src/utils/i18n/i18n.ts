/**
 * name: i18n.ts
 * desc: This file handles the 'i18n' config.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';
import {
    SUPPORTED_LANGS,
    I18N_TRANSLATION_NAMESPACE
} from 'config';

/**
 * A function that init the 'i18n' config.
 */
async function setupI18nConfig() {
    const asyncUseI18n = await i18n.use(initReactI18next)
        .init({
            resources,
            fallbackLng: SUPPORTED_LANGS.EN,
            lng: SUPPORTED_LANGS.EN,
            ns: I18N_TRANSLATION_NAMESPACE,
            debug: __DEV__,
            react: {
                useSuspense: true,
            },
        });

    return asyncUseI18n;
};

/**
 * export all functions.
 */
export {
    setupI18nConfig,
};