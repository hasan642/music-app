/**
 * name: types.ts
 * desc: The types of api will be live here.
 */

import {
    Artist,
    Album,
    Track
} from "./models";

/**
 * common.
 */
type Kind = 'OK' | 'REJECTED';

/**
 * Api types.
 */
export interface GetArtists {
    kind: Kind;
    error?: string;
    artists?: Artist[];
};

export interface GetAlbums {
    kind: Kind;
    error?: string;
    albums?: Album[];
};

export interface GetTracks {
    kind: Kind;
    error?: string;
    tracks?: Track[];
};

export interface GetTrack {
    kind: Kind;
    error?: string;
    track?: Track;
};

export interface SaveUserToServer {
    kind: Kind;
    error?: string;
};