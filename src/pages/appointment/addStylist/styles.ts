import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
    profileImageCard: { elevation: 5, padding: 10, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15 },
    profileInfoMainView: { flexDirection: 'row', marginBottom: 15 },
    profileImageView: { height: 80, width: 80, borderRadius: 80 / 2 },
    profilePersonalInfoView: { marginHorizontal: 20, justifyContent: 'center' },
    profilePersonalView: { flexDirection: 'row', alignItems: 'center' },
    profileName: { fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_19, marginRight: 10 },
    viewAppointmentView: { flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 13 },
    viewAppointmentText: { fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE, fontSize: AppFontSize.FontsSize_16 },


    serviceCard: { elevation: 2, padding: 10, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15 },
    serviceInfoMainView: { flexDirection: 'row', marginBottom: 15 },
    serviceImageView: { height: 80, width: 80, borderRadius: 80 / 2 },
    serviceInfoView: { marginHorizontal: 20, justifyContent: 'center' },
    serviceView: { flexDirection: 'row', alignItems: 'center' },
    serviceName: { fontFamily: AppFonts.FontsBold, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: AppFontSize.FontsSize_19, marginRight: 10 },
})