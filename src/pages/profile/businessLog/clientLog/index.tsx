import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CustomSearchView from '../../../../components/organisms/searchView'
import { AppFonts } from '../../../../theme/appFont'
import DividerView from '../../../../components/atoms/dividerView'
import { getCustomSize } from '../../../../theme/appFontSize'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { ScrollView } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { styles } from './styles'
import CustomIcon from '../../../../components/atoms/customIcon'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'ClientLogScreen'>

export default function ClientLogScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('clientLog')}
                backHandle={() => navigation.goBack()} />


            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        showFilter={true}
                        placeholder={t('search')} />



                    <Pressable style={styles.weekMonthView}>
                        {/* <Text style={styles.selectedTabText}>Day</Text> */}
                        <Text style={styles.unSelectedText}>Gagan</Text>
                        {/* <Text style={styles.unSelectedText}>Month</Text>
                        <Text style={styles.unSelectedText}>Date Range</Text> */}
                    </Pressable>

                    <View style={styles.targetTimeHeading}>
                        <Text style={styles.targetText}>{t('date')}</Text>
                        <Text style={styles.targetText}>{t('service')}</Text>
                        <Text style={styles.targetText}>{t('amountRs')}</Text>
                    </View>

                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>Products</Text>
                        <Text style={styles.targetTimeNameText}>10</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.targetRsText}>1000</Text>

                        </View>
                    </View>

                    <View style={styles.targetDetailView}>
                        <Text style={styles.targetTimeNameText}>Products</Text>
                        <Text style={styles.targetTimeNameText}>10</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.targetRsText}>1000</Text>

                        </View>
                    </View>


                    <View style={{ ...styles.targetDetailView, marginTop: getCustomSize(25), alignItems: 'center', elevation: 0, marginHorizontal: getCustomSize(-15), paddingHorizontal: getCustomSize(35) }}>
                        <Text style={{ ...styles.targetTimeNameText, fontFamily: AppFonts.FontsBold }}>{t('total')}</Text>
                        <Text style={{ ...styles.targetRsText, fontFamily: AppFonts.FontsBold }}>1000</Text>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaWithStatusBar>

    )
}