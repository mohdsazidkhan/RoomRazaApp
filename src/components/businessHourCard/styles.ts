import { StyleSheet } from 'react-native';
import { AppColor } from '../../theme/appColor';
import { AppFonts } from '../../theme/appFont';
import { getCustomSize } from '../../theme/appFontSize';
import { AppFontSize } from '../../theme/appFontSize';

const Styles = StyleSheet.create({
  dayMenuView: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
    marginVertical: getCustomSize(20),
  },
  dayNameTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
    // width: '80%'
    // marginHorizontal: getCustomSize(20),
  },
  dayNameText: {
    fontFamily: AppFonts.FontsBold,
    color: AppColor.BLACK_COLOR,
    fontSize: getCustomSize(AppFontSize.FontsSize_19),
    textAlign: 'left',
    flex: 1,
  },
  dayStatus: {
    fontFamily: AppFonts.FontsMedium,
    color: AppColor.BLACK_COLOR,
    fontSize: getCustomSize(AppFontSize.FontsSize_18),
    // textAlign: 'left',
    // flex: 1,
  },
});
export default Styles;
