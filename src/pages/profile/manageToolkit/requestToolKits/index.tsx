import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { styles } from './styles'
import PaperTextInput from '../../../../components/molecules/paperTextInput'
import CustomIcon from '../../../../components/atoms/customIcon'
import { getCustomSize } from '../../../../theme/appFontSize'
import { AppColor } from '../../../../theme/appColor'
import CustomButton from '../../../../components/atoms/customButton'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'RequestToolkitScreen'>

export default function RequestToolkitScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('requestToolsKits')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>

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
                            label={t('selectToolkit')} />
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