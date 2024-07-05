import { StyleSheet } from 'react-native';
import { AppColor } from '../../theme/appColor';
import { AppFonts } from '../../theme/appFont';
// import {getCustomSize} from '../../theme/appFontSize';

const Styles = StyleSheet.create({
  container: {
    height: 63,
    // backgroundColor: AppColor.WHITE_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginHorizontal: 10,
  },
  greetingText: {
    color: AppColor.WHITE_COLOR,
    fontFamily: AppFonts.Montserrate,
    fontSize: 16,
  },
  usernameText: {
    color: AppColor.WHITE_COLOR,
    fontFamily: AppFonts.MontserratMedium,
    fontSize: 20,
  },
});
export default Styles;
