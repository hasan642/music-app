/**
 * name: env-variables.ts
 * desc: This file contains an env variables, 
 * * should be declared here, and should not imported directly
 * * from 'react-native-dot-env', bz maybe there are a differnet
 * * names on iOS & Android.
 */

import {
    HAPPI_API_KEY,
    TEST_ARTIST,
    TEST_ALBUM,
    JSON_SERVER_BASE_URL
} from 'react-native-dotenv';

/**
 * export all keys.
 */
export default {
    HAPPI_API_KEY,
    TEST_ARTIST,
    TEST_ALBUM,
    JSON_SERVER_BASE_URL,
    
    /**
     * decalred like this, if there is different key on each platform.
     */
    // HAPPI_API_KEY: Platform.select({
    //     ios: HAPPI_API_KEY,
    //     android: HAPPI_API_KEY,
    //     web:HAPPI_API_KEY
    // })

};