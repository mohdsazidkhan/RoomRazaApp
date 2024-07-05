import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { AppFonts } from '../../../theme/appFont'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomTextInput from '../../../components/molecules/customTextInput'
import DividerView from '../../../components/atoms/dividerView'
import CustomButton from '../../../components/atoms/customButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'


type Props = NativeStackScreenProps<RootStackParamList, 'RatingAndReviewScreen'>
export default function RatingAndReviewScreen({ navigation }: Props) {
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Give Your Rating & Review' 
                backHandle={()=>navigation.goBack()}/>

            <ScrollView>
                <View style={{ padding: getCustomSize(15) }}>
                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>Rate Stylist</Text>

                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_35), marginVertical: getCustomSize(25) }}>4.0</Text>

                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(20) }}>Do you have anything to say?</Text>

                    <CustomTextInput
                        placeholder='Write Here'
                        numberOfLines={5}
                        topMargin={getCustomSize(10)}
                    />
                    <DividerView marginVertical={getCustomSize(25)} />



                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>Rate Stylist</Text>

                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_35), marginVertical: getCustomSize(25) }}>4.0</Text>

                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(20) }}>Do you have anything to say?</Text>

                    <CustomTextInput
                        placeholder='Write Here'
                        numberOfLines={5}
                        topMargin={getCustomSize(10)}
                    />
                    <DividerView marginVertical={getCustomSize(25)} />


                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_20) }}>Rate Stylist</Text>

                    <Text style={{ textAlign: 'center', fontFamily: AppFonts.FontsBold, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_35), marginVertical: getCustomSize(25) }}>4.0</Text>

                    <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK, fontSize: getCustomSize(AppFontSize.FontsSize_17), marginTop: getCustomSize(20) }}>Do you have anything to say?</Text>

                    <CustomTextInput
                        placeholder='Write Here'
                        numberOfLines={5}
                        topMargin={getCustomSize(10)}
                    />
                    <DividerView marginVertical={getCustomSize(25)} />


                    <CustomButton
                        btnTitle='Submit'
                        backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                        textColor={AppColor.WHITE_COLOR}
                        handlePress={() => navigation.goBack()} />

                </View>

            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}