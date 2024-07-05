import { StyleSheet } from "react-native";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";
import { AppColor } from "../../../theme/appColor";

export const styles = StyleSheet.create({
    screenContainer: {
        margin: getCustomSize(15),
        flex: 1,
        marginBottom: getCustomSize(50)
    },

    notAMemberText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_14),
        color: AppColor.DEEP_SPACE_SPARKLE,
        marginVertical: getCustomSize(20)
    },
    registerNowText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_14,
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    otpTextInput: {
        borderBottomColor: AppColor.DEEP_SPACE_SPARKLE,
        borderBottomWidth: 1,
        marginHorizontal: getCustomSize(6),
        textAlign: 'center',
        width: getCustomSize(50),
        fontSize: getCustomSize(30)
    },
    otpView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: getCustomSize(100),
        marginBottom: getCustomSize(30)
    },
    otpSentText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        color:AppColor.GRANITE_GRAY
    },
    resendView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),

    },

    min8Text: { marginTop: getCustomSize(10), fontFamily: AppFonts.FontsRegular }

});

