import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar'
import HeaderWithBackButton from '../../../components/atoms/header'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/screen'
import { styles } from './styles'
import { AppColor } from '../../../theme/appColor'
import CustomIcon from '../../../components/atoms/customIcon'
import { getCustomSize } from '../../../theme/appFontSize'
import CustomCalendar from '../../../components/organisms/calendar'
import CustomClick from '../../../components/customClick'
import { useTranslation } from 'react-i18next'


type Props = NativeStackScreenProps<RootStackParamList, 'AttendanceHistoryScreen'>
export default function AttendanceHistoryScreen({ navigation }: Props) {
  const { t } = useTranslation()
  return (
    <SafeAreaWithStatusBar>
      <HeaderWithBackButton
        headerTitle={t('attendanceHistory')}
        backHandle={() => navigation.goBack()} />

      <ScrollView>
        <View style={styles.container}>



          <View style={styles.calendarView}>
            <CustomCalendar />
            <Pressable style={styles.calendarTodayView}>
              <Text style={styles.todayText}>{t('today')}</Text>
            </Pressable>
          </View>


          <CustomClick
            title='Leave History'
            handlePress={() => navigation.navigate('ViewLeaveHistoryScreen')} />


          <Pressable style={styles.weekMonthView}>
            <Text style={styles.selectedTabText}>{t('all')}</Text>
            <Text style={styles.unSelectedText} onPress={() => navigation.navigate('ViewLeaveHistoryScreen')}>{t('absent')}</Text>
            <Text style={styles.unSelectedText}>{t('leave')}</Text>
          </Pressable>



          <View style={styles.targetHeading}>
            <Text style={styles.attendanceSubHeading}>{t('date')}</Text>
            <Text style={styles.attendanceSubHeading}>{t('shift')}</Text>
            <Text style={styles.attendanceSubHeading}>{t('clockin')}</Text>
            <Text style={styles.attendanceSubHeading}>{t('clockout')}</Text>
            <Text style={styles.attendanceSubHeading}>{t('hoursWorked')}</Text>

          </View>

          <View style={styles.attendanceDetailView}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>

          <View style={{ ...styles.attendanceDetailView, backgroundColor: AppColor.WHITE_COLOR }}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>
          <View style={styles.attendanceDetailView}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>

          <View style={{ ...styles.attendanceDetailView, backgroundColor: AppColor.WHITE_COLOR }}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>

          <View style={styles.attendanceDetailView}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>

          <View style={{ ...styles.attendanceDetailView, backgroundColor: AppColor.WHITE_COLOR }}>
            <Text style={styles.attendanceSubHeading}>2/12/22</Text>
            <Text style={styles.attendanceSubHeading}>Day</Text>
            <Text style={styles.attendanceSubHeading}>10:00AM</Text>
            <Text style={styles.attendanceSubHeading}>08:00PM</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={styles.attendanceSubHeading}>8 hrs</Text>
              <CustomIcon
                iconName='keyboard-arrow-down'
                iconColor={AppColor.TAUPE_GRAY} />
            </View>
          </View>


          <View style={styles.bottomDetailView}>
            <View style={styles.bottomDetailSubView}>
              <Text style={styles.amtHeadingText}>{t('totalPresentDays')}</Text>
              <Text style={styles.amtHeadingText}>28</Text>
            </View>
            <View style={styles.bottomDetailSubView}>
              <Text style={styles.amtHeadingText}>{t('totalAbsentDays')}</Text>
              <Text style={styles.amtHeadingText}>01</Text>
            </View>
            <View style={styles.bottomDetailSubView}>
              <Text style={styles.amtHeadingText}>{t('totalLeaveDays')}</Text>
              <Text style={styles.amtHeadingText}>02</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaWithStatusBar>
  )
}