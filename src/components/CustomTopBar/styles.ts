import { StyleSheet } from "react-native";
import { AppColor } from "../../theme/appColor";
import { AppFontSize, getCustomSize } from "../../theme/appFontSize";
import { AppFonts } from "../../theme/appFont";

const styles = StyleSheet.create({

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
        marginRight: getCustomSize(15),
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    unSelectedText: {
        textAlign: 'center',
        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR,
        flex: 1,
        paddingVertical: getCustomSize(10),
        borderRadius: getCustomSize(10),
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        marginLeft: getCustomSize(15),
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
})
export default styles