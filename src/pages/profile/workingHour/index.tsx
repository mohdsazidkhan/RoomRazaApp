import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { styles } from './styles'
import CustomCalendar from '../../../components/organisms/calendar'
import { getCustomSize } from '../../../theme/appFontSize'
import DividerView from '../../../components/atoms/dividerView'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import PaperTextInput from '../../../components/molecules/paperTextInput'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParamList, 'WorkingHourScreen'>
export default function WorkingHourScreen({ navigation }: Props) {
    const { t } = useTranslation()
    return (
        <SafeAreaWithStatusBar>
            <HeaderWithBackButton
                headerTitle={t('stylistCalendar')}
                backHandle={() => navigation.goBack()} />

            <ScrollView>
                <View style={styles.container}>

                    <CustomCalendar />

                    <View style={styles.dateView}>
                        <View style={styles.dateLeftSubView}>
                            <Text style={styles.dateTitle}>{t('from')}</Text>
                            <PaperTextInput
                                label={t('ddMMYYYY')} />
                        </View>

                        <View style={styles.dateRightSubView}>
                            <Text style={styles.dateTitle}>{t('to')}</Text>
                            <PaperTextInput
                                label={t('ddMMYYYY')} />
                        </View>

                    </View>


                    <DividerView
                        marginVertical={getCustomSize(15)} />

                    <Text style={styles.setWorkingHourText}
                        onPress={() => navigation.navigate('SettingWorkingHourScreen')}>{t('setWorkingHours')}</Text>
                    <CustomClick
                        title='Next Screen'
                        handlePress={() => navigation.navigate('SettingWorkingHourScreen')} />
                </View>

            </ScrollView>

        </SafeAreaWithStatusBar>
    )
}