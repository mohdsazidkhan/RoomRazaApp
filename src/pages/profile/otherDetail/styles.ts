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
    progressBarView: {
        // marginTop: getCustomSize(8),
        height: getCustomSize(8),
        borderRadius: 5,
    },
    pressableView: {
        flexDirection: 'row',
        elevation: getCustomSize(4),
        borderRadius: getCustomSize(10),
        backgroundColor: AppColor.WHITE_COLOR,
        marginVertical: getCustomSize(10),
        padding: getCustomSize(20),
        justifyContent: 'space-between'
    },
    pressableTitle: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_20), fontFamily: AppFonts.FontsBold }
})