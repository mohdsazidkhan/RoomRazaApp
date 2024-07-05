import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { styles } from './styles'
import PaperTextInput from '../../../../components/molecules/paperTextInput'
import { getCustomSize } from '../../../../theme/appFontSize'
import CustomButton from '../../../../components/atoms/customButton'
import { AppColor } from '../../../../theme/appColor'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'BankDetailScreen'>
export default function BankDetailScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('bankDetails')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <PaperTextInput
                        label={t('bankName')}
                        topMargin={getCustomSize(15)} />
                    <PaperTextInput
                        label={t('accountNumber')}
                        topMargin={getCustomSize(15)} />
                    <PaperTextInput
                        label={t('accountHolderName')}
                        topMargin={getCustomSize(15)} />
                    <PaperTextInput
                        label={t('IFSCCode')}
                        topMargin={getCustomSize(15)} />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: getCustomSize(30) }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <CustomButton
                                textColor={AppColor.DEEP_SPACE_SPARKLE}
                                btnTitle={t('cancel')}
                                borderColor={AppColor.DEEP_SPACE_SPARKLE} />
                        </View>

                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <CustomButton
                                btnTitle={t('update')}
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