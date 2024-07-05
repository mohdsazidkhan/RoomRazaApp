import { StyleSheet } from "react-native";
import { AppColor } from "../../../../theme/appColor";
import { AppFonts } from "../../../../theme/appFont";
import { AppFontSize } from "../../../../theme/appFontSize";



export const styles = StyleSheet.create({

    appointmentView: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    appointmentImageView: {
        backgroundColor: AppColor.DIM_GRAY,
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginBottom: 8
    },
    appointmentStatusText: {
        width: 80,
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.BLACK_OLIVE,
        fontSize: AppFontSize.FontsSize_16,
        textAlign: 'center'
    },
    appointmentStatusTextLight: {
        width: 80,
        fontFamily: AppFonts.FontsMedium,
        color: AppColor.TAUPE_GRAY,
        fontSize: AppFontSize.FontsSize_12,
        textAlign: 'center',
        marginTop: 5
    },
  
})