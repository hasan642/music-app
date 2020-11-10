/**
 * name: setup.ts
 * desc: This file contains the setup of app.
 */

import { GoogleSignin } from '@react-native-community/google-signin';
import { setupI18nConfig } from 'utils/i18n';
import {
    Platform,
    StatusBar
} from 'react-native';
import { COLOR } from 'theme';

/**
 * setup required data.
 */
async function setup(): Promise<boolean> {
    try {

        /**
         * setup i18n config.
         */
        await setupI18nConfig();

        /**
         * configure google signin.
         */
        GoogleSignin.configure();

        /**
         * set status bar style.
         */
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(COLOR.KOBI);
            StatusBar.setBarStyle('dark-content', true);
        };

        /**
         * return true if every thing is OK.
         */
        return true;

    } catch (e) {
        console.log('error in setup', e);
        return false;
    };
};

/**
 * export all exportable functions.
 */
export {
    setup
};