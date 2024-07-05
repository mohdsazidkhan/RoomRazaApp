import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({
  container: { marginHorizontal: getCustomSize(15), marginTop: getCustomSize(10) },
  languageView: { flexDirection: 'row', marginVertical: getCustomSize(20), alignItems: 'center', justifyContent: 'space-between' },
  languageText: { color: AppColor.EERIE_BLACK, fontFamily: AppFonts.FontsMedium, fontSize: getCustomSize(AppFontSize.FontsSize_20), marginLeft: getCustomSize(15) },
  preferredLangText: { color: AppColor.DIM_GRAY, fontFamily: AppFonts.FontsRegular, fontSize: getCustomSize(AppFontSize.FontsSize_15), marginTop: getCustomSize(20) },
  text: {
    // fontSize: 18,
    // color: '#000',
    // paddingVertical: 4
    fontWeight: '600',
    color: AppColor.EERIE_BLACK,

    fontFamily: AppFonts.FontsMedium,
    fontSize: getCustomSize(AppFontSize.FontsSize_20),
    marginLeft: getCustomSize(15)
  },
  selectedText: {
    fontWeight: '600',
    color: AppColor.EERIE_BLACK,

    fontFamily: AppFonts.FontsMedium,
    fontSize: getCustomSize(AppFontSize.FontsSize_20),
    marginLeft: getCustomSize(15)
  }
})