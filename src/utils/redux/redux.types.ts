/**
 * name: redux.types.ts
 * desc: This file contains the redux types.
 */

import {
    Artist,
    Album,
    Track
} from "api/models";
import {
    User,
    UserType
} from "utils/storage";

/**
 * name: redux.types.ts
 * desc: This file contains the types of redux.
 */

export interface ArtistState {
    loading: boolean;
    success: boolean;
    error: string | null;
    artists: Artist[];
    artistTracks: Track[];
};

export interface AlbumState {
    loading: boolean;
    success: boolean;
    error: string | null;
    albums: Album[];
};

export interface TrackState {
    loading: boolean;
    success: boolean;
    error: string | null;
    tracks: Track[];
    foundTracks: Track[];
    selectedTrack: Track;
};

export interface UserState {
    loading: boolean;
    user: User;
    loginSuccess: boolean;
    loginError: null | string;
};