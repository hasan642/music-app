/**
 * name: services.ts
 * desc: All services will be live here.
 */

import Axios from './instance';
import * as ApiTypes from './types';
import {
    Artist,
    Album,
    Track
} from './models';
import { SHARED_VARIABLES } from 'config';
import { User } from 'utils';

/**
 * Gets all artists.
 */
export async function getArtists(page: number): Promise<ApiTypes.GetArtists> {
    try {

        /**
         * api call.
         */
        const artistsResponse = await Axios.get('/music/artists?page=1');

        /**
         * serialize artists.
         */
        function transformArtist(raw: any) {
            return new Artist({
                artistName: raw.artist,
                artistId: raw.id_artist,
                coverPhoto: raw.cover
            });
        };

        /**
         * return transformed artists.
         */
        return {
            kind: 'OK',
            artists: artistsResponse.data.result.map(transformArtist)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};

/**
 * Gets all albums.
 */
export async function getAlbums(artistId: string): Promise<ApiTypes.GetAlbums> {
    try {

        /**
         * api call.
         */
        const albumsResponse = await Axios.get(`/music/artists/${artistId}/albums`);

        /**
         * serialize albums.
         */
        function transformAlbum(raw: any) {
            return new Album({
                albumName: raw.album,
                albumId: raw.id_album,
                coverPhoto: raw.cover
            });
        };

        /**
         * return transformed artists.
         */
        return {
            kind: 'OK',
            albums: albumsResponse.data.result.albums.map(transformAlbum)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};

/**
 * Search on tracks.
 */
export async function searchTracks(searchTerm: string): Promise<ApiTypes.GetTracks> {
    try {

        /**
         * api call.
         */
        const searchResponse = await Axios.get(
            'music',
            {
                params: {

                    /**
                     * transform to lowercase.
                     */
                    q: searchTerm.toLowerCase(),

                    type: 'track'
                }
            }
        );

        /**
         * serialize tracks.
         */
        function transformTrack(raw: any) {
            return new Track({
                trackId: raw.id_track,
                label: raw.track
            });
        };

        /**
         * return transformed tracks.
         */
        return {
            kind: 'OK',
            tracks: searchResponse.data.result.map(transformTrack)
        };

    } catch (e) {
        console.log('e is,', e)
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};

/**
 * Gets all tracks.
 */
export async function getTracks(artistId: number): Promise<ApiTypes.GetTracks> {
    try {

        /**
         * api call.
         */
        const tracksResponse = await Axios.get(`/music/artists/${artistId || SHARED_VARIABLES.TEST_ARTIST}/albums/${SHARED_VARIABLES.TEST_ALBUM}/tracks`);

        /**
         * serialize tracks.
         */
        function transformTrack(raw: any, index: number) {
            return new Track({
                trackId: raw.id_track,
                label: raw.track
            });
        };

        /**
         * return transformed artists.
         */
        return {
            kind: 'OK',
            tracks: tracksResponse.data.result.tracks.map(transformTrack)
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};

/**
 * Gets a lyrics of song.
 */
export async function getTrack(trackId: number): Promise<ApiTypes.GetTrack> {
    try {

        /**
         * api call.
         */
        const endPoint = `/music/artists/${SHARED_VARIABLES.TEST_ARTIST}/albums/${SHARED_VARIABLES.TEST_ALBUM}/tracks/${trackId}`;
        const trackResponse = await Axios.get(endPoint);

        /**
         * serialize tracks.
         */
        function transformTrack(raw: any) {
            return new Track({
                trackId: raw.id_track,
                label: raw.track,
                lyrics: raw.lyrics
            });
        };

        /**
         * return transformed artists.
         */
        return {
            kind: 'OK',
            track: transformTrack(trackResponse.data.result)
        };

    } catch (e) {
        console.log('e is', e)
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};

/**
 * Saves user data to json-server.
 */
export async function saveUserToServer(user): Promise<ApiTypes.SaveUserToServer> {
    try {

        /**
         * api call.
         */
        await Axios.post(
            `${SHARED_VARIABLES.JSON_SERVER_BASE_URL}/user`,
            user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        /**
         * return response.
         */
        return {
            kind: 'OK'
        };

    } catch (e) {
        return {
            kind: 'REJECTED',
            error: e
        };
    };
};