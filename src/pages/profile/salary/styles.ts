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
    headingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(15)
    },
    headingText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.BLACK_COLOR
    },
    bankDetailText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.AZURE
    },
    subHeadingText: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.BLACK_COLOR
    },
    menuPressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(10),
        elevation: getCustomSize(4),
        backgroundColor: AppColor.WHITE_COLOR,
        borderRadius: getCustomSize(10),
        padding: getCustomSize(15),
    }



})