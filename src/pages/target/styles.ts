import { StyleSheet } from "react-native";
import { AppColor } from "../../theme/appColor";
import { AppFonts } from "../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../theme/appFontSize";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    amtView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(20)
    },
    amtViewText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(20)
    },
    targetHeading: {
        backgroundColor: AppColor.LIGHT_GRAY,
        marginHorizontal: getCustomSize(-15),
        padding: getCustomSize(15)
    },
    targetTimeHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10),
        paddingHorizontal: getCustomSize(10),
    },
    targetText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(17)
    },
    targetDetailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10),
        marginVertical: getCustomSize(10),
        elevation: 5,
        backgroundColor: AppColor.WHITE_COLOR,
        paddingHorizontal: getCustomSize(10),
        paddingVertical: getCustomSize(15),
        borderRadius: 5
    },
    targetTimeNameText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(17)
    },
    targetRsText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.APPLE_COLOR,
        fontSize: getCustomSize(17)
    }
})