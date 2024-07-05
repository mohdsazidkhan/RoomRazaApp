import { StyleSheet } from "react-native";
import { AppColor } from "../../../theme/appColor";
import { AppFonts } from "../../../theme/appFont";
import { AppFontSize, getCustomSize } from "../../../theme/appFontSize";



export const styles = StyleSheet.create({

    profileImageCard: { elevation: 5, padding: 10, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15 },
    profileInfoMainView: { flexDirection: 'row', marginBottom: 15 },
    profileImageView: { height: 80, width: 80, borderRadius: 80 / 2 },
    profilePersonalInfoView: { marginHorizontal: 20, justifyContent: 'center' },
    profilePersonalView: { flexDirection: 'row', alignItems: 'center' },
    profileName: { fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: AppFontSize.FontsSize_19, marginRight: 10 },
    viewAppointmentView: { flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 13 },
    viewAppointmentText: { fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE, fontSize: AppFontSize.FontsSize_16 },


    serviceCard: { elevation: 5, padding: 10, backgroundColor: AppColor.WHITE_COLOR, borderRadius: 15 },
    serviceInfoMainView: { flexDirection: 'row', marginBottom: 15 },
    serviceImageView: { height: 80, width: 80, borderRadius: 80 / 2 },
    serviceInfoView: { marginHorizontal: 10, justifyContent: 'center',flex:1 },
    serviceView: { flexDirection: 'row', alignItems: 'center' },
    serviceName: { fontFamily: AppFonts.FontsBold, color: AppColor.DEEP_SPACE_SPARKLE, fontSize: AppFontSize.FontsSize_19, marginRight: 10 },
    r: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        marginHorizontal: getCustomSize(30),
        borderRadius: getCustomSize(20),
    },
    imageUploadr: {
        backgroundColor: AppColor.WHITE_COLOR,
        padding: getCustomSize(10),
        // marginHorizontal: getCustomSize(30),
        // borderRadius: getCustomSize(20),
        borderTopLeftRadius:getCustomSize(20),
        borderTopRightRadius:getCustomSize(20)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainerr: {
        width: '100%',
      },
      modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        height:350
      },

      dropdownView: {
        marginTop: getCustomSize(20)
    },
    placeholderStyle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.DEEP_SPACE_SPARKLE
    },
    selectedTextStyle: {
        fontFamily: AppFonts.FontsRegular,
        fontSize: getCustomSize(AppFontSize.FontsSize_16),
        color: AppColor.BLACK_COLOR
    },

    dropdown: {
        height: getCustomSize(60),
        borderColor: AppColor.DEEP_SPACE_SPARKLE,

        paddingHorizontal: 8,
        marginTop: getCustomSize(10),
        borderWidth: 0.5,
        borderRadius: getCustomSize(10)
    },
    
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioText: {
      color: AppColor.AZURE, fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_17,  
    },
    loader:{
      position: 'absolute',
      flex: 1,
      height: '100%',
      backgroundColor: 'black',
      zIndex: 1,
      opacity: 0.6,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },

title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'black'
},
item: {
  fontSize: 10,
  fontWeight: '400',
  marginVertical: 4,
  color:'#E4E4E4'
},
})