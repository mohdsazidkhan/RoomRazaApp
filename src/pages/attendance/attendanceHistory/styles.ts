import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
        paddingBottom: 20,
    },
    calendarView: { backgroundColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: getCustomSize(10), elevation: 4, paddingBottom: getCustomSize(25) },
    calendarTodayView: {
        borderWidth: 1,
        borderColor: AppColor.WHITE_COLOR,
        alignSelf: 'center',
        paddingHorizontal: getCustomSize(14),
        paddingVertical: getCustomSize(8),
        borderRadius: getCustomSize(6),
        marginTop: getCustomSize(15),
        backgroundColor: AppColor.QUICK_SILVER + '50'
    },
    todayText: {
        color: AppColor.WHITE_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        fontFamily: AppFonts.FontsMedium
    },
    weekMonthView: {
        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR,
        padding: getCustomSize(10),
        borderRadius: getCustomSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(30)
        // marginHorizontal: getCustomSize(20)
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
    targetHeading: {
        backgroundColor: AppColor.WHITE_COLOR,
        marginHorizontal: getCustomSize(-15),
        padding: getCustomSize(15),
        marginTop: getCustomSize(20),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    attendanceViewTitle: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        flex: 2
    },
    attendanceSubHeading: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        flex: 1,
        textAlign: 'center'
    },
    attendanceDetailView: {
        backgroundColor: AppColor.LIGHT_GRAY + '50',
        marginHorizontal: getCustomSize(-15),
        padding: getCustomSize(15),
        marginVertical: getCustomSize(5),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomDetailView: {
        backgroundColor: AppColor.LIGHT_GRAY,
        marginHorizontal: getCustomSize(-15),
        paddingHorizontal: getCustomSize(25),
        paddingVertical: getCustomSize(15),
        marginTop: getCustomSize(50),

    },
    amtHeadingText: {
        color: AppColor.EERIE_BLACK,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    bottomDetailSubView: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: getCustomSize(10) }

})