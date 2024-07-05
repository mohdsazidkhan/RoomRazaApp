import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import CustomTextInput from '../../../components/molecules/customTextInput'
import { AppColor } from '../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import CustomButton from '../../../components/atoms/customButton'
import { RadioButton } from 'react-native-paper'
import { AppFonts } from '../../../theme/appFont'
import PaperButton from '../../../components/atoms/paperButton'
import CustomCheckBox from '../../../components/molecules/customCheckBox'
import MaterialDropdown from '../../../components/organisms/dropdown'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'AddingClientScreen'>

export default function AddingClientScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('addingClient')}
                backHandle={() => navigation.goBack()} />

            <View style={styles.screenContainer}>
                <Text style={styles.subTitle}>{t('typeNameAddNewAppointment')}</Text>



                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, }}>

                        <Text style={styles.genderTitle}>{t('selectGender')}</Text>


                        <View style={{ flexDirection: 'row', }}>
                            <View style={styles.radioButtonView}>
                                <RadioButton
                                    status='checked'
                                    color={AppColor.DEEP_SPACE_SPARKLE} />
                                <Text style={styles.radioButtonText}>{t('female')}</Text>
                            </View>
                            <View style={styles.radioButtonView}>
                                <RadioButton />
                                <Text style={styles.radioButtonText}>{t('male')}</Text>
                            </View>
                            <View style={styles.radioButtonView}>
                                <RadioButton />
                                <Text style={styles.radioButtonText}>{t('other')}</Text>
                            </View>

                        </View>




                        <PaperTextInput
                            label={t('firstName')}
                            topMargin={getCustomSize(20)} />



                        <PaperTextInput
                            label={t('lastName')}
                            topMargin={getCustomSize(20)} />

                        <MaterialDropdown
                            placeHolder={t('contactNumber')}
                            topMargin={getCustomSize(20)} />


                        <PaperTextInput
                            label={t('email')}
                            topMargin={getCustomSize(20)} />


                        <MaterialDropdown
                            placeHolder={t('addressType')}
                            topMargin={getCustomSize(20)} />



                        <PaperTextInput
                            label={t('visitorName')}
                            topMargin={getCustomSize(20)} />



                        <PaperTextInput
                            label={t('houseBuildingNo')}
                            topMargin={getCustomSize(20)} />


                        <PaperTextInput
                            label={t('enterAddressLine1')}
                            topMargin={getCustomSize(20)} />



                        <PaperTextInput
                            label={t('enterAddressLine2')}
                            topMargin={getCustomSize(20)} />



                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginRight: getCustomSize(10), marginTop: 5 }}>
                                <MaterialDropdown
                                    placeHolder={t('country')} />
                            </View>

                            <View style={{ flex: 1, marginLeft: getCustomSize(10), marginRight: 1 }}>
                                <PaperTextInput
                                    label={t('pincode')}
                                    topMargin={getCustomSize(9)} />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginRight: getCustomSize(10) }}>
                                <MaterialDropdown
                                    placeHolder={t('state')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: getCustomSize(10), marginRight: 1 }}>
                                <MaterialDropdown
                                    placeHolder={t('city')} />
                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomCheckBox
                                themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                            <Text style={styles.defaultAddressText}>{t('defaultAddress')}</Text>
                        </View>
                        <Text style={styles.moreInfoText}>{t('addAdditionalAddressInformation')}</Text>
                        <Text style={styles.moreInfoText}>{t('addMoreInformation')}</Text>

                        <View style={styles.buttonView}>
                            <PaperButton
                                buttonName={t('addClient')}
                                // isDisable 
                                buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                                OnPress={() => navigation.navigate('CreateAppointment')} />

                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaWithStatusBar>
    )
}