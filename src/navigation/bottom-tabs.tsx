/**
 * name: bottom-tabs.tsx
 * desc: This file contains a material bottom tabs for app.
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    AlbumsScreen,
    SearchScreen
} from 'screens';
import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { ArtistNavigator } from '../navigation';
import { TrackNavigator } from './stack-navigators';

/**
 * create bottom tab instance.
 */
const MaterialBottomTab = createMaterialBottomTabNavigator();

/**
 * A function component that contains a material bottom tabs.
 */
function MaterialBottomTabs() {
    return (
        <MaterialBottomTab.Navigator
            barStyle={styles.barStyle}
            initialRouteName={'Artists'}
            backBehavior={'history'}
            labeled={false}
            activeColor={COLOR.CORNFLOWER_BLUE}
            inactiveColor={COLOR.DARK}
        >
            <MaterialBottomTab.Screen
                name={'Artists'}
                component={ArtistNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="person"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />

            <MaterialBottomTab.Screen
                name={'Tracks'}
                component={TrackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="md-musical-notes"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />

            <MaterialBottomTab.Screen
                name={'Albums'}
                component={AlbumsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MIcons
                            name="album"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />

            <MaterialBottomTab.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MIcons
                            name="search"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            
        </MaterialBottomTab.Navigator>
    );
};

/**
 * styles.
 */
const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: COLOR.KOBI
    }
});

/**
 * export material tabs as default.
 */
export default MaterialBottomTabs;