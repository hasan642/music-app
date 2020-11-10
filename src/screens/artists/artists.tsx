/**
 * name: artists/artists.tsx
 * desc: This file contains a screen of artists.
 */

import React, { useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import styles from './styles';
import {
    useSelector,
    useDispatch
} from "react-redux"
import {
    artistSelector,
    loadAllArtists
} from 'utils/redux';
import { Artist } from 'api/models';
import {
    Header,
    Loader
} from 'components';
import { useTranslation } from 'react-i18next';
import {
    List,
    Avatar
} from 'react-native-paper';
import { COLOR } from 'theme';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * type checking.
 */
interface ArtistsScreenProps {
    navigation: StackNavigationProp<any>;
};

/**
 * A function component that shows an artists screen.
 */
function ArtistsScreen(props: ArtistsScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * get data from artist selector.
     */
    const {
        loading,
        artists
    } = useSelector(artistSelector);

    /**
     * Gets the artists.
     */
    useEffect(
        () => {
            dispatch(loadAllArtists(1));
        },
        []
    );

    /**
     * handle list item press.
     */
    const handleArtistPress = (artistId: number) => {
        props.navigation.navigate('ArtistSongs', { artistId });
    };

    /**
     * reneres an artist.
     */
    const renderArtist = ({ item }: { item: Artist }) => {
        return (
            <List.Item
                titleStyle={styles.titleStyle}
                onPress={() => handleArtistPress(item.artistId)}
                title={item.artistName}
                description={String(item.artistId)}
                left={props => <Avatar.Image
                    {...props}
                    size={50}
                    source={{ uri: item.coverPhoto }}
                />}
                right={props => <List.Icon
                    color={COLOR.DARK}
                    icon="chevron-right"
                />}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('artists')}
            />

            <FlatList
                data={artists}
                renderItem={renderArtist}
                keyExtractor={it => String(it.artistId)}
            />

            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default ArtistsScreen;