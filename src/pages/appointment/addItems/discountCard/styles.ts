import { StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({

    container: {
        padding: getCustomSize(15)
    },
    cardView: {
        borderRadius: getCustomSize(20),
        marginTop: getCustomSize(15),
        marginBottom: getCustomSize(5),
        backgroundColor: AppColor.WHITE_COLOR,
        elevation: getCustomSize(4)
    },
    subCardView: {
        borderRadius: getCustomSize(20)
    },
    linearGradientView: {
        borderRadius: getCustomSize(20),
        paddingLeft: getCustomSize(30),
        paddingVertical: getCustomSize(30)
    },
    cardDetailView: {
        flexDirection: 'row',
        flex: 1
    },
    planName: {
        color: AppColor.WHITE_COLOR,
        alignSelf: 'flex-start',
        fontSize: getCustomSize(40),
        fontFamily: AppFonts.FontsBold
    },
    memberTextButton: {
        backgroundColor: AppColor.WHITE_COLOR,
        alignSelf: 'flex-start',
        paddingHorizontal: getCustomSize(20),
        paddingVertical: getCustomSize(7),
        borderRadius: getCustomSize(10),
        fontFamily: AppFonts.FontsMedium,
        color: '#FB3A40',
        marginVertical: getCustomSize(14)
    },
    detailText: {
        color: AppColor.WHITE_COLOR,
        alignSelf: 'flex-start',
        fontFamily: AppFonts.FontsMedium,
        marginRight: 20
    },
    dateView: {
        paddingRight: getCustomSize(15),
        justifyContent: 'space-between'
    },
    expiryDateText: {
        color: AppColor.WHITE_COLOR,
        alignSelf: 'flex-end',
        fontSize: getCustomSize(AppFontSize.FontsSize_17),
        fontFamily: AppFonts.FontsMedium
    },
    priceText: {
        color: AppColor.WHITE_COLOR,
        alignSelf: 'flex-end',
        fontSize: getCustomSize(AppFontSize.FontsSize_30),
        fontFamily: AppFonts.FontsBold
    }


})