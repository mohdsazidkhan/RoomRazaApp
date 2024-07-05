import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
import { AppFonts } from '../../../theme/appFont';

const Styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.WHITE_COLOR,
        margin: getCustomSize(7),
        padding: getCustomSize(10),
        elevation: 3,
        borderRadius: 3
    },
    dropdown: {
        height: getCustomSize(60),
        borderColor: AppColor.DEEP_SPACE_SPARKLE,

        paddingHorizontal: 8,
        marginTop: getCustomSize(10),
        borderWidth: 0.5,
        borderRadius: getCustomSize(10)
    },
    icon: {
        marginRight: 5,
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
    selectDateView: {
        marginVertical: getCustomSize(10),
        height: getCustomSize(50),
        paddingHorizontal: getCustomSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectDateText: {
        color: AppColor.BLACK_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
    },
    leaveSummaryView: {
        marginVertical: getCustomSize(10),
        height: getCustomSize(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    leaveSummaryText: {
        color: AppColor.WHITE_COLOR,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
    }

})

export { Styles }