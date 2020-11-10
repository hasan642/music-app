/**
 * name: artist-songs/artist-songs.tsx
 * desc: The styles of artist-songs screen live here.
 */

import React, { useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import styles from 'screens/artists/styles';
import {
    Header,
    Loader,
    TrackItem,
    NoData
} from 'components';
import { useTranslation } from 'react-i18next';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    getAllArtistTracks,
    artistSelector
} from 'utils/redux';
import { Track } from 'api/models';

/**
 * type checking.
 */
interface ArtistSongsScreenProps {
    navigation: StackNavigationProp<any>;
    route: any;
};

/**
 * A function component that shows a ArtistSongsScreen.
 */
function ArtistSongsScreen(props: ArtistSongsScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * use redux state.
     */
    const {
        loading,
        artistTracks
    } = useSelector(artistSelector);

    /**
     * Gets all tracks.
     */
    useEffect(
        () => {
            const artistId = props.route.params.artistId;
            dispatch(getAllArtistTracks(artistId));
        },
        []
    );


    /** 
     * Reneres track item.
     */
    const renderTrack = ({ item }: { item: Track }) => {
        return (
            <TrackItem
                label={item.label}
                description={String(item.trackId)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header
                handleGoBack={() => props.navigation.goBack()}
                title={t('tracks')}
            />
            {!loading && artistTracks.length > 0 &&
                (<FlatList
                    data={artistTracks}
                    renderItem={renderTrack}
                    keyExtractor={(it, index) => String(index)}
                />)
            }

            {
                !loading && artistTracks.length === 0 && <NoData />
            }
            
            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default ArtistSongsScreen;