import React from 'react';
import {Provider} from 'react-redux';
import WelcomeScreen from '../../../source/screens/WelcomeScreen/WelcomeScreen';
import {isValidUser} from '../../../source/screens/WelcomeScreen/WelcomeScreen';

import configureStore from '../../../source/redux-classes/ConfigStore';
const store = configureStore();
import {render, fireEvent} from '@testing-library/react-native';
import {Alert} from 'react-native';
describe('Welcome Screen', () => {
  const {toJSON, getByTestId, getByPlaceholderText} = render(
    <Provider store={store}>
      <WelcomeScreen />
    </Provider>,
  );

  
  describe('click on save', () => {
    it('check the user name', () => {
      const spy = jest.spyOn(Alert, 'alert');
      expect(isValidUser('Piyush')).toBeTruthy();
      expect(isValidUser('pi')).toBeFalsy();
      fireEvent.changeText(getByPlaceholderText('User Name'), '');
      fireEvent.press(getByTestId('Save'));
      expect(spy).toHaveBeenCalledTimes(1);

      fireEvent.changeText(getByTestId('User Name'), 'Piyush Sinroja');
      fireEvent.press(getByTestId('Save'));

      expect(getByTestId('User Name').props.value.length).toBeGreaterThanOrEqual(
        3,
      );
    });
  });
  expect(toJSON()).toMatchSnapshot();
});


describe('Validations', () => {
  it('check user name validation', () => {
    expect(isValidUser('hemant')).toBeTruthy();
    expect(isValidUser('he')).toBeFalsy();
  });
});
