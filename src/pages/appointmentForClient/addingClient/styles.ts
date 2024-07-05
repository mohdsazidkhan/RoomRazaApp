import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    screenContainer: { marginHorizontal: getCustomSize(15), flex: 1 },
    radioButtonView: { flexDirection: 'row', alignItems: 'center', marginRight: getCustomSize(10) },
    radioButtonText: { fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK },
    subTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    textInputTitle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.TAUPE_GRAY,
        marginTop: getCustomSize(15)
    },
    signUpView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: getCustomSize(15)
    },
    dontHaveText: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.STORM_CLOUD_COLOR
    },
    register: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.BLACK_OLIVE
    },
    genderTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        // textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    buttonView: { justifyContent: 'flex-end', flex: 1, marginVertical: getCustomSize(20) },
    moreInfoText: { fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE },
    defaultAddressText: { fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK }
})