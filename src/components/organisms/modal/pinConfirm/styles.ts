import { StyleSheet } from 'react-native';
import { AppColor } from '../../../../theme/appColor';
import { AppFonts } from '../../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize';

export const styles = StyleSheet.create({
    confirmView: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: getCustomSize(30)
    },
    titleText: {
        textAlign: 'center',
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_30),
        marginLeft: getCustomSize(10)
    },
    descriptionText: {
        textAlign: 'center',
        color: AppColor.DEEP_SPACE_SPARKLE,
        fontFamily: AppFonts.FontsMedium,
        marginVertical: getCustomSize(10),
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        marginHorizontal: getCustomSize(50)
    },
    confirmTextView: {
        marginVertical: getCustomSize(30),
        alignSelf: 'center'
    },
    confirmText: {
        textAlign: 'center',
        color: AppColor.AZURE,
        fontFamily: AppFonts.FontsMedium,
        marginVertical: getCustomSize(5),
        fontSize:getCustomSize(AppFontSize.FontsSize_17),
        // backgroundColor:'#ff0',
        padding:getCustomSize(20)
    }
});

