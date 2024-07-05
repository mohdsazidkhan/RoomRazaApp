import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWithStatusBar from '../../components/molecules/safeAreaWithStatusBar'
import { AppColor } from '../../theme/appColor'
import { useAuth } from '../../routes/context/Auth'
import { styles } from './styles'
import { AppFontSize, getCustomSize } from '../../theme/appFontSize'
import CustomIcon from '../../components/atoms/customIcon'
import { SvgImagePath } from '../../assets/helper/imagePath'
import DividerView from '../../components/atoms/dividerView'
import CustomCheckBox from '../../components/molecules/customCheckBox'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/screen'
import TargetProgressView from '../../components/atoms/targetProgressView'
import AttendanceView from '../../components/atoms/attendanceView'
import GradientHeaderWithBackButton from '../../components/atoms/header/gradientHeader'
import CustomSearchView from '../../components/organisms/searchView'
import { Modal, Portal } from 'react-native-paper'
import CommonModal from '../../components/organisms/modal/commonModal'
import CustomButton from '../../components/atoms/customButton'
import CustomClick from '../../components/customClick'
import { useTranslation } from 'react-i18next'
import { API_BASE_URL } from '../../routes/context/GlobalUrl'
import axios from 'axios'


type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>


export default function HomeScreen({ navigation }: Props) {
  // const auth = useAuth();
  const { profileData, loading } = useAuth(); // Get profileData and loading from context
  // console.log('photoFile', profileData?.photoFile)

  const { t } = useTranslation();
  const [activeComponent, setActiveComponent] = useState('checkin');
  const [eCheckIn, setECheckIn] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const currentDate = new Date();


  // Format Date
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;

  // Format Time
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;
  const [reminderModal, setReminderModal] = useState(false)
  const fetchData = async () => {
    const url = `${API_BASE_URL}/Attendance/stylist/attendanceregister?salonReferenceId=554849eb-ab72-4bf4-8d41-59425664dbbc&employeeReferenceId=2DA8824F-C78C-4FB9-A9A2-879F586F6DAA&attendanceDate=${formattedDate}`;
    // const url = `https://dev-salon-operation-api.azurewebsites.net/api/Attendance/stylist/attendanceregister?salonReferenceId=554849eb-ab72-4bf4-8d41-59425664dbbc&employeeReferenceId=2DA8824F-C78C-4FB9-A9A2-879F586F6DAA&attendanceDate=05%2F22%2F2024`
    try {
      const response = await axios.get(url);
      const eCheckInValue = response?.data?.data?.eCheckIn;
      setECheckIn(eCheckInValue);
      setReferenceId(response.data?.data?.referenceId);
    } catch (error) {
      console.log('fetch api error', error)
    }
  };
  const handleAttendancePress = async (checkType) => {
    try {
      const data = {
        referenceId: activeComponent === 'checkin' ? "" : referenceId,
        salonReferenceId: "554849eb-ab72-4bf4-8d41-59425664dbbc",
        employeeReferenceId: "2DA8824F-C78C-4FB9-A9A2-879F586F6DAA",
        attendanceDate: currentDate.toISOString(),
        eCheckIn: activeComponent === 'checkin' ? currentTime : eCheckIn,
        eCheckOut: activeComponent === 'checkout' ? currentTime : "",
        createdBy: activeComponent == 'checkin' ? 1 : 0,
        createdOn: currentDate,
        updatedBy: activeComponent == 'checkout' ? 1 : 0,
        updatedOn: currentDate
      };
      const apiUrl = `${API_BASE_URL}/Attendance/stylist/attendance`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('response', response)

      if (checkType === 'checkin') {
        setActiveComponent('checkout');
      } else if (checkType === 'checkout') {
        setActiveComponent('checkin');
      }

      if (activeComponent == 'checkin') {
        fetchData()
      } else {
        null
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };
  const imageUrl = 'https://your-image-url.com/your-image.jpg';

  return (
    <SafeAreaWithStatusBar
      statusBarBgColor={AppColor.WHITE_COLOR}>
      {/* <Pressable style={{ backgroundColor: AppColor.DEEP_SPACE_SPARKLE, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, marginHorizontal: 50, marginTop: 200 }}
        onPress={() => auth.signOut()}>
        <Text style={{ color: '#fff' }}>Log out</Text>
      </Pressable> */}



      <View style={styles.headerView}>
        <View style={{ flex: 1 }}>
          <GradientHeaderWithBackButton backButtonVisibility={false}
            textColor={AppColor.EERIE_BLACK}
            imageUrl={profileData?.photoFile ||imageUrl} 
            headerTitle= {profileData?.firstName}/>
        </View>


        <Pressable style={styles.notificationIconView}
          onPress={() => navigation.navigate('NotificationsScreen')}>
          <CustomIcon
            iconName='notifications-none'
            iconSize={getCustomSize(30)}
            iconColor={AppColor.BLACK_COLOR} />
        </Pressable>
      </View>

      {/* <CustomClick
        handlePress={() => navigation.navigate('NotificationsScreen')}
        title='Natification' /> */}

      <ScrollView>
        <View style={styles.container}>


          <View style={styles.salonView}>
            <View style={styles.salonSubView}>
              <Text style={styles.salonNameText}>Salon Name</Text>
              <Text style={styles.salonShiftText}>{t('shift')}:
                <Text style={styles.salonDayText}> Day</Text>
              </Text>
            </View>


            <View style={styles.salonSubView}>
              <Text style={styles.salonNameText}>05-12-2023</Text>
              <Text style={styles.salonShiftText}>Mon/
                <Text style={styles.salonDayText}>10:00AM - 7:00PM</Text>
              </Text>
            </View>
          </View>

          {activeComponent === 'checkin' && (
            <AttendanceView
              gradientColorOne={AppColor.MAY_GREEN_COLOR}
              gradientColorTwo={AppColor.GREEN_LIZARD_COLOR}
              title={t('Check-in')}
              subTitle={formattedDate}
              rightText={t('click here checkin')}
              handlePress={() => handleAttendancePress('checkin')} />
          )}
          {activeComponent === 'checkout' && (
            <AttendanceView
              gradientColorOne={AppColor.MEDIUM_VERMILION_COLOR}
              gradientColorTwo={AppColor.PASTEL_ORANGE_COLOR}
              title={t('check-out')}
              subTitle={formattedDate}
              rightText={t('click Here check out')}
              handlePress={() => handleAttendancePress('checkout')} />
          )}


          <CustomSearchView
            placeholder={t('search')}
            topMargin={getCustomSize(25)} />

          <View style={styles.targetView}>
            <Text style={styles.targetText} onPress={() => setReminderModal(true)}>{t('targetStatus')}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.viewAllText} onPress={() => navigation.navigate('ViewTargetScreen')}>{t('viewDetails')}</Text>
              <CustomIcon
                iconName='chevron-right'
                iconColor={AppColor.AZURE}
                iconSize={getCustomSize(22)} />
            </View>
          </View>

          <CustomClick
            title='Target Detail'
            handlePress={() => navigation.navigate('ViewTargetScreen')} />

          <DividerView />


          <TargetProgressView

            achieveTarget='60'
            achieveTargetText='200'
            unAchieveTargetText='100'
            startValue={0}
            endValue={100} />



          <View style={styles.targetAchieveView}>

            <View style={styles.targetCard}>
              <View style={{ flex: 1, paddingHorizontal: getCustomSize(15) }}>
                <Text style={styles.targetHeadingText}>{t('actualAchieved')}</Text>
                <Text style={styles.targetSubHeadingText}>60k</Text>
              </View>

              <View style={styles.verticalDividerView} />

              <View style={{ flex: 1, paddingHorizontal: getCustomSize(15) }}>
                <Text style={styles.targetHeadingText}>{t('projection')}</Text>
                <Text style={styles.targetSubHeadingText}>20k</Text>
              </View>
            </View>


            <DividerView marginVertical={getCustomSize(20)} />

            <View style={styles.targetCard}>
              <View style={{ flex: 1, paddingHorizontal: getCustomSize(15) }}>
                <Text style={styles.targetHeadingText}>{t('achieved')}</Text>
                <Text style={styles.targetSubHeadingText}>80%</Text>
              </View>
              <View style={styles.verticalDividerView} />
              <View style={{ flex: 1, paddingHorizontal: getCustomSize(15) }}>
                <Text style={styles.targetHeadingText}>{t('target')}</Text>
                <Text style={styles.targetSubHeadingText}>80k</Text>
              </View>
            </View>


          </View>







          <View style={styles.targetView}>
            <Text style={styles.targetText}>{t('todayAppointment')}(3)</Text>
            <Text style={styles.viewAllText}>{t('viewAll')}</Text>
          </View>

          <View style={styles.appointmentCardView}>
            <View style={styles.appointmentCardMainView}>

              <View style={{ padding: getCustomSize(14) }}>
                <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                <Text style={styles.appointmentClientName}>Client Name</Text>
                <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                <Text style={styles.appointmentServicePlace}>@Salon</Text>
                <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                <Text style={styles.appointmentAmtText}>{t('status')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
              </View>

              <View style={{ padding: getCustomSize(14), flex: 1, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.appointmentTime}>12:15 PM - 1:45 PM</Text>
                    <Text style={styles.appointmentDuration}>1h 30Min</Text>
                  </View>

                  <View style={styles.appointmentCallBg}>
                    <CustomIcon
                      iconColor={AppColor.WHITE_COLOR}
                      iconSize={getCustomSize(25)}
                      iconName='call'
                    />
                  </View>
                </View>

                <View style={styles.chevronRight}>
                  <CustomIcon
                    iconName='chevron-right'
                    iconSize={getCustomSize(25)}
                    iconColor={AppColor.DARK_LIVER_COLOR} />

                </View>

                <View style={styles.appointmentCustomerTypeView}>
                  <SvgImagePath.Tag />
                  <Text style={styles.appointmentCustomerType}>Influencer</Text>
                </View>
              </View>
            </View>

            <DividerView marginVertical={getCustomSize(5)} />


            <View style={{ flexDirection: 'row' }}>
              <View style={styles.filterSortSubView}>
                <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                <Text>{t('checkIn')}</Text>
              </View>

              <View style={styles.filterSortSubView}>
                <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                <Text>{t('noShow')}</Text>
              </View>
            </View>


          </View>



          <Pressable style={styles.appointmentPressable}
            onPress={() => navigation.navigate('ViewAppointmentScreen')}
          >

            <View style={styles.appointmentCardView}>
              <View style={styles.appointmentCardMainView}>

                <View style={{ padding: getCustomSize(14) }}>
                  <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                  <Text style={styles.appointmentClientName}>Client Name</Text>
                  <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                  <Text style={styles.appointmentServicePlace}>@Salon</Text>
                  <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                  <Text style={styles.appointmentAmtText}>{t('status')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
                </View>

                <View style={{ padding: getCustomSize(14), flex: 1, alignItems: 'flex-end' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Text style={styles.appointmentTime}>12:15 PM - 1:45 PM</Text>
                      <Text style={styles.appointmentDuration}>1h 30Min</Text>
                    </View>

                    <View style={styles.appointmentCallBg}>
                      <CustomIcon
                        iconColor={AppColor.WHITE_COLOR}
                        iconSize={getCustomSize(25)}
                        iconName='call'
                      />
                    </View>
                  </View>

                  <View style={styles.chevronRight}>
                    <CustomIcon
                      iconName='chevron-right'
                      iconSize={getCustomSize(25)}
                      iconColor={AppColor.DARK_LIVER_COLOR} />

                  </View>

                  <View style={styles.appointmentCustomerTypeView}>
                    <SvgImagePath.Tag />
                    <Text style={styles.appointmentCustomerType}>Influencer</Text>
                  </View>
                </View>
              </View>

              <DividerView marginVertical={getCustomSize(5)} />


              <View style={{ flexDirection: 'row' }}>
                <View style={styles.filterSortSubView}>
                  <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                  <Text>{t('checkIn')}</Text>
                </View>

                <View style={styles.filterSortSubView}>
                  <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                  <Text>{t('noShow')}</Text>
                </View>
              </View>


            </View>


            <DividerView marginVertical={getCustomSize(5)} />


            <View style={styles.appointmentCardView}>
              <View style={styles.appointmentCardMainView}>

                <View style={{ padding: getCustomSize(14) }}>
                  <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                  <Text style={styles.appointmentClientName}>Client Name</Text>
                  <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                  <Text style={styles.appointmentServicePlace}>@Salon</Text>
                  <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                  <Text style={styles.appointmentAmtText}>{t('status')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
                </View>

                <View style={{ padding: getCustomSize(14), flex: 1, alignItems: 'flex-end' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Text style={styles.appointmentTime}>12:15 PM - 1:45 PM</Text>
                      <Text style={styles.appointmentDuration}>1h 30Min</Text>
                    </View>

                    <View style={styles.appointmentCallBg}>
                      <CustomIcon
                        iconColor={AppColor.WHITE_COLOR}
                        iconSize={getCustomSize(25)}
                        iconName='call'
                      />
                    </View>
                  </View>

                  <View style={styles.chevronRight}>
                    <CustomIcon
                      iconName='chevron-right'
                      iconSize={getCustomSize(25)}
                      iconColor={AppColor.DARK_LIVER_COLOR} />

                  </View>

                  <View style={styles.appointmentCustomerTypeView}>
                    <SvgImagePath.Tag />
                    <Text style={styles.appointmentCustomerType}>Influencer</Text>
                  </View>
                </View>
              </View>

              <DividerView marginVertical={getCustomSize(5)} />


              <View style={{ flexDirection: 'row' }}>
                <View style={styles.filterSortSubView}>
                  <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                  <Text>{t('checkIn')}</Text>
                </View>

                <View style={styles.filterSortSubView}>
                  <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                  <Text>{t('noShow')}</Text>
                </View>
              </View>


            </View>




          </Pressable>

          <View style={styles.appointmentCardView}>
            <View style={styles.appointmentCardMainView}>

              <View style={{ padding: getCustomSize(14) }}>
                <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                <Text style={styles.appointmentClientName}>Client Name</Text>
                <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                <Text style={styles.appointmentServicePlace}>@Salon</Text>
                <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                <Text style={styles.appointmentAmtText}>{t('status')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
              </View>

              <View style={{ padding: getCustomSize(14), flex: 1, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.appointmentTime}>12:15 PM - 1:45 PM</Text>
                    <Text style={styles.appointmentDuration}>1h 30Min</Text>
                  </View>

                  <View style={styles.appointmentCallBg}>
                    <CustomIcon
                      iconColor={AppColor.WHITE_COLOR}
                      iconSize={getCustomSize(25)}
                      iconName='call'
                    />
                  </View>
                </View>

                <View style={styles.chevronRight}>
                  <CustomIcon
                    iconName='chevron-right'
                    iconSize={getCustomSize(25)}
                    iconColor={AppColor.DARK_LIVER_COLOR} />

                </View>

                <View style={styles.appointmentCustomerTypeView}>
                  <SvgImagePath.Tag />
                  <Text style={styles.appointmentCustomerType}>Influencer</Text>
                </View>
              </View>
            </View>

            <DividerView marginVertical={getCustomSize(5)} />


            <View style={{ flexDirection: 'row' }}>
              <View style={styles.filterSortSubView}>
                <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                <Text>{t('checkIn')}</Text>
              </View>

              <View style={styles.filterSortSubView}>
                <CustomCheckBox themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                <Text>{t('noShow')}</Text>
              </View>
            </View>


          </View>



        </View>
      </ScrollView>




      <Portal>
        <Modal
          visible={reminderModal}
          dismissable={false}
          // onDismiss={() => setReminderModal(false)}
          contentContainerStyle={styles.loaderModalContainer}
          style={{ justifyContent: 'center' }}>
          <CommonModal >
            <View >
              <View style={{ ...styles.modalHeaderView, flexDirection: 'row' }}>
                <Text style={styles.modelHeaderTitleText}>Reminder!!!</Text>
                <Pressable onPress={() => setReminderModal(false)}>
                  <CustomIcon
                    iconName='cancel'
                    iconColor={AppColor.WHITE_COLOR} />
                </Pressable>
              </View>
              <Text style={styles.modelDescriptionText}>You are running late from your respective deadline. Kindly manage your speed as per the given dates only. It is a gentle reminder that we have to complete our project ASAP. </Text>
              <View style={{ alignItems: 'center', marginBottom: getCustomSize(20) }}>
                <CustomButton
                  largeButton={false}
                  backgroundColor={AppColor.DEEP_SPACE_SPARKLE}
                  btnTitle='OK'
                  textColor={AppColor.WHITE_COLOR}
                  handlePress={() => setReminderModal(false)} />
              </View>
            </View>
          </CommonModal>
        </Modal>
      </Portal>


    </SafeAreaWithStatusBar >
  )
}