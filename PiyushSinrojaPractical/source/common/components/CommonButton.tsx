import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { CommonButtonStyle } from './CommonButtonStyle';

/**
 * common button inteface used for data type of diclared variables
 *
 * @interface CommonButtonProps
 */
interface CommonButtonProps {
    onPress?(): void;
    titleString: string;
    variationType?: string;
    testId?: string;
    style?: object;
    textStyle?: object;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    onPress,
    testId,
    style,
    textStyle,
    titleString,
  }) => {
    return (
        <View style={CommonButtonStyle.container}>
        <TouchableOpacity
          onPress={onPress}
          testID={testId}
          style={[CommonButtonStyle.buttonContainer, style]}>
          <Text style={[CommonButtonStyle.buttonStyle, textStyle]}>{titleString}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
export default CommonButton;