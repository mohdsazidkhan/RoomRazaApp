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

    pressableView: {
        backgroundColor: AppColor.WHITE_COLOR,
        borderRadius: getCustomSize(10),
        paddingVertical: getCustomSize(15),
        paddingHorizontal: getCustomSize(15),
        elevation: getCustomSize(5),
        marginVertical: getCustomSize(10)
    },
    pressableText: { color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_20) }

})