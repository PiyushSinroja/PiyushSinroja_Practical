import React from 'react';
import ButtonScreen from '../../../source/screens/ButtonScreen/ButtonScreen';
import {render, fireEvent} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import configureStore from '../../../source/redux-classes/ConfigStore';

const store = configureStore();

import SwipeButton from 'rn-swipe-button';

describe('Button Screen Test', () => {
  it('renders properly', () => {
    const {toJSON, UNSAFE_getByType} = render(
      <Provider store={store}>
        <ButtonScreen />
      </Provider>,
    );

    const sliderButton = UNSAFE_getByType(SwipeButton);
    fireEvent(sliderButton, 'onSwipeStart');
    fireEvent(sliderButton, 'onSwipeSuccess');
    expect(toJSON()).toMatchSnapshot();
  });
});
