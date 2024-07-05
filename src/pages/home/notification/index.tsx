import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import { DEMO_GIRL_IMAGE } from '../../../assets/helper/imagePath'
import { AppFonts } from '../../../theme/appFont'
import { AppColor } from '../../../theme/appColor'

type Props = NativeStackScreenProps<RootStackParamList, 'NotificationsScreen'>
export default function NotificationsScreen({ navigation }: Props) {
  return (
    <SafeAreaWithStatusBar>
      <HeaderWithBackButton
        headerTitle='Notifications'
        backHandle={() => navigation.goBack()} />
      <ScrollView>
        <View style={{ padding: getCustomSize(15) }}>

          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>

          
          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>


          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>


          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>


          <Pressable style={{ flexDirection: 'row', marginTop: getCustomSize(25) }}>
            <Image
              source={{ uri: DEMO_GIRL_IMAGE }}
              style={{ height: getCustomSize(80), width: getCustomSize(80), borderRadius: getCustomSize(80 / 2) }}
              resizeMode='contain' />
            <View style={{ marginHorizontal: getCustomSize(20), flex: 1 }}>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK }}
                numberOfLines={3}>Shivangi Singh
                <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY }}
                > has updated the appointment</Text>
              </Text>
              <Text style={{ fontSize: getCustomSize(AppFontSize.FontsSize_18), fontFamily: AppFonts.FontsRegular, color: AppColor.TAUPE_GRAY, marginTop: getCustomSize(5) }}>12/01/23 | 12:00PM</Text>
            </View>
          </Pressable>

        </View>

      </ScrollView>
    </SafeAreaWithStatusBar>
  )
}