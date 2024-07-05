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
    }
});

