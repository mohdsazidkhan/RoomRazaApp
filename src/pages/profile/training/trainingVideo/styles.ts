import { StyleSheet, Dimensions } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    horizontalView: {
        flexDirection: 'row',
        elevation: getCustomSize(4),
        backgroundColor: AppColor.WHITE_COLOR,
        marginTop: getCustomSize(15),
        marginBottom:getCustomSize(4),
        borderRadius: getCustomSize(5),
    },
    imageView: {
        // height: 120,
        width: 100,
        borderRadius: getCustomSize(5)
    },
    cardDesView: {
        marginHorizontal: getCustomSize(15),
        flex: 1
    },
    timelineText: {
        textAlign: 'right',
        fontFamily: AppFonts.FontsMedium,
    },
    videoTitle: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getCustomSize(5)
    },
    descriptionText: {
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    viewAllText: {
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsMedium
    },


})