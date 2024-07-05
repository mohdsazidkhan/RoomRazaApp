import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
import { AppFonts } from '../../../theme/appFont';

const styles = StyleSheet.create({

    safeAreaViewStyle: {
        backgroundColor: AppColor.WHITE_COLOR,
    },
    headerText: {
        color: AppColor.BLACK_OLIVE,
        textAlignVertical: 'center',
        fontWeight: '500',
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        fontFamily: AppFonts.FontsBold,
        // marginRight:20
        flex: 1
    },
    headerView: {
        height: getCustomSize(60),
        paddingHorizontal: getCustomSize(15),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    gradientHeaderWithBackView: {
        // height: 60,
        // paddingHorizontal: 15,
        paddingBottom: getCustomSize(15),
        flexDirection: 'row',
    },
    headerWithBackView: {
        height: getCustomSize(60),
        flexDirection: 'row',
    },
    headerPressableView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: getCustomSize(10),
        paddingHorizontal: getCustomSize(20)
    },
    linearGradientView: {
        flex: 1,
        alignContent: 'center',
        paddingTop: 13,
        flexDirection: 'row'
    },
    gradientHeaderPressable: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        paddingLeft: 15
    }

});
export default styles;
