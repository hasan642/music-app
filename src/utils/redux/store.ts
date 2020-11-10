/**
 * name: store.ts
 * desc: This file contains the config of redux store.
 */

import { configureStore } from "@reduxjs/toolkit";
import {
    artistSlice,
    albumSlice,
    trackSlice,
    userSlice
} from './slices';

/**
 * create the store.
 */
const store = configureStore({
    reducer: {
        artistStore: artistSlice,
        albumStore: albumSlice,
        trackStore: trackSlice,
        userStore: userSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    },
});

/**
 * export as default.
 */
export default store;