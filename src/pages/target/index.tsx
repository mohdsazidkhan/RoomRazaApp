import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/screen'
import CustomSearchView from '../../components/organisms/searchView'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'TargetScreen'>

export default function TargetScreen({ navigation }: Props) {
    const { t } = useTranslation()

    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('targetDetails')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        showFilter={true}
                        placeholder={t('search')} />
                    <View style={styles.amtView}>
                        <Text style={styles.amtViewText}>{t('actualAmount')}</Text>
                        <Text style={styles.amtViewText}>Rs. 1500</Text>
                    </View>
                    <View style={styles.targetHeading}>
                        <Text style={styles.targetText}>Hair Cut(6)</Text>
                    </View>
                    <View style={styles.targetTimeHeading}>
                        <Text style={styles.targetText}>{t('time')}</Text>
                        <Text style={styles.targetText}>{t('client')}</Text>
                        <Text style={styles.targetText}>{t('amtRs')}</Text>
                    </View>

                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>10:00AM</Text>
                        <Text style={styles.targetTimeNameText}>Sanjana Singh</Text>
                        <Text style={styles.targetRsText}>1200</Text>
                    </View>
                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>10:00AM</Text>
                        <Text style={styles.targetTimeNameText}>Sanjana Singh</Text>
                        <Text style={styles.targetRsText}>1200</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}