/**
 * name: track-item/track-item.tsx
 * desc: This file contains a track-item component, will be used in
 * * tracks and search screens.
 */

import React, { memo } from 'react';
import { List } from "react-native-paper";
import styles from './styles';
import { COLOR } from 'theme';

/**
 * type checking.
 */
interface TrackItemProps {
    label: string;
    description: string;

    /**
     * optional props.
     */
    onPress?: () => void;
};

/**
 * A function component that shows a track item.
 */
function TrackItem(props: TrackItemProps) {

    /**
     * grap the props.
     */
    const {
        label,
        description,
        onPress
    } = props;

    return (
        <List.Item
            titleStyle={styles.titleStyle}
            onPress={onPress}
            disabled={onPress === undefined}
            title={label}
            description={description}
            right={onPress !== undefined && renderRightIcon}
        />
    );
};

/**
 * functions.
 */
function renderRightIcon(props) {
    return (<List.Icon
        {...props}
        color={COLOR.DARK}
        icon="chevron-right"
    />)
};

/**
 * export as default as memozied component for
 * * performance issue.
 */
export default memo(TrackItem);