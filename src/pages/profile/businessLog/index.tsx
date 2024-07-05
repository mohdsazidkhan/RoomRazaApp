import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import CustomSearchView from '../../../components/organisms/searchView'
import { styles } from './styles'
import CustomIcon from '../../../components/atoms/customIcon'
import { getCustomSize } from '../../../theme/appFontSize'
import { AppFonts } from '../../../theme/appFont'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'BusinessLogScreen'>
export default function BusinessLogScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('businessLog')}
                backHandle={() => navigation.goBack()} />


            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        showFilter={true}
                        placeholder={t('search')} />



                    <Pressable style={styles.weekMonthView}>
                        <Text style={styles.selectedTabText}>{t('day')}</Text>
                        <Text style={styles.unSelectedText}>{t('week')}</Text>
                        <Text style={styles.unSelectedText}>{t('month')}</Text>
                        <Text style={styles.unSelectedText}>{t('dateRange')}</Text>
                    </Pressable>

                    <View style={styles.targetTimeHeading}>
                        <Text style={styles.targetText}>{t('category')}</Text>
                        <Text style={styles.targetText}>{t('count')}</Text>
                        <Text style={styles.targetText}>{t('amountRs')}</Text>
                    </View>

                    <Pressable style={styles.targetDetailView}
                        onPress={() => navigation.navigate('ClientLogScreen')}>
                        <Text style={styles.targetTimeNameText}>Products</Text>
                        <Text style={styles.targetTimeNameText}>10</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.targetRsText}>1000</Text>
                            <CustomIcon
                                iconName='expand-more' />
                        </View>
                    </Pressable>

                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>Products</Text>
                        <Text style={styles.targetTimeNameText}>10</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.targetRsText}>1000</Text>
                            <CustomIcon
                                iconName='expand-more' />
                        </View>
                    </View>


                    <View style={{ ...styles.targetDetailView, marginTop: getCustomSize(25), alignItems: 'center' }}>
                        <Text style={{ ...styles.targetTimeNameText, fontFamily: AppFonts.FontsBold }}>Products</Text>
                        <Text style={{ ...styles.targetRsText, fontFamily: AppFonts.FontsBold }}>1000</Text>
                    </View>


                    <CustomClick
                        title={t('clientLog')}
                        handlePress={() => navigation.navigate('ClientLogScreen')} />

                </View>

            </ScrollView>
        </SafeAreaWithStatusBar >
    )
}