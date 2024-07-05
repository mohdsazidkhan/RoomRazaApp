import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { getCustomSize } from '../../../theme/appFontSize';
const Styles = StyleSheet.create({
    statusBarContainer: {
        marginTop: getCustomSize(20),
        borderRadius: 10,
    },
    safeAreaViewStyle: {
        backgroundColor: AppColor.WHITE_COLOR,
    },
    buttonText: {
        color: AppColor.AZURE,
        alignSelf: 'center',
        textAlignVertical: 'center',
        // marginTop: 12,
        fontFamily: AppFonts.FontsMedium,
        fontWeight: '400',
        fontSize: getCustomSize(14)
    },
    smallButtonContainer: {
        width: '40%',
        borderRadius: 4,
        alignSelf: 'center'
    },
});
export default Styles;
