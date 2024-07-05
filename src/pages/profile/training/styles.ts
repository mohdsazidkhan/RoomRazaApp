import { Dimensions, StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    targetVideoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(30),
        marginBottom: getCustomSize(15)
    },
    targetVideoText: {
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        fontFamily: AppFonts.FontsMedium
    },
    viewAllText: {
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsMedium
    },
    horizontalView: {
        flexDirection: 'row',
        elevation: getCustomSize(4),
        backgroundColor: AppColor.WHITE_COLOR,
        width: Dimensions.get('window').width / 1.2,
        marginVertical: 10,
        marginRight: getCustomSize(20),
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
    exploreVideoView: {
        borderRadius: getCustomSize(5),
        elevation: getCustomSize(2),
        marginHorizontal: getCustomSize(5),
        backgroundColor: AppColor.WHITE_COLOR,
        marginVertical: getCustomSize(15),
        width: 300,
    },
    exploreViewImageBG: {
        width: 300,
        height: 200
    },
    exploreVideoSubHeadingView: {
        position: 'absolute',
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE,
        borderRadius: getCustomSize(10),
        paddingHorizontal: getCustomSize(13),
        paddingVertical: getCustomSize(2),
        marginTop: getCustomSize(-10),
        marginHorizontal: getCustomSize(10)
    },
    exploreVideoSubHeadingText: {
        textAlign: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.WHITE_COLOR
    },
    timeViewOverImage: {
        flexDirection: 'row',
        marginVertical: getCustomSize(5),
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: AppColor.GRANITE_GRAY + '80',
        marginHorizontal: getCustomSize(10)
    },
    exploreVideoHeadingText: {
        textAlign: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR
    },
    exploreVideoDesText: {
        textAlign: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.EERIE_BLACK
    },
    exploreVideoRatingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10)
    },
    exploreVideoRatingText: {
        textAlign: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.EERIE_BLACK
    },
    coverView: {
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE,
        marginHorizontal: getCustomSize(-15),
        marginVertical: getCustomSize(15),
        padding: getCustomSize(15)
    },
    coverViewTitle: {
        fontSize: getCustomSize(AppFontSize.FontsSize_25),
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.WHITE_COLOR
    },
    coverButtonView: {
        backgroundColor: AppColor.WHITE_COLOR,
        alignSelf: 'flex-start',
        marginVertical: getCustomSize(10),
        borderRadius: getCustomSize(10),
        paddingVertical: getCustomSize(10),
        paddingHorizontal: getCustomSize(20)
    },
    coverButtonText: {
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsRegular,
        color: AppColor.DEEP_SPACE_SPARKLE
    },
    careerViewTitle:{ textAlign: 'left', fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR },
    enrollView:{
        backgroundColor: AppColor.AZURE,
        borderRadius: getCustomSize(5),
        paddingHorizontal: getCustomSize(13),
        paddingVertical: getCustomSize(2),
        marginBottom: getCustomSize(10),

        marginHorizontal: getCustomSize(10),
        alignSelf: 'flex-start'
    },
    enrollText:{ textAlign: 'center', fontSize: getCustomSize(AppFontSize.FontsSize_15), fontFamily: AppFonts.FontsRegular, color: AppColor.WHITE_COLOR }


})