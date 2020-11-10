/**
 * name: track-slice.ts
 * desc: This file contains the track slice.
 */

import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { SLICE_NAMES } from './slices-names';
import { Dispatch } from "react";
import { TrackState } from '../redux.types';
import {
    getTracks,
    searchTracks as searchTracksApi,
    getTrack,
} from 'api';
import { Track } from "api/models";

/**
 * The initial state.
 */
const initialState: TrackState = {
    loading: false,
    error: null,
    success: false,
    tracks: [],
    foundTracks: [],
    selectedTrack: null
};

/**
 * create an album slice.
 */
const trackSlice = createSlice({
    name: SLICE_NAMES.TRACKS,
    initialState,
    reducers: {

        /**
         * load tracks cases.
         */
        loadTracks: (state) => {
            state.loading = true;
            state.tracks = [];
        },
        loadTracksSuccess: (state, { payload: tracks }: PayloadAction<Track[]>) => {
            state.loading = false;
            state.success = true;
            state.tracks = tracks;
        },
        loadTracksFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        },

        /**
         * search cases.
         */
        searchTracks: (state) => {

            /**
             * reset state.
             */
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        searchTracksSuccess: (state, { payload: foundTracks }: PayloadAction<Track[]>) => {
            state.loading = false;
            state.success = true;
            state.foundTracks = foundTracks;
        },
        searchTracksFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        },

        /**
         * fetch track cases.
         */
        fetchTrackById: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchTrackByIdSuccess: (state, { payload: selectedTrack }: PayloadAction<Track>) => {
            state.loading = false;
            state.success = true;
            state.selectedTrack = selectedTrack;
        },
        fetchTrackByIdFail: (state, { payload: error }: PayloadAction<string>) => {
            state.loading = false;
            state.error = error;
        },

    },
});

/**
 * grap the actions.
 */
const {
    loadTracks,
    loadTracksSuccess,
    loadTracksFail,

    searchTracks,
    searchTracksSuccess,
    searchTracksFail,

    fetchTrackById,
    fetchTrackByIdSuccess,
    fetchTrackByIdFail
} = trackSlice.actions;

/**
 * export as default.
 */
export const trackSelector = (state: { trackStore: TrackState }) => state.trackStore;
export default trackSlice.reducer;

/**
 * load all tracks.
 */
export function loadAllTracks() {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(loadTracks());

        /**
         * load albums api.
         */
        const response = await getTracks();

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(loadTracksFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(loadTracksSuccess(response.tracks as Track[]));

        };

    };
};

/**
 * search on tracks.
 */
export function searchOnTracks(searchTerm: string) {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(searchTracks());

        /**
         * search on tracks api.
         */
        const response = await searchTracksApi(searchTerm);

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(searchTracksFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(searchTracksSuccess(response.tracks as Track[]));

        };
    };
};

/**
 * get track by id.
 */
export function getTrackById(trackId: number) {
    return async (dispatch: Dispatch<any>) => {

        /**
         * dispatch loading.
         */
        dispatch(fetchTrackById());

        /**
         * sget track by id.
         */
        const response = await getTrack(trackId);

        /**
         * handle if kind is not ok.
         */
        if (response.kind !== 'OK') {
            dispatch(fetchTrackByIdFail(response.error as string));
        } else {

            /**
             * handle in success case.
             */
            dispatch(fetchTrackByIdSuccess(response.track as Track));

        };
    };
};