/**
 * name: artist-slice.ts
 * desc: This file contains the artist slice.
 */

import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICE_NAMES } from './slices-names';
import { Dispatch } from "react";
import { ArtistState } from '../redux.types';
import {
    getArtists,
    getTracks
} from "api";
import { Artist, Track } from "api/models";

/**
 * The initial state.
 */
const initialState: ArtistState = {
    loading: false,
    error: null,
    success: false,
    artists: [],
    artistTracks: []
};

/**
 * create an artist slice.
 */
const artistSlice = createSlice({
    name: SLICE_NAMES.ARTIST,
    initialState,
    reducers: {
        loadArtists: (state) => {
            state.loading = true;
            state.artists = [];
        },
        loadArtistsSuccess: (state, { payload: artists }: PayloadAction<any[]>) => {
            state.loading = false;
            state.success = true;
            state.artists = artists;
        },
        loadArtistsFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        },

        getArtistTracks: (state) => {
            state.loading = true;
            state.artistTracks = [];
        },
        getArtistTracksFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        },
        getArtistTracksSuccess: (state, { payload: artistTracks }: PayloadAction<any[]>) => {
            state.loading = false;
            state.success = true;
            state.artistTracks = artistTracks;
        },
    },
});

/**
 * grap the actions.
 */
const {
    loadArtists,
    loadArtistsSuccess,
    loadArtistsFail,

    getArtistTracks,
    getArtistTracksFail,
    getArtistTracksSuccess
} = artistSlice.actions;

/**
 * export as default.
 */
export const artistSelector = (state: { artistStore: ArtistState }) => state.artistStore;
export default artistSlice.reducer;

/**
 * artist actions.
 */
export function loadAllArtists(page: number) {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(loadArtists());

        /**
         * loaad artists api.
         */
        const response = await getArtists(page);

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(loadArtistsFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(loadArtistsSuccess(response.artists as Artist[]));

        };

    };
};

/**
 * get artist tracks.
 */
export function getAllArtistTracks(artistId: number) {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(getArtistTracks());

        /**
         * loaad artists api.
         */
        const response = await getTracks(artistId);

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(getArtistTracksFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(getArtistTracksSuccess(response.tracks as Track[]));

        };
    };
};