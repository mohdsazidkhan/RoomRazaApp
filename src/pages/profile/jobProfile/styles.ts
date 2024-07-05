import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1,
        paddingBottom: getCustomSize(20)
    },
    subTitle: {
        color: AppColor.BLACK_COLOR,
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_17)
    },
    categoryHeading: {
        fontFamily: AppFonts.FontsBold,
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        marginTop: getCustomSize(25),
        marginBottom: getCustomSize(10)
    },
    categoryMenuView: {
        marginHorizontal: getCustomSize(4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedCategory: {
        marginHorizontal: getCustomSize(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        padding: 3,
        borderRadius: 5, borderWidth: 1
    },
    categoryImageView: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    categoryTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: AppFontSize.FontsSize_12,
        color: AppColor.DEEP_SPACE_SPARKLE,
        // textAlign: 'center',
        marginTop: 10,
        borderWidth: 1,
        padding: 4,
        borderRadius: 5,
        borderColor: '#E4E4E4',
    },
    dropdownView: {
        marginTop: getCustomSize(20)
    },
    placeholderStyle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.DEEP_SPACE_SPARKLE
    },
    selectedTextStyle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.BLACK_COLOR
    },

    dropdown: {
        height: getCustomSize(60),
        borderColor: AppColor.DEEP_SPACE_SPARKLE,

        paddingHorizontal: 8,
        marginTop: getCustomSize(10),
        borderWidth: 0.5,
        borderRadius: getCustomSize(10)
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),

    },
    modalView: {
        margin: getCustomSize(15)
    },
    modalDescriptionText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.EERIE_BLACK,
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        marginHorizontal: getCustomSize(50),
        marginVertical: getCustomSize(20)
    },
    modalButtonView: {
        flexDirection: 'row',
        marginTop: getCustomSize(10)
    },
    modalButtonSubView: {
        marginLeft: getCustomSize(10),
        flex: 2
    }

})