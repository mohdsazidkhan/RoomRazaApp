import BottomSheet from '@gorhom/bottom-sheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Modal, Portal } from 'react-native-paper';
import { ImagePath, SvgImagePath } from '../../../assets/helper/imagePath';
import * as appMessage from '../../../assets/messages';
import AppointmentCard from '../../../components/AppointmentCard';
import CustomButton from '../../../components/atoms/customButton';
import CustomIcon from '../../../components/atoms/customIcon';
import DividerView from '../../../components/atoms/dividerView';
import Header from '../../../components/header';
import IconButton from '../../../components/iconButton';
import DynamicBottomSheet from '../../../components/molecules/bottomSheet';
import CalendarHorizontalStrip from '../../../components/molecules/calendarHorizontalStrip';
import CustomCheckBox from '../../../components/molecules/customCheckBox';
import SafeAreaWithStatusBar from '../../../components/molecules/safeAreaWithStatusBar';
import CommonModal from '../../../components/organisms/modal/commonModal';
import CreateAppointmentModal from '../../../components/organisms/modal/createAppointment';
import CustomSearchView from '../../../components/organisms/searchView';
import { RootStackParamList } from '../../../routes/screen';
import { AppColor } from '../../../theme/appColor';
import { AppFonts } from '../../../theme/appFont';
import { getCustomSize } from '../../../theme/appFontSize';
import { styles } from './styles';
import AppointmentStatus from '../../../components/appointmentStatus';
import { API_BASE_URL } from '../../../routes/context/GlobalUrl';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../../routes/context/Auth';

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentScreen'>;

