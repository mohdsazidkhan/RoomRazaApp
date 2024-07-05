import { StyleSheet } from "react-native";
import { AppColor } from "../../theme/appColor";
import { AppFonts } from "../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
        paddingBottom: 20
    },
    checkAttendance: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        marginVertical: getCustomSize(20)
    },
    weekMonthView: {
        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR,
        padding: getCustomSize(10),
        borderRadius: getCustomSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        backgroundColor: AppColor.LIGHT_GRAY,
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
        backgroundColor: AppColor.WHITE_COLOR,
        marginHorizontal: getCustomSize(-15),
        padding: getCustomSize(15),
        marginVertical: getCustomSize(5),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    datePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    datePicker: {
        flex: 1,
        marginRight: 10,
        borderRadius: getCustomSize(10),
    },
    attendanceViewDetail: { alignSelf: 'flex-end', marginTop: getCustomSize(20), flexDirection: 'row', alignItems: 'center' },
    viewDetailText: { color: AppColor.AZURE, fontSize: getCustomSize(AppFontSize.FontsSize_16), fontFamily: AppFonts.FontsMedium },
    applyLeaveView: { flexDirection: 'row', justifyContent: 'space-between', marginTop: getCustomSize(20), alignItems: 'center' }

})