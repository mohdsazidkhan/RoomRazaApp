import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import CustomSearchView from '../../../../components/organisms/searchView'
import { AppFonts } from '../../../../theme/appFont'
import { AppColor } from '../../../../theme/appColor'
import { styles } from './styles'
import DividerView from '../../../../components/atoms/dividerView'
import Counter from '../../../../components/atoms/counter'
import CustomButton from '../../../../components/atoms/customButton'


type Props = NativeStackScreenProps<RootStackParamList, 'ServicesScreen'>
export default function ServicesScreen({ navigation }: Props) {
  return (
    <SafeAreaWithStatusBar>
      <HeaderWithBackButton
        headerTitle='Select Services'
        backHandle={() => navigation.goBack()} />

      <ScrollView>
        <View style={{ padding: getCustomSize(15) }}>

          <CustomSearchView
            placeholder='Search'
            showFilter={true} />



          <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR, marginHorizontal: 15, marginVertical: 15 }}>Select Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>


            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>All</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Skin</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Make up</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Hair</Text>
            </View>
          </ScrollView>


          <Text style={{ fontSize: 18, fontFamily: AppFonts.FontsMedium, color: AppColor.BLACK_COLOR, marginHorizontal: getCustomSize(15), marginVertical: getCustomSize(15) }}>Select Services</Text>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: getCustomSize(15), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: getCustomSize(15), marginTop: getCustomSize(15) }}>Blech Face & Neck</Text>
              <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: getCustomSize(15), marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
            </View>
            <Counter />
          </View>
          <DividerView marginVertical={10} />


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: getCustomSize(15), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: getCustomSize(15), marginTop: getCustomSize(15) }}>Blech Face & Neck</Text>
              <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: getCustomSize(15), marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
            </View>
            <Counter />
          </View>
          <DividerView marginVertical={10} />


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: getCustomSize(15), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: getCustomSize(15), marginTop: getCustomSize(15) }}>Blech Face & Neck</Text>
              <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: getCustomSize(15), marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
            </View>
            <Counter />
          </View>
          <DividerView marginVertical={10} />


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: getCustomSize(15), fontFamily: AppFonts.FontsBold, color: AppColor.BLACK_COLOR, marginHorizontal: getCustomSize(15), marginTop: getCustomSize(15) }}>Blech Face & Neck</Text>
              <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.TAUPE_GRAY, fontSize: AppFontSize.FontsSize_12, marginHorizontal: getCustomSize(15), marginVertical: 5 }}>40 MIn       |       Rs. 550/-</Text>
            </View>
            <Counter />
          </View>
          <DividerView marginVertical={10} />


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <CustomButton
                textColor={AppColor.DEEP_SPACE_SPARKLE}
                btnTitle='CANCEL'
                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <CustomButton
                btnTitle='ADD'
                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                textColor={AppColor.WHITE_COLOR}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaWithStatusBar>
  )
}