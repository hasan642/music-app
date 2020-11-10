/**
 * name: artist-navigator.tsx
 * desc: This file contains the stack navigator of artist-navigator.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ArtistsScreen,
    ArtistSongsScreen
} from 'screens';

/**
 * create stack navigator instance.
 */
const ArtistStack = createStackNavigator();

/**
 * A function component that shows an artist stack navigator.
 */
function ArtistStackNavigator() {
    return (
        <ArtistStack.Navigator
            initialRouteName={'Artists'}
            headerMode='none'
        >
            <ArtistStack.Screen
                name={'Artists'}
                component={ArtistsScreen}
            />

            <ArtistStack.Screen
                name={'ArtistSongs'}
                component={ArtistSongsScreen}
            />
        </ArtistStack.Navigator>
    );
};

/**
 * export as default.
 */
export default ArtistStackNavigator;