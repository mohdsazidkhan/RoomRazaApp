import { StyleSheet } from 'react-native';
import { AppColor } from '../../../../theme/appColor';
import { AppFonts } from '../../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize';

const styles = StyleSheet.create({
    modeHeading: {
        textAlign: 'center',
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsBold,
        marginVertical: getCustomSize(10),
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    textFont:{
        textAlign: 'center',
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        marginVertical: getCustomSize(10),
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    }
});

export { styles };