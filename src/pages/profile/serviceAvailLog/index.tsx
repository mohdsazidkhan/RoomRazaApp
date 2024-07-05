import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import CustomSearchView from '../../../components/organisms/searchView'
import { AppFonts } from '../../../theme/appFont'
import DividerView from '../../../components/atoms/dividerView'
import { getCustomSize } from '../../../theme/appFontSize'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceAvailScreen'>
export default function ServiceAvailScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('serviceAvailedLog')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>

                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />


                    <Pressable style={styles.weekMonthView}>
                        <Text style={styles.selectedTabText}>{t('day')}</Text>
                        <Text style={styles.unSelectedText}>{t('week')}</Text>
                        <Text style={styles.unSelectedText}>{t('month')}</Text>
                        <Text style={styles.unSelectedText}>{t('dateRange')}</Text>
                    </Pressable>


                    <View style={styles.menuView}>
                        <Text style={{ ...styles.totalLeftText, fontFamily: AppFonts.FontsBold }}>{t('totalReceived')}</Text>

                    </View>
                    <View style={styles.menuView}>
                        <Text style={styles.totalLeftText}>{t('totalNumberServices')}</Text>
                        <Text style={styles.rightAlignText}>30</Text>
                    </View>

                    <DividerView marginVertical={getCustomSize(20)} />


                    <View style={styles.targetTimeHeading}>
                        <Text style={styles.targetText}>{t('date')}</Text>
                        <Text style={styles.targetText}>{t('stylist')}</Text>
                        <Text style={styles.targetText}>{t('service')}</Text>
                    </View>

                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>12/12/22</Text>
                        <Text style={styles.targetTimeNameText}>Gagan</Text>
                        <Text style={styles.targetRsText}>Hair Cut</Text>
                    </View>
                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>12/12/12</Text>
                        <Text style={styles.targetTimeNameText}>Gagan</Text>
                        <Text style={styles.targetRsText}>Hair Cut</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}