/**
 * name: tracks/tracks.tsx
 * desc: This file contains a screen of tracks.
 */

import React, { useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    Header,
    Loader
} from 'components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    trackSelector,
    loadAllTracks
} from 'utils';
import { Track } from 'api/models';
import { TrackItem } from 'components';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * type checking.
 */
interface TracksScreenProps {
    navigation: StackNavigationProp<any>;
};

/**
 * A function component that shows a TracksScreen.
 */
function TracksScreen(props: TracksScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * Gets all tracks.
     */
    useEffect(
        () => {

            /**
             * get all tracks.
             */
            dispatch(loadAllTracks());
        },
        []
    );

    /**
     * get state from redux.
     */
    const {
        loading,
        tracks
    } = useSelector(trackSelector);

    /**
     * Handles track press.
     */
    const handleTrackPress = (trackId: number) => {
        props.navigation.navigate('Lyrics', { trackId });
    };

    /** 
     * Reneres track item.
     */
    const renderTrack = ({ item }: { item: Track }) => {
        return (
            <TrackItem
                label={item.label}
                description={String(item.trackId)}
                onPress={() => handleTrackPress(item.trackId)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('tracks')}
            />

            <FlatList
                data={tracks}
                renderItem={renderTrack}
                keyExtractor={it => String(it.trackId)}
            />

            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default TracksScreen;