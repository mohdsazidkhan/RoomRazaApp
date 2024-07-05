import { StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        padding: getCustomSize(15)
    },
    paymentMethodText: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center'
    },
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subMenuView: { flex: 1, alignItems: 'center', flexDirection: 'row' },
    menuText: {
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        fontFamily: AppFonts.FontsBold,
        color: AppColor.EERIE_BLACK,
        marginLeft: getCustomSize(15),
        flex: 1
    },
    modalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        marginHorizontal: getCustomSize(30),
        borderRadius: getCustomSize(20),
    },
    upiTextName:{ fontFamily: AppFonts.FontsRegular, fontSize: getCustomSize(AppFontSize.FontsSize_15), textAlign: 'center' }

})