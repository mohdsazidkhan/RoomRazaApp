import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({

    profileImageCard: {
        elevation: 5,
        padding: getCustomSize(10),
        backgroundColor: AppColor.WHITE_COLOR,
        borderRadius: 15
    },
    profileInfoMainView: {
        flexDirection: 'row',
        marginBottom: getCustomSize(15)
    },
    profileImageView: {
        height: getCustomSize(80),
        width: getCustomSize(80),
        borderRadius: getCustomSize(80) / 2
    },
    profilePersonalInfoView: {
        marginHorizontal: getCustomSize(20),
        justifyContent: 'center'
    },
    profilePersonalView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileName: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_19),
        marginRight: getCustomSize(10)
    },
    viewAppointmentView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: getCustomSize(13)
    },
    viewAppointmentText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_16)
    },

    subTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    addClientPressable: {
        borderStyle: 'dashed',
        borderRadius: 3,
        borderColor: AppColor.PHILIPPINE_SILVER,
        borderWidth: 1,
        alignSelf: 'center',
        marginVertical: getCustomSize(20)
    },
    addClintText: {
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        fontFamily: AppFonts.FontsMedium,
        paddingHorizontal: getCustomSize(15),
        paddingVertical: getCustomSize(5)
    },
    serviceStylistView: {
        borderRadius: getCustomSize(15),
        backgroundColor: AppColor.WHITE_COLOR,
        height: getCustomSize(50),
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#C0C8C4',
        borderWidth: 1,
        paddingHorizontal: getCustomSize(15),
        justifyContent: 'space-between',
        marginTop: getCustomSize(20)
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
    appointmentView: {
        alignItems: 'center',
        marginHorizontal: getCustomSize(10),
    },
    appointmentImageView: {
        backgroundColor: AppColor.DIM_GRAY,
        height: getCustomSize(80),
        width: getCustomSize(80),
        borderRadius: getCustomSize(80) / 2,
        marginBottom: 8
    },
    appointmentStatusText: {
        width: getCustomSize(80),
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        textAlign: 'center'
    },
    appointmentStatusTextLight: {
        width: getCustomSize(8 - 0),
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: getCustomSize(AppFontSize.FontsSize_12),
        textAlign: 'center',
        marginTop: getCustomSize(5)
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        marginHorizontal: getCustomSize(30),
        borderRadius: getCustomSize(20),
    },
    tagView: {
        flexDirection: 'row',
        marginVertical: getCustomSize(15)
    },
    tagText: {
        backgroundColor: AppColor.PERSIAN_GREEN,
        paddingHorizontal: getCustomSize(14),
        paddingVertical: 5,
        borderRadius: 20,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsMedium,
        marginRight: 15
    },
    suggestionText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        marginVertical: getCustomSize(25)
    },
    selectedBgColor: {
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE,
        borderWidth: 1,
        paddingHorizontal: getCustomSize(20),
        paddingVertical: getCustomSize(10),
        borderRadius: 7,
        marginRight: getCustomSize(10)
    },
    selectedText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsMedium
    },
    unSelectBgColor: {
        borderColor: AppColor.DEEP_SPACE_SPARKLE,
        borderWidth: 1,
        paddingHorizontal: getCustomSize(20),
        paddingVertical: getCustomSize(10),
        borderRadius: 7,
        marginRight: getCustomSize(10)
    },
    unselectedText: {
        color: AppColor.DEEP_SPACE_SPARKLE,
        fontFamily: AppFonts.FontsMedium
    },
    modalView: {
        margin: getCustomSize(15),
    },
    addGuestTitle: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        marginHorizontal: getCustomSize(50),
        marginBottom: getCustomSize(10)
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10)
    }
})