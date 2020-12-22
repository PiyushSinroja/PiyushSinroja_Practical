import React from 'react';
import InformationScreen from '../../../source/screens/InformationScreen/InformationScreen';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from '../../../source/redux-classes/ConfigStore';

const store = configureStore();

describe('Information Screen', () => {
  it('renders properly', () => {
    const {toJSON, getByTestId} = render(
      <Provider store={store}>
        <InformationScreen />
      </Provider>,
    );
    const textInstance = getByTestId('User Name');
    expect(textInstance).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
