import {StyleSheet} from 'react-native';
import {AppColor} from '../../theme/appColor';
import {AppFonts} from '../../theme/appFont';
import {getCustomSize} from '../../theme/appFontSize';

const Styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    backgroundColor: AppColor.WHITE_COLOR,
    marginTop: 15,
    elevation: 5,
  },
  appointmentCardMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: AppColor.WHITE_COLOR,
    flex: 1,
    padding: 14,
  },
  appointmentStatus: {
    color: AppColor.INTERNATIONAL_ORANGE,
    fontSize: getCustomSize(14),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentClientName: {
    color: AppColor.BLACK_COLOR,
    fontSize: getCustomSize(16),
    marginTop: getCustomSize(5),
    fontWeight: '600',
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentServiceName: {
    color: AppColor.DEEP_SPACE_SPARKLE,
    fontSize: getCustomSize(14),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.Montserrate,
  },
  appointmentServicePlace: {
    color: AppColor.QUICK_SILVER,
    fontSize: getCustomSize(14),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentAmtText: {
    color: AppColor.BLACK_COLOR,
    fontSize: getCustomSize(16),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentAmtRsText: {
    color: AppColor.AZURE,
    fontSize: getCustomSize(16),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentStatusCurrent: {
    color: AppColor.PERSIAN_GREEN,
    fontSize: getCustomSize(16),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentTime: {
    color: AppColor.BLACK_OLIVE,
    fontSize: getCustomSize(12),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
  },
  appointmentDuration: {
    color: AppColor.QUICK_SILVER,
    fontSize: getCustomSize(12),
    marginTop: getCustomSize(3),
    fontFamily: AppFonts.MontserratMedium,
    textAlign: 'right',
  },
  filterSortSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentCallBg: {
    width: getCustomSize(29),
    height: getCustomSize(29),
    borderRadius: getCustomSize(25),
    backgroundColor: AppColor.ATOMIC_TANGERINE,
    marginLeft: getCustomSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Styles;
