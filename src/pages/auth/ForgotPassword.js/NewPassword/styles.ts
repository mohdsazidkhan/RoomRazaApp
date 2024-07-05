import { PixelRatio, StyleSheet } from "react-native";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";
import { AppColor } from "../../../../theme/appColor";

export const styles = StyleSheet.create({
    welcomeToText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsBold,
        // fontSize: AppFontSize.FontsSize_25,
        color: AppColor.EERIE_BLACK,
        marginTop: getCustomSize(AppFontSize.FontsSize_25),
        fontSize: getCustomSize(AppFontSize.FontsSize_25)
    },
    logoImage: {
        height: 250,
        width: 250,
        alignSelf: 'center'
    },
    loginAccView: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: getCustomSize(AppFontSize.FontsSize_25)
    },
    loginAccText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        // fontSize: AppFontSize.FontsSize_15,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.DEEP_SPACE_SPARKLE,
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        // fontSize: AppFontSize.FontsSize_15,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.AZURE,
        marginTop: getCustomSize(AppFontSize.FontsSize_25),
        marginBottom: getCustomSize(AppFontSize.FontsSize_10)
    },
    notAMemberText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        // fontSize: AppFontSize.FontsSize_13,
        fontSize: getCustomSize(AppFontSize.FontsSize_13),
        color: AppColor.DEEP_SPACE_SPARKLE,
        marginVertical: getCustomSize(AppFontSize.FontsSize_20)
    },
    registerNowText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        // fontSize: AppFontSize.FontsSize_13,
        fontSize: getCustomSize(AppFontSize.FontsSize_13),
        color: AppColor.AZURE,
        marginVertical: getCustomSize(AppFontSize.FontsSize_20)
    }
});

