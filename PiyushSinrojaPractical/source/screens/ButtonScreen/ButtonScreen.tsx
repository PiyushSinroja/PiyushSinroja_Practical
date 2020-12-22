import React, { useState, ReactElement} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {ButtonScreenStyles} from './ButtonScreenStyles';
import CommonButton from '../../common/components/CommonButton';
import {globalColors} from '../../constant/Colors';
import SwipeButton from 'rn-swipe-button';
import {useSelector} from 'react-redux';

const diamondIcon = require('../../assets/images/diamondIcon.png');

interface ButtonScreenProps {
  userFullName?: string;
  navigation?: any;
}

/**
 * button screen used to display button variations and user information
 *
 * @param {*} {navigation}
 * @returns jsx
 */
const ButtonScreen: React.FC<ButtonScreenProps> = ({navigation}) => {
  const [isUnlock, setIsUnlock] = useState(false);

  const userFullName = useSelector((state: any) => state.UserReducers.userName);

  const navigateToInformationScreen = () => {
    navigation?.navigate('InformationScreen');
  };

  const sliderIcon = () => <Image resizeMode="center" source={diamondIcon} />;

  const viewSliderButton = () => {
    let titleSlider = isUnlock == false ? 'Slide to continue' : 'Success';

    return (
      <View style={ButtonScreenStyles.swipeButtonParentViewContainer}>
        <SwipeButton
          containerStyles={ButtonScreenStyles.sliderButtonContainer}
          thumbIconBackgroundColor={globalColors.sky}
          thumbIconBorderColor={globalColors.transparent}
          thumbIconComponent={sliderIcon}
          thumbIconStyles={{
            borderRadius: 5,
          }}
          railBorderColor={globalColors.grey}
          railBackgroundColor={globalColors.black}
          onSwipeStart={() => {
            setIsUnlock(false);
          }}
          onSwipeSuccess={() => {
            setIsUnlock(true);
          }}
          shouldResetAfterSuccess={false}
          title={titleSlider}
          titleColor={globalColors.sky}
          railStyles={{
            backgroundColor: globalColors.transparent,
            borderColor: globalColors.transparent,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={ButtonScreenStyles.safeAreaStyle}>
      <View style={ButtonScreenStyles.container}>
        <View style={ButtonScreenStyles.userDetailView}>
          <Text style={ButtonScreenStyles.text}> User Name:</Text>
          <Text style={[ButtonScreenStyles.text, ButtonScreenStyles.userText]}>
            {userFullName}
          </Text>
        </View>
        <View style={ButtonScreenStyles.buttonsContainer}>
          <View style={ButtonScreenStyles.viewFourVariations}>
            <Text style={ButtonScreenStyles.textFourVariations}>
              4 variations of a button
            </Text>
          </View>

          <CommonButton
            onPress={() => {
              navigateToInformationScreen();
            }}
            titleString={'Press me'}
            style={ButtonScreenStyles.firstButtonStyle}
            textStyle={ButtonScreenStyles.buttonTextStyle}
          />

          <CommonButton
            onPress={() => {
              navigateToInformationScreen();
            }}
            titleString={'Press me'}
            style={ButtonScreenStyles.secondButtonStyle}
            textStyle={ButtonScreenStyles.buttonTextStyle}
          />

          <CommonButton
            onPress={() => {
              navigateToInformationScreen();
            }}
            titleString={'Press me'}
            style={ButtonScreenStyles.thirdButtonStyle}
          />

          {viewSliderButton()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonScreen;
