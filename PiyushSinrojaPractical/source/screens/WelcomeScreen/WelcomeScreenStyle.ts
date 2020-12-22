import {StyleSheet, Dimensions} from 'react-native';
import {globalColors} from '../../constant/Colors';
const {height, width} = Dimensions.get('screen');

/**
 * Welcome Screen Style
 */
export const WelcomeScreenStyle = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  userViewContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 40,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  inputStyle: {
    alignSelf: 'stretch',
    marginStart: 15,
    marginEnd: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 0,
    paddingStart: 10,
    fontSize: 14,
    height: height * 0.055,
    justifyContent: 'center',
  },
  saveButtonStyle: {
    color: globalColors.white,
    fontWeight: 'bold'
  }
});
