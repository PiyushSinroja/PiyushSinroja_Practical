import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

/**
 * Common Button Styles
 */
export const CommonButtonStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    marginStart: 20,
    marginEnd: 20,
    height: height * 0.06,
  },
  buttonStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'normal',
  },
});
