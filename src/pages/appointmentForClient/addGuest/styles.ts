import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    subTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    genderTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        // textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    radioButtonView: { flexDirection: 'row', alignItems: 'center', marginRight: getCustomSize(10) },
    radioButtonText: { fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK },
})