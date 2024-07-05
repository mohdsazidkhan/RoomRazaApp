import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    headingText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.BLACK_COLOR
    },
    weekMonthView: {
        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR,
        padding: getCustomSize(10),
        borderRadius: getCustomSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(20)
    },
    selectedTabText: {
        textAlign: 'center',
        flex: 1,
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE,
        paddingVertical: getCustomSize(10),
        borderRadius: getCustomSize(10),
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    unSelectedText: {
        textAlign: 'center',
        flex: 1,
        paddingVertical: getCustomSize(10),
        borderRadius: getCustomSize(10),
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10)
    },
    totalLeftText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(17),
        flex: 1
    },

    rightAlignText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15),
        flex: 1,
        textAlign: 'right'
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
    targetTimeNameText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(17)
    },
    targetRsText: {
        fontFamily: AppFonts.FontsMedium,
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
})