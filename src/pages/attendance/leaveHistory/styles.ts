import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
        paddingBottom: 20
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

})