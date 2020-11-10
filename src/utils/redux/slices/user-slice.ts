/**
 * name: user-slice.ts
 * desc: This file contains the user slice.
 */

import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICE_NAMES } from './slices-names';
import { Dispatch } from "react";
import { UserState } from '../redux.types';
import { User, StorageHelper } from "utils/storage";
import { completeWithGoogle } from "utils/general";
import { saveUserToServer } from "api";

/**
 * The initial state.
 */
const initialState: UserState = {
    loading: false,
    loginSuccess: false,
    loginError: null,
    user: null,
};

/**
 * create a user slice.
 */
const userSlice = createSlice({
    name: SLICE_NAMES.USER,
    initialState,
    reducers: {
        loginUser: (state) => {
            state.loading = true;
            state.loginSuccess = false;
            state.loginError = null;
        },
        loginUserSuccess: (state, { payload: user }: PayloadAction<User>) => {
            state.user = user;
            state.loginSuccess = true;
            state.loading = false;
        },
        loginUserFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loginError = error;
            state.loading = false;
        },

    }
});

/**
 * grap the actions.
 */
const {
    loginUser,
    loginUserSuccess,
    loginUserFail
} = userSlice.actions;

/**
 * export as default.
 */
export const userSelector = (state: { userStore: UserState }) => state.userStore;
export default userSlice.reducer;

/**
 * login as guest.
 */
export function loginAsGuest() {
    return async (dispatch: Dispatch<any>) => {
        try {
            /**
             * loading user.
             */
            dispatch(loginUser());

            /**
             * form user data.
             */
            const userToStorage: User = {
                userName: 'guest',
                name: 'guest',
                type: 'GUEST',
                id: 'GUEST'
            };

            /**
             * save user to storage.
             */
            await StorageHelper.save('@USER', userToStorage);

            /**
             * save data to redux.
             */
            dispatch(loginUserSuccess(userToStorage));

        } catch (e) {
            dispatch(loginUserFail(e.message));
        };
    };
};

/**
 * login with Google.
 */
export function loginWithGoogle() {
    return async (dispatch: Dispatch<any>) => {
        try {

            /**
             * loading user.
             */
            dispatch(loginUser());

            /**
             * complete with login
             */
            const {
                user: { email, name },
                user: googleUser
            } = await completeWithGoogle();

            /**
             * form user data.
             */
            const userToStorage: User = {
                userName: email,
                name: name,
                type: 'GOOGLE_USER',
                id: email
            };

            /**
             * save user data to json server.
             */
            await saveUserToServer({
                ...googleUser,
                lastSignIn: String(new Date().getTime())
            });

            /**
             * save user to storage.
             */
            await StorageHelper.save('@USER', userToStorage);

            /**
             * save data to redux.
             */
            dispatch(loginUserSuccess(userToStorage));

        } catch (e) {
            dispatch(loginUserFail(e.message));
        };
    };
};