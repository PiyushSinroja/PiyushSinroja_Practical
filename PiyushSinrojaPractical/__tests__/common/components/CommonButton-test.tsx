import React from 'react';
import CommonButton from '../../../source/common/components/CommonButton';
import {render, fireEvent} from '@testing-library/react-native';

describe('CommonButton', () => {
    it('CommonButton renders properly', () => {
      const onPressHandler = jest.fn();
      const {toJSON, getByTestId} = render(
        <CommonButton
          testId={'updatedButton'}
          titleString="testing"
          onPress={onPressHandler}
        />,
      );
      fireEvent.press(getByTestId('updatedButton'));
      expect(toJSON()).toMatchSnapshot();
    });
  });