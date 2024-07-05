import { StyleSheet } from "react-native";
import { AppColor } from "../../theme/appColor";
import { AppFonts } from "../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../theme/appFontSize";



export const styles = StyleSheet.create({

    filterSortView: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: getCustomSize(20)
    },
    filterSortSubView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterSortText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
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
    appointmentClientName: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(18),
        marginTop: getCustomSize(5),
        fontWeight: '600',
        fontFamily: AppFonts.FontsMedium
    },
    appointmentServiceName: {
        color: AppColor.DEEP_SPACE_SPARKLE,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentServicePlace: {
        color: AppColor.QUICK_SILVER,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentAmtText: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentAmtRsText: {
        color: AppColor.AZURE,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentStatusCurrent: {
        color: AppColor.PERSIAN_GREEN,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentTime: {
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular
    },
    appointmentDuration: {
        color: AppColor.QUICK_SILVER,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular,
        textAlign: 'right'
    },
    appointmentCallBg: {
        width: getCustomSize(45),
        height: getCustomSize(45),
        borderRadius: getCustomSize(25),
        backgroundColor: AppColor.ATOMIC_TANGERINE,
        marginLeft: getCustomSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },

    chevronRight: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: getCustomSize(15)
    },
    appointmentCustomerTypeView: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    appointmentCustomerType: {
        color: AppColor.QUICK_SILVER,
        fontSize: getCustomSize(15),
        marginTop: getCustomSize(3),
        fontFamily: AppFonts.FontsRegular,
        textAlign: 'right',
        marginLeft: getCustomSize(7)
    },
    calendarTodayView: {
        borderWidth: 1,
        borderColor: AppColor.WHITE_COLOR,
        alignSelf: 'center',
        paddingHorizontal: getCustomSize(14),
        paddingVertical: getCustomSize(8),
        borderRadius: getCustomSize(6),
        backgroundColor: AppColor.QUICK_SILVER + '50'
    },
    todayText: {
        color: AppColor.WHITE_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        fontFamily: AppFonts.FontsMedium
    },

    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),

    },

})