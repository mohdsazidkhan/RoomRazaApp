import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FloatingAction } from "react-native-floating-action";
import SafeAreaWithStatusBar from '../../components/molecules/safeAreaWithStatusBar'
import CustomTextInput from '../../components/molecules/customTextInput'
import { AppColor } from '../../theme/appColor'
import DividerView from '../../components/atoms/dividerView'
import GradientHeaderWithBackButton from '../../components/atoms/header/gradientHeader'
import LinearGradient from 'react-native-linear-gradient'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/screen'
import { styles } from './styles'
import * as appMessage from '../../assets/messages'
import CustomIcon from '../../components/atoms/customIcon'
import CustomCheckBox from '../../components/molecules/customCheckBox'
import CalendarHorizontalStrip from '../../components/molecules/calendarHorizontalStrip'
import { SvgImagePath } from '../../assets/helper/imagePath'
import FloatingActionButton from '../../components/molecules/floatingActionButton';
import { Modal, Portal } from 'react-native-paper';
import CreateAppointmentModal from '../../components/organisms/modal/createAppointment';
import { getCustomSize } from '../../theme/appFontSize';
import { useTranslation } from 'react-i18next';


type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentForClientScreen'>






export default function AppointmentForClientScreen({ navigation }: Props) {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const [appointmentModal, setAppointmentModal] = useState(false);

  const actions = [
    {
      text: t('createNewAppointment'),
      name: "bt_create_appointment",
      textStyle: { fontSize: getCustomSize(16) },
      position: 2,
      buttonSize: 0,
    }
  ];

  return (
    <SafeAreaWithStatusBar
      statusBarBgColor={AppColor.CHARCOAL_COLOR}>

      <ScrollView>
        <LinearGradient
          colors={[AppColor.CHARCOAL_COLOR, AppColor.DEEP_SPACE_SPARKLE,]}
          locations={[0.22, 0.8]}
          useAngle={true}
          angle={135}
          style={{ flex: 1, alignContent: 'center', paddingTop: getCustomSize(13) }}
          angleCenter={{ x: 0.5, y: 0.5 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>

          <GradientHeaderWithBackButton
            headerTitle='Hi, Rebecca' />

          <View style={{ margin: getCustomSize(15) }}>
            <CustomTextInput
              placeholder={t('search')}
              labelValue='' />

            <View style={styles.filterSortView}>
              <View style={styles.filterSortSubView}>
                <CustomIcon
                  iconColor={AppColor.WHITE_COLOR}
                  iconName='filter-alt'
                  iconSize={getCustomSize(25)} />
                <Text style={styles.filterSortText}>{t('filter')}</Text>
              </View>

              <View style={styles.filterSortSubView}>
                <CustomIcon
                  iconColor={AppColor.WHITE_COLOR}
                  iconName='filter-alt'
                  iconSize={getCustomSize(25)} />
                <Text style={styles.filterSortText}>{t('sort')}</Text>
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <CalendarHorizontalStrip />

              <Pressable style={styles.calendarTodayView}>
                <Text style={styles.todayText}>{t('today')}</Text>
              </Pressable>
            </View>


          </View>



        </LinearGradient>





        <View style={{ margin: getCustomSize(15) }}>
          <View style={styles.appointmentHeadingView}>
            <Text style={styles.appointmentHeadingText}>{t('appointments')}</Text>
            <Text style={styles.viewHistoryText}>{t('viewHistory')}</Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>All</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Ongoing</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Upcoming</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Completed</Text>
            </View>

            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Upcoming</Text>
            </View>
            <View style={styles.appointmentView}>
              <View style={styles.appointmentImageView} />
              <Text style={styles.appointmentStatusText}>Completed</Text>
            </View>
          </ScrollView>


          <View style={styles.appointmentCardView}>
            <View style={styles.appointmentCardMainView}>

              <View style={{ padding: getCustomSize(14) }}>
                <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                <Text style={styles.appointmentClientName}>Client Name</Text>
                <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                <Text style={styles.appointmentServicePlace}>@Salon</Text>
                <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                <Text style={styles.appointmentAmtText}>{t('स्थिति')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
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



          <View style={styles.appointmentCardView}>
            <View style={styles.appointmentCardMainView}>

              <View style={{ padding: getCustomSize(14) }}>
                <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                <Text style={styles.appointmentClientName}>Client Name</Text>
                <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                <Text style={styles.appointmentServicePlace}>@Salon</Text>
                <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                <Text style={styles.appointmentAmtText}>{t('स्थिति')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
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


          <View style={styles.appointmentCardView}>
            <View style={styles.appointmentCardMainView}>

              <View style={{ padding: getCustomSize(14) }}>
                <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                <Text style={styles.appointmentClientName}>Client Name</Text>
                <Text style={styles.appointmentServiceName}>Hair Coloring  1/2</Text>
                <Text style={styles.appointmentServicePlace}>@Salon</Text>
                <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.900</Text></Text>
                <Text style={styles.appointmentAmtText}>{t('स्थिति')}:<Text style={styles.appointmentStatusCurrent}>Confirmed</Text></Text>
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
          visible={appointmentModal}
          dismissable={true}
          onDismiss={() => setAppointmentModal(false)}
          contentContainerStyle={styles.loaderModalContainer}
          style={{ justifyContent: 'center' }}>
          <CreateAppointmentModal
            onPressCall={() => { setAppointmentModal(false), navigation.navigate('CreateNewAppointmentScreen') }}
            onPressWalkIn={() => console.log('Walk in')}
            onPressSalon={() => console.log('Salon')}
            onPressHome={() => console.log('Home')}
          />
        </Modal>


      </Portal>

      <FloatingActionButton
        actions={actions}
        itemPress={(name: any) => {
          setAppointmentModal(true),
            console.log(`selected button: ${name}`);
        }} />

    </SafeAreaWithStatusBar>
  )
}