/**
 * name: lyrics/lyrics.tsx
 * desc: The lyrics screen live here.
 */

import React, { useEffect } from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    trackSelector,
    getTrackById
} from 'utils';
import {
    Header,
    Text
} from 'components';
import { useTranslation } from 'react-i18next';

/**
 * type checking
 */
interface LyricsScreenProps {
    navigation: StackNavigationProp<any>;
    route: any;
};

/**
 * A function component that show a lyrics screen.
 */
function LyricsScreen(props: LyricsScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * get data from redux.
     */
    const {
        loading,
        selectedTrack
    } = useSelector(trackSelector);

    /**
     * Gets track by track id.
     */
    useEffect(
        () => {
         
            /**
             * no need to check, 'trackId' always will be exist.
             */
            const trackId = props.route.params.trackId;
            dispatch(getTrackById(trackId));
        },
        []
    );

    return (
        <View style={styles.container}>
            <Header
                handleGoBack={() => props.navigation.goBack()}
                title={t('artists')}
            />

            <ScrollView style={styles.lyricsHolder}>
                <Text textStyle={styles.lyrics}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nobis atque odio! Qui eum reiciendis cupiditate delectus reprehenderit eos quia doloribus eius beatae laudantium incidunt suscipit amet quidem, nisi minima.
            </Text>
            </ScrollView>
        </View>
    );
};

/**
 * export as default.
 */
export default LyricsScreen;