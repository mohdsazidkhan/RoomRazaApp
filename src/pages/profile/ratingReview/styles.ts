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
    ratingView: {
        flexDirection: 'row',
        elevation: getCustomSize(4),
        borderRadius: getCustomSize(10),
        backgroundColor: AppColor.WHITE_COLOR,
        marginVertical: getCustomSize(10),
        paddingVertical: getCustomSize(10)
    },
    totalReviewView: {
        alignItems: 'center',
        flex: 1,
        marginVertical: getCustomSize(10)
    },
    reviewNumberText: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_35),
        fontFamily: AppFonts.FontsBold
    },
    numberOfReview: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.AZURE,
        marginVertical: getCustomSize(5),
        textDecorationLine: 'underline'
    },
    ratingProgressView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getCustomSize(3)
    },
    ratingTypeText: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_14),
        fontFamily: AppFonts.FontsMedium,
        marginRight: getCustomSize(5)
    },
    progressView: {
        flex: 1,
        marginRight: getCustomSize(15)
    },
    sortByPressable: {
        flexDirection: 'row',
        elevation: getCustomSize(4),
        borderRadius: getCustomSize(10),
        backgroundColor: AppColor.WHITE_COLOR,
        marginVertical: getCustomSize(10),
        padding: getCustomSize(20),
        justifyContent: 'space-between'
    },
    sortByText: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_20), fontFamily: AppFonts.FontsBold },
    reviewTitle: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_20), fontFamily: AppFonts.FontsBold, marginVertical: getCustomSize(20) },
    reviewMenuView: { flexDirection: 'row', alignItems: 'center' },
    reviewImageNameView: { flexDirection: 'row', flex: 1 },
    reviewProfileImage: { width: getCustomSize(80), height: getCustomSize(80), borderRadius: getCustomSize(80 / 2) },
    reviewNameView: { marginHorizontal: getCustomSize(15), justifyContent: 'center' },
    nameText: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_17), fontFamily: AppFonts.FontsBold },
    monthText: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_13), fontFamily: AppFonts.FontsRegular },
    expertiseTitle: { color: AppColor.BLACK_COLOR, fontSize: getCustomSize(AppFontSize.FontsSize_13), fontFamily: AppFonts.FontsMedium, marginRight: getCustomSize(10) },
    expertiseRatingView: { borderColor: AppColor.BORDER_COLOR, borderWidth: 1, flexDirection: 'row', borderRadius: getCustomSize(5), paddingHorizontal: getCustomSize(4), paddingVertical: getCustomSize(5), marginRight: getCustomSize(5) },
    expertiseRatingText: { color: AppColor.DEEP_SPACE_SPARKLE, fontSize: getCustomSize(AppFontSize.FontsSize_15), fontFamily: AppFonts.FontsRegular, marginRight: getCustomSize(10) },
    reviewDescription: { color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_15), fontFamily: AppFonts.FontsRegular, marginVertical: getCustomSize(10) }
})