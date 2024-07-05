import { StyleSheet } from "react-native";
import { AppColor } from "../../theme/appColor";
import { AppFonts } from "../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    coverImage: {
        height: getCustomSize(380),
        justifyContent: 'space-between'
    },
    editView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: getCustomSize(20),
    },
    editPressable: {
        backgroundColor: AppColor.BLACK_GRADIENT_COLOR,
        borderRadius: getCustomSize(100),
        padding: getCustomSize(8)
    },
    sharePressable: {
        backgroundColor: AppColor.BLACK_GRADIENT_COLOR,
        borderRadius: getCustomSize(10),
        paddingHorizontal: getCustomSize(20),
        flexDirection: 'row',
        alignItems: 'center',
        height: getCustomSize(40)
    },
    shareText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        marginRight: getCustomSize(10)
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: getCustomSize(20),
        marginBottom: getCustomSize(120)
    },
    nameText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_25),
        marginRight: getCustomSize(10),

    },
    dateText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        marginRight: getCustomSize(10)
    },
    starViewPress: {
        backgroundColor: AppColor.BLACK_GRADIENT_COLOR,
        borderRadius: getCustomSize(10),
        paddingHorizontal: getCustomSize(20),
        flexDirection: 'row',
        alignItems: 'center',
        height: getCustomSize(40)
    },
    starText: {
        color: AppColor.WHITE_COLOR,
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        marginLeft: getCustomSize(10)
    },
    profileStatusView: {
        backgroundColor: AppColor.WHITE_COLOR,
        borderRadius: getCustomSize(30 / 2),
        marginTop: -100,
        marginHorizontal: getCustomSize(30),
        paddingVertical: getCustomSize(20),
        paddingHorizontal: getCustomSize(10),
        elevation: 4,
    },
    profileCompletionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getCustomSize(10)
    },
    profileCompText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.EERIE_BLACK
    },
    progressBarView: {
        marginTop: getCustomSize(8),
        height: getCustomSize(8),
        borderRadius: 5
    },
    profileMainContainer: {
        paddingHorizontal: getCustomSize(20),
        paddingVertical: getCustomSize(100),
        borderTopLeftRadius: getCustomSize(30),
        borderTopRightRadius: getCustomSize(30),
        marginTop: -50,
        backgroundColor: AppColor.WHITE_COLOR
    },
    profileMenuPressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
     
    },
    profileMenuSubView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileMenuImageView: {
        // padding: getCustomSize(10),
        backgroundColor: AppColor.WHITE_COLOR,
        width: getCustomSize(85),
        height: getCustomSize(85),
        // borderRadius: getCustomSize(85 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 5
    },
    profileMenuImage: {
        width: getCustomSize(100),
        height: getCustomSize(100),
        borderRadius: getCustomSize(70 / 2),
    },
    profileMenuTextView: {
        marginHorizontal: getCustomSize(20), flex: 1,
    },
    profileMenuTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        color: AppColor.EERIE_BLACK
    },
    profileTitleDescription: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.TAUPE_GRAY
    }


})