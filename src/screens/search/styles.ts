/**
 * name: search/styles.ts
 * desc: This file contains a search screen styles.
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CORNFLOWER_BLUE
    },
    searchBar: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: COLOR.KOBI,
        borderRadius: 16
    }
});

/**
 * export as default.
 */
export default styles;