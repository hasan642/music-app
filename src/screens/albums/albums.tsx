/**
 * name: albums/albums.ts
 * desc: This file contains a screen of albums.
 */

import React, { useEffect } from 'react';
import styles from './styles';
import {
    View,
    FlatList
} from 'react-native';
import { useTranslation } from 'react-i18next';
import {
    Header,
    Text,
    Loader
} from 'components';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    albumSelector,
    loadAllAlbums
} from 'utils/redux';
import { Avatar } from 'react-native-paper';
import { Album } from 'api/models';
import { SHARED_VARIABLES } from 'config';

/**
 * type checking.
 */
interface AlbumsScreenProps {

};

/**
 * A function component that shows an AlbumsScreen.
 */
function AlbumsScreen(props: AlbumsScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * select data from redux.
     */
    const {
        loading,
        albums
    } = useSelector(albumSelector);

    /**
     * Gets an albums by artist
     */
    useEffect(
        () => {

            /**
             * Gets all albums.
             */
            async function asyncGetAlbums() {
                dispatch(loadAllAlbums(SHARED_VARIABLES.TEST_ARTIST));
            };

            /**
             * execute async function.
             */
            asyncGetAlbums();
        },
        []
    );

    /**
     * rensers the album.
     */
    const renderAlbum = ({ item }: { item: Album }) => {
        return (
            <View style={styles.album}>

                <Avatar.Image
                    size={100}
                    source={{ uri: item.coverPhoto }}
                />

                <Text
                    numberOfLines={3}
                    textStyle={styles.text}
                >
                    {item.albumName}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('albums')}
            />

            <FlatList
                data={albums}
                renderItem={renderAlbum}
                numColumns={2}
                keyExtractor={it => String(it.albumId)}
            />

            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default AlbumsScreen;