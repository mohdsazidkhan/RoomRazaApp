import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1,
        paddingBottom: getCustomSize(20)
    },
    radioButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: getCustomSize(10)
    },
    radioButtonText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.EERIE_BLACK
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),

    },
    titleText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        marginTop: getCustomSize(25),
        marginBottom: getCustomSize(10)
    },
    targetStatusText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    loader: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        backgroundColor: 'black',
        zIndex: 1,
        opacity: 0.6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }


})