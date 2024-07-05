import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    menuView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: AppColor.WHITE_COLOR,
        elevation: 7,
        marginHorizontal: getCustomSize(15),
        marginVertical: getCustomSize(11),
        paddingVertical: getCustomSize(16),
        paddingHorizontal: getCustomSize(20),
        borderRadius: getCustomSize(10),
        alignItems: 'center'
    },
    imgTextView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageView: {
        width: 45,
        height: 45
    },
    textView: {
        marginHorizontal: getCustomSize(20),
        fontFamily: AppFonts.FontsBold,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_18)
    }

})