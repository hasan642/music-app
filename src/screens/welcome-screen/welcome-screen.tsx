/**
 * name: welcome-screen/welcome-screen.tsx
 * desc: This file contains the welcome screen.
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import {
    Header,
    Text,
    Button,
    Loader
} from 'components';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { COLOR } from 'theme';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    userSelector,
    loginAsGuest,
    loginWithGoogle
} from 'utils/redux';
import { showToast } from 'utils';

/**
 * type checking.
 */
interface WelcomeScreenProps {
    navigation: StackNavigationProp<any>;
};

/**
 * A function component that shows WelcomeScreen.
 */
function WelcomeScreen({ navigation }: WelcomeScreenProps) {

    /**
     * get t from translations.
     */
    const { t } = useTranslation();

    /**
     * user dispatch.
     */
    const dispatch = useDispatch();

    /**
     * user data from redux.
     */
    const {
        loading,
        loginError,
        loginSuccess,
    } = useSelector(userSelector);

    /**
     * handles login redux state.
     */
    useEffect(
        () => {
            if (loginSuccess) {
                goToApp();
            };
        },
        [loginSuccess]
    );


    /**
     * handles login redux state.
     */
    useEffect(
        () => {
            if (loginError) {
             showToast(loginError);
            };
        },
        [loginError]
    );

    /**
     * navigates to app.
     */
    const goToApp = () => {

        /**
         * reset to prevent user from go back.
         */
        navigation.reset({
            index: 0,
            routes: [{ name: 'App' }],
        });

    };

    /**
     * const continue as guest.
     */
    const continueAsGuest = () => {
        dispatch(loginAsGuest());
    };

    /**
     * completes with google.
     */
    const handleGoogleSignin = () => {
       dispatch(loginWithGoogle())
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.internalContainer}>
                <View style={styles.titleHolder}>
                    <Text textStyle={styles.title}>
                        {t('welcomeTo')}
                    </Text>

                    <FAIcon
                        name="music"
                        color={COLOR.KOBI}
                        size={50}
                    />
                </View>

                <View style={styles.btnsHolder}>
                    <Button
                        style={styles.btnStyle}
                        label={t('guest')}
                        onPress={continueAsGuest}
                    />

                    <Button
                        style={styles.btnStyle}
                        label={t('google')}
                        onPress={handleGoogleSignin}
                    />
                </View>
            </View>

            {loading && <Loader />}
        </View>
    );
};

/**
 * export as default.
 */
export default WelcomeScreen;