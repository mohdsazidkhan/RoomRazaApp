import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        padding: getCustomSize(15)
    },
    menuView: {
        paddingHorizontal: getCustomSize(15),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: getCustomSize(10),
        elevation: 2,
        marginBottom: getCustomSize(15),
        justifyContent: 'space-between',
        backgroundColor: AppColor.WHITE_COLOR,
        paddingVertical: getCustomSize(15)
    },
    iconTextView: { flexDirection: 'row', alignItems: 'center' },
    menuText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        marginLeft: getCustomSize(20),
        color: AppColor.BLACK_COLOR
    }


})