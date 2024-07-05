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
    radioButtonView: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(5) },
    radioButtonSubView: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    radioButtonText: { fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_18) }



})