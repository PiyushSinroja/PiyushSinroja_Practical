import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {InformationScreenStyle} from './InformationScreenStyle';

/**
 * Infromation screen
 *  used to display user information
 * @returns
 */
const InformationScreen: React.FC = () => {

  const userName = useSelector((state: any) => state.UserReducers.userName);
  return (
    <SafeAreaView style={InformationScreenStyle.safeAreaStyle}>
      <View style={InformationScreenStyle.container}>
        <Text style={InformationScreenStyle.text}> User Name:</Text>
        <Text testID="User Name" style={[InformationScreenStyle.text, InformationScreenStyle.userText]}>{userName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default InformationScreen;
