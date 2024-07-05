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
    dateView: {
        flexDirection: 'row',
        marginVertical: getCustomSize(20)
    },
    dateLeftSubView: {
        flex: 1,
        marginRight: getCustomSize(15)
    },
    dateRightSubView: {
        flex: 1,
        marginLeft: getCustomSize(15)
    },
    dateTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.BLACK_COLOR,
        marginBottom: getCustomSize(10)
    },
    setWorkingHourText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.AZURE,
        marginBottom: getCustomSize(10)
    }


})