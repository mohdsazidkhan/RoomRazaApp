import { StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },

    pressableView: {
        backgroundColor: AppColor.WHITE_COLOR,
        borderRadius: getCustomSize(10),
        paddingVertical: getCustomSize(15),
        paddingHorizontal: getCustomSize(15),
        elevation: getCustomSize(5),
        marginVertical: getCustomSize(10)
    },
    pressableText: {
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_20)
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
    receivedToolkitMenu: {
        elevation: getCustomSize(5),
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        borderRadius: getCustomSize(10),
        marginBottom: getCustomSize(10)
    },
    allotedTime: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16)
    },
    receivedToolkitSubMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toolkitText: { color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_20) },
    toolkitMenuItemText: { fontFamily: AppFonts.FontsMedium, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: getCustomSize(AppFontSize.FontsSize_16), marginVertical: getCustomSize(10) },
    toolkitMenuCountText: { color: AppColor.BLACK_COLOR, fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_16) },
    toolkitType: { color: AppColor.DEEP_SPACE_SPARKLE, fontFamily: AppFonts.FontsRegular, fontSize: getCustomSize(AppFontSize.FontsSize_16) }

})