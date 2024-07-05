import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        paddingBottom: getCustomSize(30)
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerSwitchText: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        color: AppColor.EERIE_BLACK
    },
    switchView: {
        alignContent: 'center',
        marginTop: 10,
        width: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    switchValueText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        textAlign: 'center'
    },
    genderTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        // textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    radioButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: getCustomSize(10)
    },
    radioButtonText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.EERIE_BLACK
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),

    },
    addMoreInfoText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.AZURE,
        marginVertical: getCustomSize(20)
    },
    countryDropdownView: {
        flex: 1,
        marginRight: getCustomSize(10),
        marginTop: 5
    },
    dropdownView: {
        flex: 1,
        marginLeft: getCustomSize(10),
        marginRight: 1,
        // marginTop: 5

    },
    stateDropdownView: {
        flex: 1,
        marginRight: getCustomSize(10)
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