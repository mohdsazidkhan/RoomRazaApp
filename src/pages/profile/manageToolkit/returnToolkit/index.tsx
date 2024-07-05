import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import PaperTextInput from '../../../../components/molecules/paperTextInput'
import CustomIcon from '../../../../components/atoms/customIcon'
import { AppColor } from '../../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import CustomButton from '../../../../components/atoms/customButton'
import { styles } from './styles'
import { RadioButton } from 'react-native-paper'
import { AppFonts } from '../../../../theme/appFont'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'ReturnToolkitScreen'>
export default function ReturnToolkitScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('returnToolsKits')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: getCustomSize(30) }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                btnTitle={t('items')}
                                buttonHeight={getCustomSize(60)}
                                backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                                textColor={AppColor.WHITE_COLOR}
                            />

                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                buttonHeight={getCustomSize(60)}
                                btnTitle={t('kits')}
                                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                        </View>
                    </View>

                    <View style={styles.radioButtonView}>
                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('replacement')}</Text>
                        </View>

                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('exchange')}</Text>
                        </View>

                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('repair')}</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: getCustomSize(25) }}>
                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('expired')}</Text>
                        </View>

                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('excessStock')}</Text>
                        </View>

                        <View style={styles.radioButtonSubView}>
                            <RadioButton />
                            <Text style={styles.radioButtonText}>{t('others')}</Text>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1 }}>
                            <PaperTextInput
                                label={t('from')} />
                        </View>
                        <View style={{ alignSelf: 'center', backgroundColor: AppColor.ANTI_FLASH_WHITE, borderRadius: getCustomSize(20), padding: getCustomSize(5), marginHorizontal: getCustomSize(15) }}>
                            <CustomIcon
                                iconName='arrow-forward' />
                        </View>
                        <View style={{ flex: 1 }}>
                            <PaperTextInput
                                label={t('to')} />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: getCustomSize(20) }}>
                        <View style={{ flex: 1, marginRight: getCustomSize(10) }}>
                            <PaperTextInput
                                label={t('date')} />
                        </View>

                        <View style={{ flex: 1, marginLeft: getCustomSize(10) }}>
                            <PaperTextInput
                                label={t('time')} />
                        </View>
                    </View>

                    <View>
                        <PaperTextInput
                            label={t('selectItems')} />
                    </View>

                    <View style={{ marginVertical: getCustomSize(20) }}>
                        <PaperTextInput
                            label={t('reason')} />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: getCustomSize(30) }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle={t('cancel')}
                                buttonHeight={getCustomSize(60)}
                                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                btnTitle={t('send')}
                                buttonHeight={getCustomSize(60)}
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