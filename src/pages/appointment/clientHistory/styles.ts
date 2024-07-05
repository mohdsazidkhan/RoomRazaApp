import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    filterSortView: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 20
    },
    filterSortSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:15
    },
    filterSortText: {
        color: AppColor.BLACK_COLOR,
        fontFamily: AppFonts.FontsRegular,
        fontSize: AppFontSize.FontsSize_17,
        marginLeft:5
    },
})