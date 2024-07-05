import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const styles = StyleSheet.create({

    barView: {
        borderRadius: getCustomSize(10),
        flexDirection: 'row',
        backgroundColor: AppColor.TAUPE_GRAY + '70'
    },
    targetView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getCustomSize(10)
    },
    targetText: {
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.GRANITE_GRAY,
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
    },
    achieveText: {
        borderRadius: getCustomSize(10),
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        color: AppColor.WHITE_COLOR,
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingVertical: getCustomSize(40),
        backgroundColor: AppColor.OCEAN_GREEN,
        fontFamily: AppFonts.FontsMedium,
    },
    unAchieveText: {

        borderRadius: getCustomSize(10),
        width: '20%',
        fontSize: getCustomSize(AppFontSize.FontsSize_18),
        color: AppColor.WHITE_COLOR,
        textAlignVertical: 'center',
        textAlign: 'center',
        flex: 1,
        paddingVertical: getCustomSize(40),
        fontFamily: AppFonts.FontsMedium,

    }
});
export default styles;
