import {StyleSheet} from 'react-native';
import {globalColors} from '../../constant/Colors';

/**
 * Information Screen Styles
 */
export const InformationScreenStyle = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    color: globalColors.black,
    fontSize: 19,
    marginTop: 10,
    textAlign: 'left',
    height: 25,
  },
  userText: {
    marginLeft: 10,
    marginRight: 15,
  },
});
