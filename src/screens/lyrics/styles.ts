/**
 * name: lyrics/styles.ts
 * desc: The styles of lyrics screen live here.
 */

import { StyleSheet } from 'react-native';
import { COLOR } from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CORNFLOWER_BLUE
    },
    lyrics: {
        color: COLOR.KOBI,
        fontWeight: 'bold'
    },
    lyricsHolder: {
        marginHorizontal: 16,
        marginTop: 16
    }
});

/**
 * export as default.
 */
export default styles;