const {height, width} = Dimensions.get('screen');
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
  NativeModules,
} from 'react-native';
import {UserActions} from '../../redux-classes/actions/UserActions';
import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import CommonButton from '../../common/components/CommonButton';
import {globalColors} from '../../constant/Colors';
import {WelcomeScreenStyle} from './WelcomeScreenStyle';

const {OSManager} = NativeModules;

interface WelcomeScreenProps {
  userFullName?: string;
  navigation?: any;
}

export const isValidUser = (userFullName: string): boolean => {
    if (userFullName.trim().length > 3) {
      return true;
    } else {
      return false;
    }
  };

/**
 * welcome screen 
 *
 * @param {*} {navigation}
 * @returns jsx
 */
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {

  const [userFullName, setUserFullName] = useState('');

  const dispatch = useDispatch();

  const checkTargetOS = async () => {
    const message = await OSManager.isAppRunningOnDevice();
    Alert.alert(message);
  };
  
  useEffect(() => {
    checkTargetOS();
  }, []);

  const onSavePress = () => {
    if (isValidUser(userFullName)) {
        dispatch(UserActions.saveUserInfo(userFullName));
        navigation?.navigate('ButtonScreen');
    } else {
      Alert.alert('User name should be atleast 3 character.');
    }
  };

  return (
    <SafeAreaView style={WelcomeScreenStyle.safeArea}>
      <View style={WelcomeScreenStyle.container}>
        <View style={WelcomeScreenStyle.userViewContainer}>
          <TextInput
            style={WelcomeScreenStyle.inputStyle}
            testID="User Name"
            placeholder="User Name"
            onChangeText={(userName) => setUserFullName(userName)}
            value={userFullName}
            autoCorrect={false}
            placeholderTextColor={'lightgrey'}
          />
        </View>

        <CommonButton
          onPress={() => onSavePress()}
          style={{backgroundColor: globalColors.sky}}
          testId="Save"
          titleString="Save"
          textStyle={WelcomeScreenStyle.saveButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;