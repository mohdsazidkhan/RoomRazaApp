import {StyleSheet} from 'react-native';
import {AppColor} from '../../theme/appColor';
// import {AppFonts} from '../../theme/appFont';
// import {getCustomSize} from '../../theme/appFontSize';

const Styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    backgroundColor: AppColor.WHITE_COLOR,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});
export default Styles;
