/**
 * name: track-navigator.tsx
 * desc: This file contains the stack navigator of track-navigator.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    TracksScreen,
    LyricsScreen
} from 'screens';

/**
 * create stack navigator instance.
 */
const TrackStack = createStackNavigator();

/**
 * A function component that shows an track stack navigator.
 */
function TrackStackNavigator() {
    return (
        <TrackStack.Navigator
            initialRouteName={'Artists'}
            headerMode='none'
        >
            <TrackStack.Screen
                name={'Tracks'}
                component={TracksScreen}
            />

            <TrackStack.Screen
                name={'Lyrics'}
                component={LyricsScreen}
            />
        </TrackStack.Navigator>
    );
};

/**
 * export as default.
 */
export default TrackStackNavigator;