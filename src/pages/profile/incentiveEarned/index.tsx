import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import CustomSearchView from '../../../components/organisms/searchView'
import { getCustomSize } from '../../../theme/appFontSize'
import { AppFonts } from '../../../theme/appFont'
import DividerView from '../../../components/atoms/dividerView'
import { AppColor } from '../../../theme/appColor'
import CustomIcon from '../../../components/atoms/customIcon'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'IncentiveEarnedScreen'>
export default function IncentiveEarnedScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('incentiveCommissionEarned')}
                backHandle={() => navigation.goBack()} />


            <ScrollView>
                <View style={styles.container}>
                    <CustomSearchView
                        placeholder={t('search')}
                        showFilter={true} />

                    <Pressable style={styles.weekMonthView}>
                        <Text style={styles.selectedTabText}>{t('incentive')}</Text>
                        <Text style={styles.unSelectedText}>{t('earned')}</Text>
                    </Pressable>


                    <Pressable style={{
                        padding: getCustomSize(10),

                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: getCustomSize(20),
                        marginHorizontal: getCustomSize(-15),
                        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR
                    }}>
                        <Text style={{ ...styles.unSelectedText, textAlign: 'left' }}>Incentive earned for December 22</Text>
                        <CustomIcon
                            iconName='expand-less' />
                    </Pressable>



                    <Text style={styles.headingText}>{t('amountDetails')}</Text>



                    <View style={styles.headingView}>
                        <Text style={styles.bankDetailText}>{t('totalIncentiveAmount')}</Text>
                        <Text style={styles.headingText}>{t('Rs.')} 20650</Text>
                    </View>
                    <DividerView marginVertical={getCustomSize(20)} />

                    <View style={styles.targetTimeHeading}>
                        <Text style={styles.targetText}>{t('date')}</Text>
                        <Text style={styles.targetText}>{t('customer')}</Text>
                        <Text style={styles.targetText}>{t('service')}</Text>
                        <Text style={styles.targetText}>{t('incentiveAmt')}</Text>
                    </View>


                    <Pressable style={styles.targetDetailView}
                    // onPress={() => navigation.navigate('ClientLogScreen')}
                    >
                        <Text style={styles.targetTimeNameText}>12/12/22</Text>
                        <Text style={styles.targetTimeNameText}>Gagan</Text>
                        <Text style={styles.targetTimeNameText}>hair Cut</Text>
                        <Text style={styles.targetTimeNameText}>1200</Text>

                    </Pressable>

                    <Pressable style={styles.targetDetailView}
                    // onPress={() => navigation.navigate('ClientLogScreen')}
                    >
                        <Text style={styles.targetTimeNameText}>12/12/22</Text>
                        <Text style={styles.targetTimeNameText}>Gagan</Text>
                        <Text style={styles.targetTimeNameText}>hair Cut</Text>
                        <Text style={styles.targetTimeNameText}>1200</Text>

                    </Pressable>

                    <Pressable style={{
                        paddingVertical: getCustomSize(10),
                        paddingHorizontal: getCustomSize(20),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: getCustomSize(20),
                        marginHorizontal: getCustomSize(-15),
                        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR
                    }}>
                        <Text style={{
                            color: AppColor.EERIE_BLACK,
                            fontFamily: AppFonts.FontsBold,
                            fontSize: getCustomSize(20),
                            textAlignVertical: 'center'
                        }}>{t('total')}</Text>
                        <Text style={{
                            color: AppColor.EERIE_BLACK,
                            fontFamily: AppFonts.FontsBold,
                            fontSize: getCustomSize(20),
                            textAlignVertical: 'center'
                        }}>6200</Text>
                    </Pressable>

                    <Pressable style={{
                        padding: getCustomSize(10),

                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: getCustomSize(20),
                        marginHorizontal: getCustomSize(-15),
                        backgroundColor: AppColor.ANTI_FLASH_WHITE_COLOR
                    }}>
                        <Text style={{ ...styles.unSelectedText, textAlign: 'left' }}>Incentive earned for November 22</Text>
                        <CustomIcon
                            iconName='expand-more' />
                    </Pressable>


                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}