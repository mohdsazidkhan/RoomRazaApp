import { StyleSheet, Dimensions } from 'react-native'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont';
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: AppFonts.FontsBold,
        fontSize: getCustomSize(AppFontSize.FontsSize_20),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: AppFonts.FontsMedium,
        fontSize: getCustomSize(AppFontSize.FontsSize_15),
        color: AppColor.EERIE_BLACK,
        textAlign: 'center',
        marginBottom: getCustomSize(15)
    },
    addClientPressable: {
        borderStyle: 'dashed',
        borderRadius: 3,
        borderColor: AppColor.PHILIPPINE_SILVER,
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: getCustomSize(20)
    },
    addClintText: {
        color: AppColor.AZURE,
        fontSize: AppFontSize.FontsSize_20,
        fontFamily: AppFonts.FontsMedium,
        paddingHorizontal: getCustomSize(15),
        paddingVertical: getCustomSize(5)
    }

})