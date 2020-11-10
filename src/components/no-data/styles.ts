/**
 * name: no-data/styles.ts
 * desc: This file contains a no data of app.
 */

import { StyleSheet } from 'react-native';
import { COLOR, LAYOUT } from 'theme';

const styles = StyleSheet.create({
    text: {
        color: COLOR.DARK,
        fontSize: LAYOUT.getScaledFont(17),
        fontWeight: 'bold'
    }
});

/**
 * export as default.
 */
export default styles;