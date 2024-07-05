import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    usernameText: { fontFamily: AppFonts.FontsBold, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: getCustomSize(AppFontSize.FontsSize_20), textAlign: 'center', marginTop: getCustomSize(10) },
    dateText: { fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_18), textAlign: 'center', marginTop: getCustomSize(10) },
    container: {
        marginHorizontal: 15,
        flex: 1,
        // paddingBottom: 20
    },
    suggestionView: { flex: 1, alignItems: 'center' },
    amtView: {
        flexDirection: 'row',
        marginTop: getCustomSize(25),
        justifyContent: 'space-between',
        backgroundColor: AppColor.LIGHT_GRAY,
        marginHorizontal: getCustomSize(-15),
        paddingHorizontal: getCustomSize(25),
        paddingVertical: getCustomSize(15)
    },
    amtHeadingText: {
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    amtTextView: {
        flexDirection: 'row',
        marginTop: getCustomSize(10),
        justifyContent: 'space-between',

        marginHorizontal: getCustomSize(-15),
        paddingHorizontal: getCustomSize(25),

    },
    amtText: {
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    targetDropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: AppColor.LIGHT_GRAY + '50',
        borderWidth: 1,
        borderRadius: getCustomSize(10),
        paddingHorizontal: getCustomSize(20),
        paddingVertical: getCustomSize(20),
        marginTop: getCustomSize(20)
    },
    targetDropdownText: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_20)
    },
    suggestionText: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_23),
        marginTop: getCustomSize(20)
    },
    suggestionDetailText: { color: AppColor.GRANITE_GRAY, fontFamily: AppFonts.FontsRegular, fontSize: getCustomSize(AppFontSize.FontsSize_18), marginTop: getCustomSize(15) },

    suggestMainText: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_20)
    },
    bottomDetailView: {
        backgroundColor: AppColor.LIGHT_GRAY,
        marginHorizontal: getCustomSize(-15),
        paddingHorizontal: getCustomSize(25),
        paddingVertical: getCustomSize(15),
        marginTop: getCustomSize(50)

    },
    bottomDetailSubView: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: getCustomSize(10) }

})