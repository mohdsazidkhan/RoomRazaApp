import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../../components/atoms/header'
import { styles } from './styles'
import { AppFonts } from '../../../../theme/appFont'
import { AppColor } from '../../../../theme/appColor'
import { getCustomSize } from '../../../../theme/appFontSize'
import DividerView from '../../../../components/atoms/dividerView'
import PaperButton from '../../../../components/atoms/paperButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../routes/screen'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'SalaryDetailScreen'>
export default function SalaryDetailScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('salaryPaySlipForMonth') + ' December 2022'}
                backHandle={() => navigation.goBack()} />
            <View style={styles.container}>


                <View style={styles.dateView}>
                    <Text style={styles.dateText}>{t('date')}: 10/12/22</Text>
                    <Text style={styles.dateText}>{t('time')}: 9:00 PM</Text>
                </View>

                <View style={styles.horizontalView}>
                    <Text style={styles.leftAlignText}>{t('employeeName')}: Ankur Chauhan</Text>
                    <Text style={styles.rightAlignText}>{t('pan')}: ABCDGHJJ472H</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('employeeId')}: 1234</Text>
                    <Text style={styles.rightAlignText}>{t('date')}: 01-June-2022</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('department')}: acbdsf</Text>
                    <Text style={styles.rightAlignText}>{t('dOB')}: 21-01-1999</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('bankName')}: HDFC </Text>
                    <Text style={styles.rightAlignText}>{t('accountNumber')}: 3293287654321</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('IFSCCode')}: HDFC09877 </Text>
                    <Text style={styles.rightAlignText}>{t('uANNO')}: 108023456788</Text>
                </View>


                <View style={styles.horizontalView}>
                    <Text style={styles.leftAlignText}>{t('noWorkingDays')}: 30</Text>
                    <Text style={styles.rightAlignText}>{t('noWorkedDays')}: 30</Text>
                </View>
                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('lOPDays')}: 0</Text>
                    <Text style={styles.rightAlignText}>{t('arrearDays')}: 0</Text>
                </View>


                <DividerView marginVertical={getCustomSize(15)} />


                <View style={styles.amtHeadingView}>
                    <Text style={styles.leftAlignText}>{t('description')}</Text>
                    <Text style={styles.centerAlignText}>{t('amountRs')}</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('fixedSalary')}</Text>
                    <Text style={styles.centerAlignText}>20650</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('targetAchieved')}</Text>
                    <Text style={styles.centerAlignText}>500</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('incentive')}</Text>
                    <Text style={styles.centerAlignText}>1000</Text>
                </View>
                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('commission')}</Text>
                    <Text style={styles.centerAlignText}>400</Text>
                </View>
                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('tipFromCustomer')}</Text>
                    <Text style={styles.centerAlignText}>500</Text>
                </View>



                <View style={styles.menuView}>
                    <Text style={styles.totalLeftText}>{t('total')}</Text>
                    <Text style={styles.totalCenterText}>23050</Text>
                </View>

                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('loanEMI')}</Text>
                    <Text style={styles.centerAlignText}>-1250</Text>
                </View>
                <View style={styles.menuView}>
                    <Text style={styles.leftAlignText}>{t('lateMark')}</Text>
                    <Text style={styles.centerAlignText}>-1000</Text>
                </View>

                <DividerView marginVertical={getCustomSize(15)} />

                <View style={styles.menuView}>
                    <Text style={styles.totalLeftText}>{t('totalReceived')}</Text>
                    <Text style={styles.totalCenterText}>20800</Text>
                </View>


                <PaperButton
                    buttonName={t('download')}
                    topMargin={getCustomSize(30)}
                    buttonColor={AppColor.DEEP_SPACE_SPARKLE} />

            </View>
        </SafeAreaWithStatusBar>
    )
}