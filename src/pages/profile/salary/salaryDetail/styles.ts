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
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15)
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(40)
    },
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10)
    },
    leftAlignText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15),
        flex: 1
    },
    rightAlignText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15),
        flex: 1,
        textAlign: 'right'
    },
    centerAlignText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15),
        flex: 1,
        textAlign: 'center'
    },
    amtHeadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10),
        backgroundColor: AppColor.LIGHT_GRAY,
        marginHorizontal: getCustomSize(-15),
        padding: getCustomSize(15)
    },
    totalLeftText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(17),
        flex: 1
    },
    totalCenterText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(17),
        flex: 1,
        textAlign: 'center'
    }




})