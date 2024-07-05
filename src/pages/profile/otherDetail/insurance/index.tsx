import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { styles } from './styles'
import { AppColor } from '../../../../theme/appColor'
import { AppFontSize, getCustomSize } from '../../../../theme/appFontSize'
import DividerView from '../../../../components/atoms/dividerView'
import PaperTextInput from '../../../../components/molecules/paperTextInput'
import PaperButton from '../../../../components/atoms/paperButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'InsuranceScreen'>
export default function InsuranceScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('insurance')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.titleText}>Lorem ipsum dolor sit amet consectetur. Facilisis non condimentum elit in ut arcu dolor. Nibh tortor ultric</Text>


                    <DividerView />

                    <PaperTextInput
                        label={t('startDate')}
                        topMargin={getCustomSize(10)} />

                    <PaperTextInput
                        label={t('maturityDate')}
                        topMargin={getCustomSize(10)} />

                    <PaperTextInput
                        label={t('policyNumber')}
                        topMargin={getCustomSize(10)} />
                    <PaperTextInput
                        label={t('insuranceCompany')}
                        topMargin={getCustomSize(10)} />


                    <PaperButton
                        buttonName={t('download')}
                        buttonColor={AppColor.DEEP_SPACE_SPARKLE}
                        topMargin={getCustomSize(40)} />

                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}