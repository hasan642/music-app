/**
 * name: artists/styles.ts
 * desc: The styles of artists screen live here.
 */

import { StyleSheet } from "react-native";
import { COLOR } from "theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.CORNFLOWER_BLUE,
    },
    titleStyle: {
        color: COLOR.DARK,
        fontWeight: 'bold'
    }
});

/**
 * export as default.
 */
export default styles;