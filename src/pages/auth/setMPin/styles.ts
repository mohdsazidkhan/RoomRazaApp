import { StyleSheet } from 'react-native';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';

export const styles = StyleSheet.create({
    mPinDesText: {
        textAlign: 'center',
        fontFamily: AppFonts.FontsMedium,
        color:AppColor.GRANITE_GRAY
    },
    otpTextInput: {
        borderBottomColor: AppColor.DEEP_SPACE_SPARKLE,
        borderBottomWidth: 1,
        marginHorizontal: getCustomSize(6),
        textAlign: 'center',
        width: getCustomSize(50),
        fontSize: getCustomSize(30),
        color:AppColor.BLACK_COLOR
    },
    otpView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: getCustomSize(30),
        marginBottom: getCustomSize(10)
    },
    loaderModalContainer: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        margin: getCustomSize(10),
        borderRadius: getCustomSize(20),
    },
    showText: {
        color: AppColor.AZURE,
        fontFamily: AppFonts.FontsMedium,
        textAlign: 'center',
        marginTop: getCustomSize(10)
    }

});

