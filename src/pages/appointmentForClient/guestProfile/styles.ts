import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize } from '../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    subTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.EERIE_BLACK,
        textAlign: 'center',
        marginBottom: 15
    },
    textInputTitle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.TAUPE_GRAY,
        marginTop: 15
    },
    signUpView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15
    },
    dontHaveText: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: AppFontSize.FontsSize_16,
        color: AppColor.STORM_CLOUD_COLOR
    },
    register: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_16,
        color: AppColor.BLACK_OLIVE
    },
    genderTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.EERIE_BLACK,
        // textAlign: 'center',
        marginBottom: 15
    },

})