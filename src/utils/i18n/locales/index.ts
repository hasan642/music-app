/**
 * name: i18n/index.ts
 * desc: This file contains an 'i18n' namespacing.
 */

import arabic from './en';
import english from './en';
import {
    SUPPORTED_LANGS,
    I18N_TRANSLATION_NAMESPACE
} from 'config';

/**
 * export as default.
 */
const resources = {
    [SUPPORTED_LANGS.EN]: {
        [I18N_TRANSLATION_NAMESPACE]: english
    },
    [SUPPORTED_LANGS.AR]: {
        [I18N_TRANSLATION_NAMESPACE]: arabic
    }
};

/**
 * export as default.
 */
export default resources;