/**
 * name: album-slice.ts
 * desc: This file contains the album slice.
 */

import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICE_NAMES } from './slices-names';
import { Dispatch } from "react";
import { AlbumState } from '../redux.types';
import { getAlbums } from 'api';
import { Album } from "api/models";

/**
 * The initial state.
 */
const initialState: AlbumState = {
    loading: false,
    error: null,
    success: false,
    albums: [],
};

/**
 * create an album slice.
 */
const albumSlice = createSlice({
    name: SLICE_NAMES.ALBUMS,
    initialState,
    reducers: {
        loadAlbums: (state) => {
            state.loading = true;
            state.albums = [];
        },
        loadAlbumsSuccess: (state, { payload: artists }: PayloadAction<any[]>) => {
            state.loading = false;
            state.success = true;
            state.albums = artists;
        },
        loadAlbumsFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        }
    },
});

/**
 * grap the actions.
 */
const {
    loadAlbums,
    loadAlbumsSuccess,
    loadAlbumsFail
} = albumSlice.actions;

/**
 * export as default.
 */
export const albumSelector = (state: { albumStore: AlbumState }) => state.albumStore;
export default albumSlice.reducer;

/**
 * artist actions.
 */
export function loadAllAlbums(artistId: string) {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(loadAlbums());

        /**
         * load albums api.
         */
        const response = await getAlbums(artistId);

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(loadAlbumsFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(loadAlbumsSuccess(response.albums as Album[]));

        };

    };
};