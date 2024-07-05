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



    titleText: {
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(15),
        textAlign: 'center'
    },
    subTitleText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: AppFontSize.FontsSize_12,
        marginHorizontal: getCustomSize(15),
        marginVertical: 10,
        textAlign: 'center'
    },
    serviceAndCountView: { flexDirection: 'row', alignItems: 'center' },
    categoryText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: AppFontSize.FontsSize_12,
        marginLeft: getCustomSize(15),
        // marginVertical: 10,
        textAlign: 'center'
    },
    categoryValueText: {
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        marginRight: getCustomSize(15),
    },
    menuPressableView: {
        marginHorizontal: getCustomSize(15),
        elevation: 4,
        backgroundColor: AppColor.WHITE_COLOR,
        paddingHorizontal: getCustomSize(15),
        paddingVertical: getCustomSize(10),
        borderRadius: getCustomSize(10),
        marginTop: getCustomSize(10)
    }
})