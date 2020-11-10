/**
 * name: tracks/tracks.tsx
 * desc: This file contains a styles of tracks.
 */

import { StyleSheet } from 'react-native';
import {
    COLOR,
    LAYOUT
} from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CORNFLOWER_BLUE
    },
    title: {
        fontSize: LAYOUT.getScaledFont(25),
        fontWeight: 'bold',
        marginBottom: 10
    },
    internalContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnsHolder: {
        width: '90%'
    },
    btnStyle: {
        marginTop: 16
    },
    titleHolder: {
        alignItems: 'center'
    }
});

/**
 * export as default.
 */
export default styles;