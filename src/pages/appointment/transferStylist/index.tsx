import { View, Text, ScrollView, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import DividerView from '../../../components/atoms/dividerView'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomButton from '../../../components/atoms/customButton'
import CustomTextInput from '../../../components/molecules/customTextInput'


type Props = NativeStackScreenProps<RootStackParamList, 'TransferStylistScreen'>
export default function TransferStylistScreen({ navigation }: Props) {
  return (
    <SafeAreaWithStatusBar>
      <HeaderWithBackButton
        headerTitle='Transfer to Stylist' />

      <ScrollView>

        <View style={{ padding: 15 }}>
          <Pressable style={styles.profileImageCard}>
            <View style={styles.profileInfoMainView}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={styles.profileImageView} />

              <View style={styles.profilePersonalInfoView}>
                <View style={styles.profilePersonalView}>
                  <Text style={styles.profileName}>Suhana Singh</Text>
                  <CustomIcon
                    iconName={'logout'}
                    iconSize={20}
                    iconColor={AppColor.AZURE} />
                </View>
                <Text style={{ fontFamily: AppFonts.FontsRegular }}>+91-XXXXXX3219</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <CustomIcon
                  iconName={'keyboard-arrow-down'}
                  iconSize={30}
                  iconColor={AppColor.BLACK_OLIVE} />
              </View>
            </View>

            <DividerView />
            <View style={{ flexDirection: 'row', marginVertical: 15 }}>
              <Text style={{ backgroundColor: AppColor.PERSIAN_GREEN, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>Primary</Text>
              <Text style={{ backgroundColor: AppColor.ATOMIC_TANGERINE, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>Influencer</Text>
              <Text style={{ backgroundColor: AppColor.DarkKhaki, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, fontSize: AppFontSize.FontsSize_17, color: AppColor.WHITE_COLOR, fontFamily: AppFonts.FontsMedium, marginRight: 15 }}>VIP</Text>
            </View>
          </Pressable>


          <Pressable style={{ ...styles.serviceCard, marginTop: 20 }}>
            <View style={styles.serviceInfoMainView}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={styles.serviceImageView} />

              <View style={styles.serviceInfoView}>
                <View style={styles.serviceView}>
                  <Text style={styles.serviceName}>Hair Color</Text>

                </View>
                <Text style={{ fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY }}>120 min    |    11:30 AM to 1:15 PM</Text>
              </View>
            </View>
            <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.DEEP_SPACE_SPARKLE, marginTop: 10 }}>Membership Discount Applied</Text>
            <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, marginTop: 5 }}>Ellen (Primary Member)</Text>
          </Pressable>


          <CustomTextInput
            placeholder='Reason'
            numberOfLines={5}
            topMargin={getCustomSize(30)}
          />


          <Text style={{ fontFamily: AppFonts.FontsBold, fontSize: AppFontSize.FontsSize_19, color: AppColor.BLACK_COLOR, textAlign: 'left', marginTop: getCustomSize(20), }}>Select Stylist</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -15, marginVertical: getCustomSize(20) }}
          >

            <Pressable style={{ marginRight: 15, marginLeft: 15 }}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={{ fontFamily: AppFonts.FontsMedium, fontSize: AppFontSize.FontsSize_15, color: AppColor.DEEP_SPACE_SPARKLE, textAlign: 'center', marginTop: 10 }}>Anyone</Text>

            </Pressable>


            <Pressable style={{ marginRight: 15 }}>
              <ImageBackground
                imageStyle={{ width: 100, height: 100, borderRadius: 50, borderColor: AppColor.DEEP_SPACE_SPARKLE, borderWidth: 3 }}
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={{ width: 100, height: 100, }} >

                <View style={{ height: 27, width: 27, borderRadius: 27, backgroundColor: AppColor.DEEP_SPACE_SPARKLE, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                  <CustomIcon
                    iconName='check'
                    iconColor={AppColor.WHITE_COLOR}
                    iconSize={20} />
                </View>
              </ImageBackground>

              <Text style={{ fontFamily: AppFonts.FontsBold, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Ankur Chauhan</Text>
              <Text style={{ fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_13, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Hair Stylist Expert</Text>
            </Pressable>


            <Pressable style={{ marginRight: 15 }}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={{ fontFamily: AppFonts.FontsBold, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Ankur Chauhan</Text>
              <Text style={{ fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_13, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Hair Stylist Expert</Text>
            </Pressable>


            <Pressable style={{ marginRight: 15 }}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={{ fontFamily: AppFonts.FontsBold, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Ankur Chauhan</Text>
              <Text style={{ fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_13, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Hair Stylist Expert</Text>
            </Pressable>


            <Pressable style={{ marginRight: 15 }}>
              <Image
                source={{ uri: DEMO_GIRL_IMAGE }}
                style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={{ fontFamily: AppFonts.FontsBold, fontSize: AppFontSize.FontsSize_15, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Ankur Chauhan</Text>
              <Text style={{ fontFamily: AppFonts.FontsRegular, fontSize: AppFontSize.FontsSize_13, color: AppColor.BLACK_COLOR, textAlign: 'center', marginTop: 10, width: 80 }}>Hair Stylist Expert</Text>
            </Pressable>




          </ScrollView>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <CustomButton
                textColor={AppColor.DEEP_SPACE_SPARKLE}
                btnTitle='CANCEL'
                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <CustomButton
                btnTitle='NEXT'
                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                textColor={AppColor.WHITE_COLOR}
                handlePress={() => navigation.navigate('StepsForStylist')} />
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaWithStatusBar>

  )
}