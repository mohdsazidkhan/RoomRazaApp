import {StyleSheet} from 'react-native';
import {AppColor} from '../../theme/appColor';
import {AppFonts} from '../../theme/appFont';
import {AppFontSize} from '../../theme/appFontSize';
import {getCustomSize} from '../../theme/appFontSize';

const Styles = StyleSheet.create({
  appointmentView: {
    alignItems: 'center',
    marginRight: getCustomSize(15),
    borderRadius: 5,
  },
  appointmentStatusText: {
    marginTop: 10,
    // fontFamily: AppFonts.MontserratMedium,
    color: AppColor.BLACK_COLOR,
    fontSize: getCustomSize(AppFontSize.FontsSize_14),
  },
});
export default Styles;
