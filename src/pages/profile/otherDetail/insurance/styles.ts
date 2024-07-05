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
    progressBarView: {
        // marginTop: getCustomSize(8),
        height: getCustomSize(8),
        borderRadius: 5,
    },
    titleText: {
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        marginTop: getCustomSize(10),
        marginBottom: getCustomSize(10),
        marginHorizontal: getCustomSize(35),
        textAlign: 'center'
    }
})