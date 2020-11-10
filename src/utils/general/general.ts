/**
 * name: general.ts
 * desc: This file contains general utils.
 */

import {
    GoogleSignin,
    User,
    statusCodes
} from "@react-native-community/google-signin";

/**
 * A function that handles signin with google.
 */
async function completeWithGoogle(): Promise<User> {
    try {
        const deviceHasServices = await GoogleSignin.hasPlayServices();
        if (!deviceHasServices) {
            return null;
        };

        /**
         * here we are sure that device has play services.
         * 
         * complete signin with google.
         */
        const user = await GoogleSignin.signIn();

        /**
         * return google user.
         */
        return user;

    } catch (error) {
        console.log('error in completeWithGoogle', error);
        return null;
    };
};

/**
 * export all exportable functions.
 */
export {
    completeWithGoogle
};