export default function AppointmentScreen({ navigation }: Props) {
  const { profileData, loading } = useAuth(); // Get profileData and loading from context

  const { t } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);
  const [appointmentModal, setAppointmentModal] = useState<boolean>(false);
  const [sortModalVisibility, setSortModalVisibility] =
    useState<boolean>(false);
  const filterBottomSheetRef = useRef<BottomSheet>(null);
  const sortBottomSheetRef = useRef<BottomSheet>(null);
  const [filterOneStatus, setFilterOneStatus] = useState<boolean>(false);
  const [filterTwoStatus, setFilterTwoStatus] = useState<boolean>(false);

  const openFilterBottomSheet = () => {
    if (filterBottomSheetRef.current) {
      filterBottomSheetRef.current.expand();
    }
  };

  const openSortBottomSheet = () => {
    if (sortBottomSheetRef.current) {
      sortBottomSheetRef.current.expand();
    }
  };

  const actions = [
    {
      text: t('createNewAppointment'),
      name: 'bt_create_appointment',
      textStyle: { fontSize: getCustomSize(16) },
      position: 2,
      buttonSize: 0,
    },
  ];

  const backPressHandle = () => {
    navigation.goBack();
  };


  const renderItem: React.FC<{ item: { key: string; text: string } }> = ({
    item,
  }) => (
    <View style={styles.appointmentView}>
      <IconButton
        parentStyle={{
          width: 66,
          height: 66,
          backgroundColor: selected === item.key ? '#456277' : 'white',
          elevation: 5,
        }}
        childStyle={{ height: 26, width: 26 }}
        imageSource={item?.imageUrl}
        onPress={() => setSelected(item.key)}
      />
      <Text style={styles.appointmentStatusText}>{item.text}</Text>
    </View>
  );

  const [buttonLoad, setButtonLoad] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState<Date>(new Date());

  const currentDateString = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  console.log('currentDateString----->', currentDateString)
  const fetchAllData = async () => {
    const url = `${API_BASE_URL}/Appointment/salon/F69CEEB6-0B53-4712-A097-D3BC52A936D8/${currentDateString}`;
    setButtonLoad(true);
    try {
      const response = await axios.get(url);
      const dataa = response?.data?.data;
      console.log('Appointment---------------->', dataa)
      const getServiceStatusText = (statusId) => {
        switch (statusId) {
          case 5:
            return "Booked";
          case 10:
            return "Ongoing";
          case 15:
            return "Completed";
          case 20:
            return "Upcoming";
          case 25:
            return "Service Cancelled";
          case 30:
            return "No-Show";
          case 35:
            return "Re-scheduled";
          case 40:
            return "Transferred";
            case 45:
            return "Waiting";
            case 50:
            return "Paid";
            case 55:
            return "Unpaid";
            case 60:
            return "New Service Added";
          default:
            return "Unknown status";
        }
      };
      const extractedData = dataa.map(appointment => {
        return {
          creationTime: appointment.creationTime,
          clientName: appointment.clientName,
          clientReferenceId: appointment.clientReferenceId,
          serviceName: appointment.appointmentServices[0]?.serviceName,
          timeOfService: appointment.appointmentServices[0]?.timeOfService,
          endTimeOfService: appointment.appointmentServices[0]?.endTimeOfService,
          amountOfService: appointment.appointmentServices[0]?.amountOfService,
          serviceReferenceId: appointment.appointmentServices[0]?.referenceId,
          serviceReferenceIdd: appointment.appointmentServices[0]?.serviceReferenceId,
          serviceStatusText: getServiceStatusText(appointment?.appointmentServices[0]?.serviceStatusId),
          allocatedEmployeeName: appointment?.appointmentServices[0]?.serviceEmployees[0]?.allocatedEmployeeName,
          serviceEmployeesReferenceId: appointment?.appointmentServices[0]?.serviceEmployees[0]?.referenceId,
          referenceId: appointment.referenceId,

        };
      });
      setData(extractedData)

      setButtonLoad(false);
    } catch (error) {
      setButtonLoad(false);
      console.log('fetch api error', error);
    }
  };
  // useEffect(() => {
  //   fetchAllData();
  // }, [currentDateString]);
  useFocusEffect(
    React.useCallback(() => {
      fetchAllData();
    }, [currentDateString])
  );

  const [isCheckedCheckIn, setIsCheckedCheckIn] = useState(false);
  const [isCheckedNoShow, setIsCheckedNoShow] = useState(false);

  const handleCheckIn = async (appointment) => {
    // Check if the appointment object and required properties exist

    const requestData = {
      salonReferenceId: 'F69CEEB6-0B53-4712-A097-D3BC52A936D8',
      appointmentReferenceId: appointment.referenceId,
      appointmentStatusId: 3,
      appointmentServiceReferenceId: appointment.serviceReferenceId,
      appointmentServiceStatusId: 3, // For check-in
      updatedBy: 1,
      updatedOn: "2024-06-05T13:26:19.667Z"
    };

    console.log('requestData====>', requestData)
    try {
      const response = await fetch('https://dev-salon-operation-api.azurewebsites.net/api/Appointment/updateappointmentstatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      console.log('response', response)

      if (response.ok) {
        fetchAllData();

      } else {

        console.error('Failed to check-in');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };


  const handleNoShow = async (appointment) => {
    const requestData = {
      salonReferenceId: 'F69CEEB6-0B53-4712-A097-D3BC52A936D8',
      appointmentReferenceId: appointment.referenceId,
      appointmentStatusId: 6,
      appointmentServiceReferenceId: appointment.serviceReferenceId,
      appointmentServiceStatusId: 6, // For check-in
      updatedBy: 1,
      updatedOn: "2024-06-05T13:26:19.667Z"
    };

    try {
      const response = await fetch('https://dev-salon-operation-api.azurewebsites.net/api/Appointment/updateappointmentstatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
    fetchAllData();

      } else {
        console.error('Failed to mark as No Show');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };





  return (
    <SafeAreaWithStatusBar statusBarBgColor={AppColor.CHARCOAL_COLOR}>
      {buttonLoad ? (
        <View
          style={{
            position: 'absolute',
            flex: 1,
            height: '100%',
            backgroundColor: 'black',
            zIndex: 1,
            opacity: 0.6,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : null}
      <ScrollView>
        <LinearGradient
          colors={[AppColor.CHARCOAL_COLOR, AppColor.DEEP_SPACE_SPARKLE]}
          locations={[0.22, 0.8]}
          useAngle={true}
          angle={135}
          style={{ flex: 1, alignContent: 'center' }}
          angleCenter={{ x: 0.5, y: 0.5 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Header backHanlder={backPressHandle} />

          {/* <GradientHeaderWithBackButton headerTitle="Hi, Rebecca" /> */}

          <View style={{ marginHorizontal: 16, marginTop: 20 }}>
            <CustomSearchView placeholder="Search Appointments" />




          </View>
          <View style={{ marginTop: 0 }}>
            <CalendarHorizontalStrip dateSelection={(date: Date) => {
              setDate(date)
            }} />
            <Pressable style={styles.calendarTodayView}>
              <Text style={styles.todayText}>Today</Text>
            </Pressable>
          </View>
        </LinearGradient>

        <View style={{ margin: 15 }}>


          {/* status */}
          {/* <AppointmentStatus appointmentStatusData={appointmentStatusData} /> */}
          {data.length == 0 ?
            <>
              <Text style={{ color: 'black', textAlign: 'center', marginTop: 60 }}>No Appointment </Text>
            </>
            :
            <>
              {data?.map(appointment => (
                <Pressable style={styles.appointmentPressable}
                  // onPress={() => navigation.navigate('ViewAppointmentScreen')}
                  onPress={() => {
                    navigation.navigate('ViewAppointmentScreen', { appointment });
                  }}
                >

                  < View style={styles.appointmentCardView} >
                    <View key={appointment.referenceId} style={styles.appointmentCardMainView}>

                      <View style={{ padding: getCustomSize(14) }}>
                        <Text style={styles.appointmentStatus}>{t('ongoing')}</Text>
                        {appointment && appointment.clientName && (
                          <Text style={styles.appointmentClientName}>{appointment?.clientName}</Text>
                        )}
                        {appointment?.serviceName && (
                          <Text style={styles.appointmentServiceName}>
                            {appointment.serviceName}
                          </Text>
                        )}
                        {/* <Text style={styles.appointmentServicePlace}>@Salon</Text> */}

                        {appointment.amountOfService && (
                          <Text style={styles.appointmentAmtText}>{t('amount')}: <Text style={styles.appointmentAmtRsText}>Rs.{appointment.amountOfService}</Text></Text>
                        )}
                        <Text style={styles.appointmentAmtText}>{t('status')}:<Text style={styles.appointmentStatusCurrent}>  {appointment.serviceStatusText}</Text></Text>
                      </View>

                      <View style={{ padding: getCustomSize(14), flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Text style={styles.appointmentTime}>{appointment.creationTime}</Text>
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
                            iconColor={AppColor.DARK_LIVER_COLOR}
                          />
                        </View>

                        <View style={styles.appointmentCustomerTypeView}>
                          <SvgImagePath.Tag />
                          <Text style={styles.appointmentCustomerType}>Influencer</Text>
                        </View>
                      </View>
                    </View>

                    <DividerView marginVertical={getCustomSize(5)} />

                    {/* <View style={{ flexDirection: 'row' }}>
                      <View style={styles.filterSortSubView}>
                        <CustomCheckBox item={appointment.serviceStatusText == 8 ? true : false} themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                        <Text>{t('checkIn')}</Text>
                      </View>

                      <View style={styles.filterSortSubView}>
                        <CustomCheckBox item={appointment.serviceStatusText == 6 ? true : false} onValueChange={} themeColor={AppColor.DEEP_SPACE_SPARKLE} />
                        <Text>{t('noShow')}</Text>
                      </View>
                    </View> */}
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.filterSortSubView}>
                        {console.log('appointment.serviceStatusId', appointment?.serviceStatusText)}
                        <CustomCheckBox
                          // item={appointment.serviceStatusText == 'Completed' ? true : false}
                          themeColor={AppColor.DEEP_SPACE_SPARKLE}
                          // onValueChange={() => handleCheckIn(appointment)}
                        />
                        <Text>{t('checkIn')}</Text>
                      </View>

                      <View style={styles.filterSortSubView}>
                        <CustomCheckBox
                          item={appointment.serviceStatusText == 'No Show' ? true : false}

                          themeColor={AppColor.DEEP_SPACE_SPARKLE}
                          // onValueChange={() => handleNoShow(appointment)}
                        />
                        <Text>{t('noShow')}</Text>
                      </View>
                    </View>

                  </View>

                </Pressable>
              ))}
            </>
          }

        </View>
      </ScrollView >
    </SafeAreaWithStatusBar >
  );
}
