import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import { RadioButton } from 'react-native-paper'
import { AppColor } from '../../../theme/appColor'
import { AppFonts } from '../../../theme/appFont'
import CustomTextInput from '../../../components/molecules/customTextInput'
import MaterialDropdown from '../../../components/organisms/dropdown'
import CustomCheckBox from '../../../components/molecules/customCheckBox'
import PaperButton from '../../../components/atoms/paperButton'
import { useTranslation } from 'react-i18next'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import { getCustomSize } from '../../../theme/appFontSize'


type Props = NativeStackScreenProps<RootStackParamList, 'GuestProfileScreen'>

export default function GuestProfileScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle='Sunaina Singh'
                backHandle={() => navigation.goBack()} />


            <View style={{ margin: getCustomSize(15), flex: 1 }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, }}>

                        <Text style={styles.genderTitle}>{t('selectGender')}</Text>


                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: getCustomSize(10) }}>
                                <RadioButton
                                    status='checked'
                                    color={AppColor.DEEP_SPACE_SPARKLE} />
                                <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK }}>{t('female')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: getCustomSize(10) }}>
                                <RadioButton />
                                <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK }}>{t('male')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: getCustomSize(10) }}>
                                <RadioButton />
                                <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK }}>{t('other')}</Text>
                            </View>

                        </View>




                        <PaperTextInput
                            label={t('firstName')}
                            topMargin={getCustomSize(20)}
                        />

                        <PaperTextInput
                            label={t('lastName')}
                            topMargin={getCustomSize(20)}
                        />



                        <MaterialDropdown
                            placeHolder={t('contactNumber')}
                            topMargin={getCustomSize(20)} />

                        <PaperTextInput
                            label={t('email')}
                            topMargin={getCustomSize(20)}
                        />


                        <MaterialDropdown
                            placeHolder={t('addressType')}
                            topMargin={getCustomSize(20)} />

                        <PaperTextInput
                            label={t('visitorName')}
                            topMargin={getCustomSize(20)}
                        />


                        <PaperTextInput
                            label={t('houseBuildingNo')}
                            topMargin={getCustomSize(20)}
                        />








                        <PaperTextInput
                            label={t('enterAddressLine1')}
                            topMargin={getCustomSize(20)}
                        />
                        <PaperTextInput
                            label={t('enterAddressLine2')}
                            topMargin={getCustomSize(20)}
                        />




                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flex: 1, marginRight: 10 }}>
                                <MaterialDropdown
                                    placeHolder={t('country')}
                                    topMargin={getCustomSize(20)} />
                            </View>

                            <View style={{ flex: 1, marginLeft: 10 }}>

                                <PaperTextInput
                                    label={t('pincode')}
                                    topMargin={getCustomSize(20)}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flex: 1, marginRight: 10 }}>
                                <MaterialDropdown
                                    placeHolder={t('state')}
                                    topMargin={getCustomSize(20)} />
                            </View>

                            <View style={{ flex: 1, marginLeft: 10 }}>

                                <MaterialDropdown
                                    placeHolder={t('city')}
                                    topMargin={getCustomSize(20)} />

                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomCheckBox
                                themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.EERIE_BLACK }}>{t('defaultAddress')}</Text>
                        </View>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE }}>{t('addAdditionalAddressInformation')}</Text>
                        <Text style={{ fontFamily: AppFonts.FontsMedium, color: AppColor.AZURE }}>{t('addMoreInformation')}</Text>

                        <View style={{ justifyContent: 'flex-end', flex: 1, marginVertical: getCustomSize(20) }}>
                            <PaperButton
                                buttonName={t('save')}
                                buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                                // isDisable 
                                OnPress={() => navigation.navigate('CreateAppointment')} />

                        </View>
                    </View>
                </ScrollView>


            </View>
        </SafeAreaWithStatusBar>
    )
}