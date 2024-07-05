import { StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    setWorkingHourCard: {
        backgroundColor: AppColor.WHITE_COLOR,
        elevation: getCustomSize(5),
        borderRadius: getCustomSize(15),
        paddingBottom: getCustomSize(25)
    },
    setWorkingHourSubCard: {
        backgroundColor: AppColor.DEEP_SPACE_SPARKLE,
        elevation: getCustomSize(5),
        borderRadius: getCustomSize(15),
    },
    setWorkingHourImage: {
        height: 150,
        width: 150,
        alignSelf: 'flex-end',
        marginTop: getCustomSize(50),
        marginRight: getCustomSize(20),
        marginBottom: getCustomSize(10)
    },
    setWorkingHourView: {
        position: 'absolute',
        marginTop: getCustomSize(30),
        marginLeft: getCustomSize(20)
    },
    setWorkingHourTitle: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.WHITE_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_35)
    },
    setWorkingHourSubTitle: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.WHITE_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_20)
    },
    addNewHourText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.AZURE,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        textAlign: 'center',
        marginTop: getCustomSize(20)
    },
    dayMenuView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getCustomSize(20)
    },
    dayNameTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: getCustomSize(20)
    },
    dayNameText: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_19),
        textAlign: 'left',
        flex: 1
    },
    dayStatus: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        textAlign: 'left',
        flex: 1
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: getCustomSize(30)
    },
    leftButtonView: {
        flex: 1,
        marginRight: 10
    },
    rightButtonView: {
        flex: 1,
        marginLeft: 10
    }


})