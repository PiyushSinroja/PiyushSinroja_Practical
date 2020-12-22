import {StyleSheet, Dimensions} from 'react-native';
import {globalColors} from '../../constant/Colors';
const {height} = Dimensions.get('screen');

/**
 * Button Screen Styles
 */
export const ButtonScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
  },
  safeAreaStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  userDetailView: {
    height: 40,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
  },
  textFourVariations: {
    fontWeight: 'normal',
    color: '#B1BD2F',
    fontSize: 19,
  },
  viewFourVariations: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginStart: 20,
    marginEnd: 20,
    height: height * 0.06,
  },
  swipeButtonParentViewContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: globalColors.white,
    fontSize: 19,
    paddingVertical: 10,
    textAlign: 'left',
  },
  userText: {
    marginLeft: 10,
    marginRight: 15,
  },
  buttonTextStyle: {
    color: '#65ABE3',
  },
  firstButtonStyle: {
    backgroundColor: globalColors.black,
  },
  secondButtonStyle: {
    backgroundColor: '#2E3A41',
  },
  thirdButtonStyle: {
    backgroundColor: globalColors.sky,
  },
});
