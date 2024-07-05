import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import CustomSearchView from '../../../components/organisms/searchView'
import CustomIcon from '../../../components/atoms/customIcon'
import { AppColor } from '../../../theme/appColor'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'ViewLeaveHistoryScreen'>
export default function ViewLeaveHistoryScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('viewLeaveHistory')}
                backHandle={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>

                    <CustomSearchView
                        placeholder={t('searchForHistory')}
                        showFilter={true} />



                    <View style={styles.targetHeading}>
                        <Text style={styles.attendanceSubHeading}>{t('date')}</Text>
                        <Text style={styles.attendanceSubHeading}>{t('leaveType')}</Text>
                        <Text style={styles.attendanceSubHeading}>{t('status')}</Text>
                    </View>

                    <View style={styles.attendanceDetailView}>
                        <Text style={styles.attendanceSubHeading}>2/12/22</Text>
                        <Text style={styles.attendanceSubHeading}>{t('sickLeave')}</Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={{ ...styles.attendanceSubHeading, color: AppColor.MAY_GREEN_COLOR }}>{t('approved')}</Text>
                            <CustomIcon
                                iconName='keyboard-arrow-down'
                                iconColor={AppColor.TAUPE_GRAY} />
                        </View>
                    </View>


                    <View style={{ ...styles.attendanceDetailView, backgroundColor: AppColor.WHITE_COLOR }}>
                        <Text style={styles.attendanceSubHeading}>2/12/22</Text>
                        <Text style={styles.attendanceSubHeading}>{t('sickLeave')}</Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={{ ...styles.attendanceSubHeading, color: AppColor.GOLDEN_POPPY_COLOR }}>{t('pending')}</Text>
                            <CustomIcon
                                iconName='keyboard-arrow-down'
                                iconColor={AppColor.TAUPE_GRAY} />
                        </View>
                    </View>

                    <View style={styles.attendanceDetailView}>
                        <Text style={styles.attendanceSubHeading}>2/12/22</Text>
                        <Text style={styles.attendanceSubHeading}>{t('sickLeave')}</Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={{ ...styles.attendanceSubHeading, color: AppColor.CINNABAR_COLOR }}>{t('rejected')}</Text>
                            <CustomIcon
                                iconName='keyboard-arrow-down'
                                iconColor={AppColor.TAUPE_GRAY} />
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaWithStatusBar>
    )
}