import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const styles = StyleSheet.create({
    container: {
        borderRadius: getCustomSize(10),
        justifyContent: 'center',
    },
    label: {
        color: 'white',
        justifyContent: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        paddingVertical: getCustomSize(4),
        fontFamily: AppFonts.FontsMedium,

    },
    linearGradientView: { flexDirection: 'row', alignItems: 'center', flex: 1, marginHorizontal: getCustomSize(20) },
    linearGradientTextView: { marginHorizontal: getCustomSize(10) },
    titleText: { fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_23), color: AppColor.WHITE_COLOR },
    subTitleText: { fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_16), color: AppColor.WHITE_COLOR },
    rightText: { fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_14), color: AppColor.WHITE_COLOR, textAlign: 'right', flex: 1 }
});
export default styles;
