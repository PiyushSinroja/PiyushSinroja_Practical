/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import NavigationManager from './source/navigation-manager/NavigationManager';

import {Provider} from 'react-redux';
import configureStore from './source/redux-classes/ConfigStore';
const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationManager />
    </Provider>
  );
};

export default App;
