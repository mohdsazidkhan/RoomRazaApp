import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import CustomSearchView from '../../../components/organisms/searchView'
import { AppFonts } from '../../../theme/appFont'
import { AppFontSize, getCustomSize } from '../../../theme/appFontSize'
import { AppColor } from '../../../theme/appColor'
import DividerView from '../../../components/atoms/dividerView'
import { SvgImagePath } from '../../../assets/helper/imagePath'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'SalaryScreen'>
export default function SalaryScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('salary')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>

                <View style={styles.container}>

                    <CustomSearchView
                        showFilter={true}
                        placeholder={t('search')} />


                    <View style={styles.headingView}>
                        <Text style={styles.headingText}>{t('monthlySalary')}</Text>
                        <Text style={styles.headingText}>{t('rs')} 20650</Text>
                    </View>


                    <Text
                        style={styles.bankDetailText}
                        onPress={() => navigation.navigate('BankDetailScreen')}>{t('viewBankDetails')}</Text>

                    <CustomClick
                        title='Bank Details'
                        handlePress={() => navigation.navigate('BankDetailScreen')} />
                    <DividerView marginVertical={getCustomSize(15)} />
                    <Text style={styles.headingText}>{t('paySlip')}</Text>


                    <View style={styles.headingView}>
                        <Text style={styles.subHeadingText}>{t('months')}</Text>
                        <Text style={styles.subHeadingText}>{t('amount')}({t('rs')})</Text>
                    </View>


                    <Pressable style={styles.menuPressable}
                        onPress={() => navigation.navigate('SalaryDetailScreen')}>
                        <Text style={styles.subHeadingText}>December</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.subHeadingText}>202800 </Text>
                            <SvgImagePath.MiniDocument />
                        </View>
                    </Pressable>
                    <CustomClick
                        title='Salary Detail'
                        handlePress={() => navigation.navigate('SalaryDetailScreen')} />
                    <Pressable style={styles.menuPressable}>
                        <Text style={styles.subHeadingText}>December</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.subHeadingText}>202800 </Text>
                            <SvgImagePath.MiniDocument />
                        </View>
                    </Pressable>

                    <Pressable style={styles.menuPressable}>
                        <Text style={styles.subHeadingText}>December</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.subHeadingText}>202800 </Text>
                            <SvgImagePath.MiniDocument />
                        </View>
                    </Pressable>


                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}