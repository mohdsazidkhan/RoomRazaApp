import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import CustomIcon from '../../../components/atoms/customIcon'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'OtherDetailsScreen'>
export default function OtherDetailsScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('otherDetails')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <Pressable style={styles.pressableView}
                        onPress={() => navigation.navigate('InsuranceScreen')}>
                        <Text style={styles.pressableTitle}>{t('insurance')}</Text>

                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>

                    <Pressable style={styles.pressableView}>
                        <Text style={styles.pressableTitle}>{t('loan')}</Text>

                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>


                    <Pressable style={styles.pressableView}>
                        <Text style={styles.pressableTitle}>{t('complaint')}</Text>

                        <CustomIcon
                            iconName='chevron-right' />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}