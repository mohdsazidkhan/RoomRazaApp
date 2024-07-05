import { StyleSheet } from "react-native";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";
import { AppColor } from "../../../../theme/appColor";

export const styles = StyleSheet.create({
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
        fontSize: getCustomSize(AppFontSize.FontsSize_14),
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    otpTextInput: {
        borderBottomColor: AppColor.DEEP_SPACE_SPARKLE,
        borderBottomWidth: 1,
        marginHorizontal: getCustomSize(6),
        textAlign: 'center',
        width: getCustomSize(50),
        fontSize: getCustomSize(30),
        color: AppColor.BLACK_COLOR
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
        color: AppColor.GRANITE_GRAY
    },
    resendView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '7%'
    },
    inputBox: {
        width: 45,
        height: 45,
        borderBottomWidth: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        // borderRadius: 5,
        paddingHorizontal: 5,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        alignSelf: 'center',
        marginTop: '20%'
    },
    Rec: {
        color: 'black'
    }
});

