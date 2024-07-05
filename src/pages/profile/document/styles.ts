import { Dimensions, StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getCustomSize(15),
        marginTop: getCustomSize(10),
        flex: 1
    },
    titleText: { textAlign: 'center', fontFamily: AppFonts.FontsBold, fontSize: getCustomSize(AppFontSize.FontsSize_17), color: AppColor.EERIE_BLACK },
    docView: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: getCustomSize(25), alignItems: 'center' },
    docPressable: { alignItems: 'center', },
    docTitle: { fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_18), marginTop: getCustomSize(10), color: AppColor.EERIE_BLACK },
    // modal style
    ctr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '100%',
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    downloadContainer: {
        marginTop: 20,
    },
    downloadButton: {
        padding: 7,
        borderWidth: 1,
        borderColor: '#E4E4E4',
        marginTop: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadButtonText: {
        color: 'black',
        marginRight: 5,
    },
    modalText: {
        color: 'black',
        textAlign: 'center',
    },
    txt: { color: 'black', marginRight: 5 },
    pressable: { padding: 7, borderWidth: 1, borderColor: '#E4E4E4', marginTop: 20, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
})