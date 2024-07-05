import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../../theme/appColor'
import { AppFonts } from '../../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({




    calendarTodayView: {
        borderWidth: 1,
        borderColor: AppColor.WHITE_COLOR,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: AppColor.QUICK_SILVER + '50'
    },
    todayText: {
        color: AppColor.WHITE_COLOR,
        fontSize: AppFontSize.FontsSize_16,
        fontFamily: AppFonts.FontsMedium
    },
    appointmentView: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    appointmentImageView: {
        backgroundColor: AppColor.DIM_GRAY,
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginBottom: 8
    },
    appointmentStatusText: {
        width: 80,
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: AppFontSize.FontsSize_16,
        textAlign: 'center'
    },
    appointmentStatusTextLight: {
        width: 80,
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: AppFontSize.FontsSize_12,
        textAlign: 'center',
        marginTop: 5
    },
    notAMemberText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_14),
        color: AppColor.DEEP_SPACE_SPARKLE,
        marginVertical: getCustomSize(20)
    },
    registerNowText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_14),
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    otpTextInput: {
        borderBottomColor: AppColor.DEEP_SPACE_SPARKLE,
        borderBottomWidth: 1,
        marginHorizontal: getCustomSize(6),
        textAlign: 'center',
        width: getCustomSize(50),
        fontSize: getCustomSize(30),
        color:AppColor.BLACK_COLOR
    },
    otpView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: getCustomSize(100),
        marginBottom: getCustomSize(30)
    },
    otpSentText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        color:AppColor.GRANITE_GRAY
    },
    resendView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    serviceName: { fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, fontSize: AppFontSize.FontsSize_19, marginRight: 10,textAlign:'center' },
    serviceInfoMainView: { flexDirection: 'row', marginBottom: 15 },
    serviceImageView: { height: 80, width: 80, borderRadius: 80 / 2 },
    serviceInfoView: { marginHorizontal: 20, justifyContent: 'center' },
    serviceView: { flexDirection: 'row', alignItems: 'center' },
})