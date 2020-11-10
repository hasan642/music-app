/**
 * name: no-data/no-data.tsx
 * desc: This file contains a no data of app.
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { Text } from '..';
import { commonStyles } from 'theme';

/**
 * type checking
 */
interface NoDataProps {
    noDataTxt?: string;
};

/**
 * A function component that shows a no data component.
 */
function NoData({ noDataTxt }: NoDataProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    return (
        <View style={commonStyles.flexCenter}>
            <Text textStyle={styles.text}>
                {noDataTxt || t('noData')}
            </Text>
        </View>
    );
};

/**
 * export as default.
 */
export default NoData;