/**
 * name: search/search.tsx
 * desc: This file contains a search screen.
 */

import React, { useState } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import styles from './styles';
import {
    Header,
    TrackItem,
    Loader,
    NoData
} from 'components';
import { useTranslation } from 'react-i18next';
import { Searchbar } from 'react-native-paper';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    searchOnTracks,
    trackSelector
} from 'utils/redux';
import { Track } from 'api/models';

/**
 * type checking.
 */
interface SearchScreenProps {

};

/**
 * A function component that shows a search screen.
 */
function SearchScreen(props: SearchScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * state.
     */
    const [searchTerm, setSearchTerm] = useState<string>('');

    /**
     * select data from redux.
     */
    const {
        loading,
        foundTracks
    } = useSelector(trackSelector);

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * handle on end editing.
     */
    const handleOnEndEditing = (searchTerm: string) => {

        /**
         * if there is no searchTerm do no thing.
         */
        searchTerm && dispatch(searchOnTracks(searchTerm));
    };

    const handleTrackPress = () => {

    };

    /**
     * Reneres track item.
     */
    const renderTrack = ({ item }: { item: Track }) => {
        return (
            <TrackItem
                label={item.label}
                description={String(item.trackId)}
                onPress={handleTrackPress}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={t('search')}
            />

            <Searchbar
                autoFocus
                placeholder="Search"
                onEndEditing={e => handleOnEndEditing(e.nativeEvent.text)}
                onChangeText={setSearchTerm}
                value={searchTerm}
                style={styles.searchBar}
            />

            {
                !loading && foundTracks.length > 0 &&
                (<FlatList
                    data={foundTracks}
                    keyExtractor={it => String(it.trackId)}
                    renderItem={renderTrack}
                />)
            }

            {
                !loading && foundTracks.length == 0 && <NoData />
            }

            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default SearchScreen;