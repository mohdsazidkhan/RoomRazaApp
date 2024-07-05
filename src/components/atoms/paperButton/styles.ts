import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const Styles = StyleSheet.create({
    container: {
        borderRadius: getCustomSize(10),
        justifyContent: 'center',
    },
    label: {
        color: 'white',
        justifyContent: 'center',
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        paddingVertical: getCustomSize(4),
        fontFamily: AppFonts.FontsMedium,

    }
});
export default Styles;
