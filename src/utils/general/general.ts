/**
 * name: general.ts
 * desc: This file contains general utils.
 */

import {
    GoogleSignin,
    User
} from "@react-native-community/google-signin";
import Toast from 'react-native-simple-toast';

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
 * Shows a toast.
 */
function showToast(message: string) {
    Toast.showWithGravity(
        message,
        Toast.LONG,
        Toast.BOTTOM
    );
};

/**
 * export all exportable functions.
 */
export {
    completeWithGoogle,
    showToast
};