import { StyleSheet } from "react-native";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";
import { AppColor } from "../../../theme/appColor";

export const styles = StyleSheet.create({
    notAMemberText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.DEEP_SPACE_SPARKLE,
        marginVertical: getCustomSize(20)
    },
    registerNowText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_15,
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    mainView: {
        flex: 1,
        backgroundColor: AppColor.WHITE_COLOR
    },
    imgStyle: {
        width: '100%',
        flex: 1,
        height: '100%'
    },
    backButtonPress: {
        marginTop: getCustomSize(40),
        marginLeft: getCustomSize(15),
        alignSelf: 'flex-start',
        padding: getCustomSize(10)
    },
    stylistText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_30),
        color: AppColor.DEEP_SPACE_SPARKLE,
        textAlign: 'center',
        marginVertical: getCustomSize(20)
    }
});

