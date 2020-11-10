/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  useState,
  useEffect
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from 'navigation';
import { Provider } from 'react-redux';
import { store } from 'utils/redux';
import { setup } from 'config/setup';
import { InitialRouteName } from 'navigation/stack-navigators/main-navigator';
import { StorageHelper } from 'utils';

/**
 * The root app.
 */
const App = () => {

  /**
   * state.
   */
  const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);
  const [initialRouteName, setInitialRouteName] = useState<InitialRouteName>('Welcome');

  /**
   * setup language.
   */
  useEffect(
    () => {

      /**
       * execute setup function.
       */
      setup().then(async _ => {

        /**
         * check if there is user or not, to
         * * specify the first route.
         */
        let initialRouteName: InitialRouteName = 'Welcome';
        const userFromStorage = await StorageHelper.get('@USER');

        /**
         * if there is user in storage.
         */
        if (userFromStorage !== null) initialRouteName = 'App';

        /**
         * update state.
         */
        setInitialRouteName(initialRouteName);
        setIsSetupCompleted(true);

      });

    },
    []
  );

  /**
   * if setup is not completed, do not mount app.
   */
  if (isSetupCompleted === false) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator
          initialRouteName={initialRouteName}
        />
      </NavigationContainer>
    </Provider>
  );
};

/**
 * export app as default.
 */
export default App;
