import { Dimensions, StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    appointmentHeadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(16)
    },
    appointmentHeadingText: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        fontFamily: AppFonts.FontsMedium,
        flex: 1
    },
    viewHistoryText: {
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        fontFamily: AppFonts.FontsMedium,
        flex: 1,
        textAlign: 'right'
    },
    appointmentView: {
        alignItems: 'center',
        marginRight: getCustomSize(15)
    },
    appointmentImageView: {
        backgroundColor: AppColor.DIM_GRAY,
        height: getCustomSize(80),
        width: getCustomSize(80),
        borderRadius: getCustomSize(80) / 2,
        marginBottom: getCustomSize(8)
    },
    appointmentStatusText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(AppFontSize.FontsSize_16)
    },
    appointmentCardView: {
        elevation: 3,
        borderRadius: 7,
        justifyContent: 'space-between',
        backgroundColor: AppColor.WHITE_COLOR,
        marginTop: getCustomSize(15)
    },
    appointmentCardMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColor.WHITE_COLOR,
        flex: 1
    },
    appointmentStatus: {
        color: AppColor.INTERNATIONAL_ORANGE,
        fontSize: getCustomSize(15),
        fontFamily: AppFonts.FontsMedium
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getCustomSize(5),
        alignSelf: 'flex-end',
        backgroundColor: AppColor.GRANITE_GRAY + '80',
        marginHorizontal: getCustomSize(10)
    },
    timelineText: {
        textAlign: 'right',
        fontFamily: AppFonts.FontsMedium,
    },
    cardDesView: {
        marginHorizontal: getCustomSize(15),
        flex: 1
    },
    videoCardView: {
        borderRadius: getCustomSize(5),
        elevation: getCustomSize(2),
        marginRight: getCustomSize(3),
        backgroundColor: AppColor.WHITE_COLOR,
        marginVertical: getCustomSize(15),
        width: Dimensions.get('window').width / 2.1
    },
    trendingView: {
        position: 'absolute', backgroundColor: AppColor.DEEP_SPACE_SPARKLE, borderRadius: getCustomSize(10), paddingHorizontal: getCustomSize(13), paddingVertical: getCustomSize(2),
        marginTop: getCustomSize(-10), marginHorizontal: getCustomSize(10)
    },
    trendingText: { textAlign: 'center', fontSize: getCustomSize(AppFontSize.FontsSize_15), fontFamily: AppFonts.FontsRegular, color: AppColor.WHITE_COLOR },
    videoTitle: { textAlign: 'center', fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR },
    videoDescription: { textAlign: 'center', fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK },
    starView: { flexDirection: 'row', justifyContent: 'space-between', marginTop: getCustomSize(10) },
    starText: { textAlign: 'center', fontSize: getCustomSize(AppFontSize.FontsSize_15), fontFamily: AppFonts.FontsRegular, color: AppColor.EERIE_BLACK }
})