/**
 * name: typography.ts
 * desc: this file contains the typography of app.
 */

import { Platform } from "react-native";

const TYPOGRAPHY = Object.freeze({
    primary: Platform.select({
        ios: '',
        android: ''
    }),

    // other fonts should be defined here ...
});

/**
 * export as default.
 */
export default TYPOGRAPHY;